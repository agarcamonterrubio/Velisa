
const $  = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

function initTheme() {
  const saved = localStorage.getItem("theme");
  if (saved === "dark") document.documentElement.classList.add("dark");
  updateThemeButton();
}
function toggleTheme() {
  document.documentElement.classList.toggle("dark");
  localStorage.setItem(
    "theme",
    document.documentElement.classList.contains("dark") ? "dark" : "light"
  );
  updateThemeButton();
}
function updateThemeButton() {
  const btn = $("#themeBtn");
  if (!btn) return;
  const isDark = document.documentElement.classList.contains("dark");
  btn.setAttribute("aria-pressed", String(isDark));
  btn.textContent = isDark ? "Light theme" : "Dark theme";
}

function initMobileNav() {
  const toggle = $(".nav-toggle");
  const header = $(".site-header") || $("header");
  const nav = $("#navlinks") || $(".nav-links");
  if (!toggle || !header || !nav) return;

  toggle.addEventListener("click", () => {
    const open = header.classList.toggle("nav-open");
    toggle.setAttribute("aria-expanded", String(open));
  });
}


function enhanceImages() {
  $$("img").forEach(img => {
    if (!img.hasAttribute("loading")) img.setAttribute("loading", "lazy");

  });
}


function initContactForm() {
  const form = $("#quoteForm");
  if (!form) return;

  const nameEl    = $("#name");
  const emailEl   = $("#email");
  const typeEl    = $("#");
  }
