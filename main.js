document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".site-nav");
  const toggle = document.querySelector(".menu-toggle");

  const closeMenu = () => {
    if (!nav || !toggle) return;
    nav.classList.remove("is-open");
    toggle.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    document.body.style.removeProperty("overflow");
  };

  if (nav && toggle) {
    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");
      toggle.classList.toggle("is-open", isOpen);
      toggle.setAttribute("aria-expanded", String(isOpen));
      document.body.style.overflow = isOpen ? "hidden" : "";
    });

    nav.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener("click", closeMenu);
    });
  }

  const form = document.querySelector("#contact-form");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      alert("このフォームはサンプルです。お電話でお問い合わせください。");
    });
  }

  const header = document.querySelector(".site-header");
  if (header) {
    const handleScroll = () => {
      if (window.scrollY > 12) {
        header.classList.add("has-shadow");
      } else {
        header.classList.remove("has-shadow");
      }
    };

    handleScroll();
    document.addEventListener("scroll", handleScroll, { passive: true });
  }
});
