(function() {
  "use strict";

  window.addEventListener('load', () => {
    AOS.init({
      anchorPlacement: 'top-left',
      duration: 600,
      easing: "ease-in-out",
      once: true,
      mirror: false,
      disable: 'mobile'
    });
  });

  // Navbar scroll effects and scroll-to-top button
  const navbar = document.getElementById('header-nav');
  const body = document.getElementsByTagName("body")[0];
  const scrollTop = document.getElementById('scrolltop');
  window.onscroll = () => {
    if (window.scrollY > 0) {
      navbar.classList.add('fixed-top', 'shadow-sm');
      body.style.paddingTop = navbar.offsetHeight + "px";
      scrollTop.style.visibility = "visible";
      scrollTop.style.opacity = 1;
    } else {
      navbar.classList.remove('fixed-top', 'shadow-sm');
      body.style.paddingTop = "0px";
      scrollTop.style.visibility = "hidden";
      scrollTop.style.opacity = 0;
    }
  };

  // Dark mode toggle
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  const html = document.documentElement;

  function setTheme(theme) {
    html.setAttribute('data-theme', theme);
    if (themeIcon) {
      themeIcon.className = theme === 'dark' ? 'bi bi-sun-fill' : 'bi bi-moon-fill';
    }
    try { localStorage.setItem('siteTheme', theme); } catch(e) {}
  }

  function initTheme() {
    const current = html.getAttribute('data-theme');
    if (themeIcon) {
      themeIcon.className = current === 'dark' ? 'bi bi-sun-fill' : 'bi bi-moon-fill';
    }
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = html.getAttribute('data-theme');
      setTheme(current === 'dark' ? 'light' : 'dark');
    });
  }


  initTheme();

  // i18n (EN/ES)
  const I18N = {
    es: {
      "nav.lab": "Laboratorio",
      "lab.pqacman": "PQACMAN",
      "nav.about": "Acerca de",
      "nav.skills": "Habilidades",
      "nav.courses": "Cursos y Certificaciones",
      "nav.posts": "Publicaciones",

      "hero.hello": "¡Hola!",
      "hero.name": "Soy Mariano Panella",

      "section.about": "¡Un poco sobre mí!",
      "about.p1": "Soy Mariano Panella y soy un 🎓 Ingeniero en Sistemas con más de 10 años de experiencia profesional, orientado a 🧪 Quality Assurance, asegurando calidad tanto en procesos como en productos (QA/QC) a lo largo de las distintas etapas y metodologías del SDLC.",
      "about.p2": "He trabajado tanto en pruebas 🖐️ manuales como 🤖 automatizadas. Soy proactivo, curioso y con ganas de aprender nuevas metodologías y tecnologías.",
      "about.p3": "Tengo experiencia en muchos tipos de empresas, como 🌾 agroindustria, 🌐 empresas multinacionales de software, 💳 fintech, 🏦 banca, 🎁 plataformas de lealtad y recompensas, y más.",
      "about.p4": "Mis experiencias laborales más recientes incluyen Neoris 🇦🇷, Accenture 🇦🇷, Keep It Simple 🇦🇷, Agrofy 🇦🇷, Naranja X 🇦🇷, Banco Ripley 🇨🇱, Rewardsweb 🇺🇸, Keep It Simple 🇦🇷.",

      "skills.core_desc": "Aprendo rápido y me especializo en una amplia variedad de habilidades requeridas para QA Engineer y automatización",

      "skills.card1.title": "Testing manual",
      "skills.card1.desc": "Fuerte experiencia testeando FrontEnd y BackEnd",
      "skills.card2.title": "Análisis funcional",
      "skills.card2.desc": "Análisis de requerimientos funcionales y técnicos",
      "skills.card2b.title": "IA",
      "skills.card2b.desc": "Manejo eficiente y responsable de IA",
      "skills.card3.title": "Shift Left Testing",
      "skills.card3.desc": "Mentalidad de testeo temprano dentro del SDLC",
      "skills.card4.title": "Liderazgo y coaching",
      "skills.card4.desc": "Liderando equipos y acompañando pares para mejorar el rendimiento del equipo",
      "skills.card5.desc": "Experiencia con Java y POO para construir herramientas o frameworks",
      "skills.card6.desc": "Experiencia automatizando con TypeScript / JavaScript",
      "skills.card7.desc": "Python para construir frameworks",
      "skills.card8.title": "Automatización UI",
      "skills.card8.desc": "Experiencia automatizando UI con distintos frameworks y lenguajes",
      "skills.card9.title": "Automatización API",
      "skills.card9.desc": "Experiencia automatizando BackEnd (Karate, Rest Assured)",
      "skills.card10.desc": "Experiencia implementando BDD (Cucumber, Gherkin)",
      "skills.card11.desc": "Conocimiento en gestores de dependencias",
      "skills.card12.desc": "Fuerte conocimiento de Selenium y librerías relacionadas (TestNG).",
      "skills.card13.title": "Playwright",
      "skills.card13.desc": "Construcción de frameworks desde cero con Playwright",
      "skills.card14.desc": "Construcción de frameworks desde cero con Cypress",
      "skills.card15.title": "CI/CD",
      "skills.card15.desc": "Armado de CI para frameworks con GitHub Actions o Jenkins",

      "section.skills": "Habilidades principales",
      "section.courses": "Cursos y Certificaciones",
      "section.posts": "Publicaciones",

      "footer.tagline": "Ingeniero de Automatización de Pruebas, QA Engineer | SFPC, ISTQB FL Certified",
      "footer.rights": "©Nano Todos los derechos reservados."
    }
  };

  function captureEnglishOriginals() {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      if (!el.dataset.i18nOriginal) {
        el.dataset.i18nOriginal = el.innerHTML;
      }
    });
  }

  function applyLanguage(lang) {
    captureEnglishOriginals();
    document.documentElement.lang = lang === "es" ? "es-AR" : "en-US";

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (lang === "es") {
        const value = I18N.es[key];
        if (typeof value === "string") el.innerHTML = value;
      } else {
        el.innerHTML = el.dataset.i18nOriginal || el.innerHTML;
      }
    });

    document.querySelectorAll("[data-lang]").forEach((btn) => {
      btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
    });

    try { localStorage.setItem("siteLang", lang); } catch(e) {}
  }

  window.addEventListener("DOMContentLoaded", () => {
    captureEnglishOriginals();

    document.querySelectorAll("[data-lang]").forEach((btn) => {
      btn.addEventListener("click", () => applyLanguage(btn.getAttribute("data-lang")));
    });

    let saved = "en";
    try { saved = localStorage.getItem("siteLang") || "en"; } catch(e) {}
    applyLanguage(saved === "es" ? "es" : "en");
  });

})();
