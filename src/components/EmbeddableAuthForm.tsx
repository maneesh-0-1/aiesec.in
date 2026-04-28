"use client";

import { useEffect } from "react";

// Programme codes: 7 = GV, 8 = GTA, 9 = GTE
type ProgrammeCode = 7 | 8 | 9;

interface Props {
  programmeCode?: ProgrammeCode;
}

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    EmbeddableAuth: any;
    _aiesecFetchPatched?: boolean;
    _aiesecClickListenerAdded?: boolean;
  }
}

const PROGRAMME_CLASS: Record<ProgrammeCode, string> = {
  7: "gv",
  8: "gta",
  9: "gte",
};

export default function EmbeddableAuthForm({ programmeCode = 7 }: Props) {
  const containerId = "embeddable-auth-container";
  const programmeClass = PROGRAMME_CLASS[programmeCode];

  useEffect(() => {
    // ── 1. Inject the CSS once ────────────────────────────────────────
    const cssId = "aiesec-embeddable-css";
    if (!document.getElementById(cssId)) {
      const link = document.createElement("link");
      link.id = cssId;
      link.rel = "stylesheet";
      link.href =
        "https://unpkg.com/@commutatus/aiesec-embeddable-auth@1.4.3/bundle.css";
      document.head.appendChild(link);
    }

    // ── 2. Inject the custom styles ───────────────────────────────────
    const styleId = "aiesec-embeddable-style";
    if (!document.getElementById(styleId)) {
      const style = document.createElement("style");
      style.id = styleId;
      style.textContent = `
        #${containerId} {
          --formBG: transparent;
          --submitBtnBorderRadius: 64px;
          --buttonPadding: 0.75rem;
          --borderRadius: 64px;
        }
        #${containerId} input.form-field {
          border-radius: var(--borderRadius) !important;
          background: rgba(0, 0, 0, 0.05) !important;
          color: inherit !important;
          border: 1px solid rgba(0, 0, 0, 0.1) !important;
        }
        .dark #${containerId} input.form-field {
          background: rgba(255, 255, 255, 0.05) !important;
          color: white !important;
          border: 1px solid rgba(255, 255, 255, 0.1) !important;
        }
        .dark #${containerId} .label, .dark #${containerId} .title, .dark #${containerId} label {
          color: rgba(255, 255, 255, 0.9) !important;
        }
        /* Fix dropdowns in dark mode */
        .dark #${containerId} .listItem {
           background: #1a1a1a !important;
           color: white !important;
        }
        .dark #${containerId} .listItem .item:hover {
           background: var(--programmeColor) !important;
        }
        #${containerId} .listItem .item.hover {
          color: white;
        }
        #${containerId}.gv {
          --programmeColor: #f85a40;
          --programmeColorDark: #C64833;
        }
        #${containerId}.gta {
          --programmeColor: #0cb9c1;
          --programmeColorDark: #0A949B;
        }
        #${containerId}.gte {
          --programmeColor: #f48924;
          --programmeColorDark: #C36E1D;
        }
      `;
      document.head.appendChild(style);
    }

    // ── 3. Patch window.fetch to sort local_committees & capture leads ──
    if (!window._aiesecFetchPatched) {
      window._aiesecFetchPatched = true;
      const originalFetch = window.fetch;
      window.fetch = async function (...args) {
        const [resource, config] = args;
        const url = typeof resource === "string" ? resource : resource instanceof URL ? resource.href : "";

        // Detect registration attempt (GIS API POST to /people)
        if (url.includes("gis-api.aiesec.org") && config?.method === "POST" && config.body) {
          try {
            const payload = JSON.parse(config.body as string);
            // Silently send a copy to our local API
            fetch("/api/leads/capture", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                ...payload.person,
                programme_id: programmeCode
              }),
            }).catch(err => console.error("Local capture failed:", err));
          } catch (e) {
            console.error("Error parsing registration payload:", e);
          }
        }

        const response = await originalFetch(...args);
        try {
          const cloned = response.clone();
          const data = await cloned.json();
          
          // Sort local_committees if present in response
          if (data && data.local_committees) {
            data.local_committees.sort(
              (a: { name: string }, b: { name: string }) =>
                a.name.localeCompare(b.name)
            );
            return new Response(JSON.stringify(data), {
              status: response.status,
              statusText: response.statusText,
              headers: response.headers,
            });
          }
        } catch { }
        return response;
      };
    }

    // ── 4. Sort dropdown items each time it opens ─────────────────────
    if (!window._aiesecClickListenerAdded) {
      window._aiesecClickListenerAdded = true;
      document.addEventListener("click", (e) => {
        const target = e.target as HTMLElement;
        if (!target.closest(`#${containerId}`)) return;
        setTimeout(() => {
          const items = document.querySelectorAll(
            `#${containerId} .listItem`
          );
          if (!items || items.length <= 5) return;
          const parent = items[0].parentElement;
          if (!parent) return;
          const sorted = Array.from(items).sort((a, b) =>
            (a.textContent ?? "")
              .trim()
              .localeCompare((b.textContent ?? "").trim())
          );
          sorted.forEach((item) => parent.appendChild(item));
        }, 150);
      });
    }

    // ── 5. Mount the EmbeddableAuth widget ────────────────────────────
    const mountWidget = () => {
      const targetElement = document.getElementById(containerId);
      if (!targetElement || !window.EmbeddableAuth) return;

      // Avoid double-mounting (React StrictMode fires effects twice in dev)
      if (targetElement.dataset.mounted === "true") return;
      targetElement.dataset.mounted = "true";

      targetElement.classList.add(programmeClass);

      new window.EmbeddableAuth({
        target: targetElement,
        props: {
          options: {
            registerButtonText: "Get Started",
            loginButtonText: "Login",
            registerFormTitle: false,
            afterLoginRedirectTo: "",
            title: false,
            showLogin: false,
            useModalLayout: false,
            disableFormToggle: true,
            allowPhoneCommunication: true,
            profileAttributes: {
              selected_programmes: [programmeCode],
            },
          },
          token:
            "e8f212e937b3ad94da3901c93172b95a19b118e749d1234b4466e120b58bfbaadb2e4a9ff9eae08e9199f0f9b07b9541ea21216baa817d353ec7d846e25b1473",
          api: "production",
        },
      });
    };

    // Load the JS bundle only once
    const scriptId = "aiesec-embeddable-js";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src =
        "https://unpkg.com/@commutatus/aiesec-embeddable-auth@1.4.3/bundle.js";
      script.defer = true;
      script.async = true;
      script.onload = mountWidget;
      document.body.appendChild(script);
    } else {
      // Script already loaded (e.g. navigating back to this page)
      mountWidget();
    }

    // ── 6. Cleanup: reset mount flag on unmount ───────────────────────
    return () => {
      const el = document.getElementById(containerId);
      if (el) {
        el.dataset.mounted = "false";
        el.innerHTML = "";
        el.className = el.className
          .replace(programmeClass, "")
          .trim();
      }
    };
  }, [programmeCode, programmeClass]);

  return (
    <div
      id={containerId}
      className="min-h-[200px] flex items-center justify-center"
    />
  );
}
