(function() {
  "use strict";

  window.addEventListener('load', () => {
    on_page_load()
  });

  /**
   * Function gets called when page is loaded.
   */
  function on_page_load() {
    // Initialize On-scroll Animations
    AOS.init({
      anchorPlacement: 'top-left',
      duration: 600,
      easing: "ease-in-out",
      once: true,
      mirror: false,
      disable: 'mobile'
    });
  }

  /**
   * Navbar effects and scrolltop buttons upon scrolling
   */
  const navbar = document.getElementById('header-nav')
  var body = document.getElementsByTagName("body")[0]
  const scrollTop = document.getElementById('scrolltop')
  window.onscroll = () => {
    if (window.scrollY > 0) {
      navbar.classList.add('fixed-top', 'shadow-sm')
      body.style.paddingTop = navbar.offsetHeight + "px"
      scrollTop.style.visibility = "visible";
      scrollTop.style.opacity = 1;
    } else {
      navbar.classList.remove('fixed-top', 'shadow-sm')
      body.style.paddingTop = "0px"
      scrollTop.style.visibility = "hidden";
      scrollTop.style.opacity = 0;
    }
  };

  /**
   * Masonry Grid
   */
  var elem = document.querySelector('.grid');
  if(elem) {
    imagesLoaded(elem, function() {
      new Masonry(elem, {
        itemSelector: '.grid-item',
        percentPosition: true,
        horizontalOrder: true
      });
    })
  }

  /**
   * Big Picture Popup for images and videos
   */
   document.querySelectorAll("[data-bigpicture]").forEach((function(e) {
     e.addEventListener("click", (function(t){
       t.preventDefault();
       const data =JSON.parse(e.dataset.bigpicture)
       BigPicture({
        el: t.target,
        ...data
      })
     })
    )
  }))

  /**
   * Big Picture Popup for Photo Gallary
   */
   document.querySelectorAll(".bp-gallery a").forEach((function(e) {
    var caption = e.querySelector('figcaption')
    var img = e.querySelector('img')
    // set the link present on the item to the caption in full view
    img.dataset.caption = '<a class="link-light" target="_blank" href="' + e.href + '">' + caption.innerHTML + '</a>';
    window.console.log(caption, img)
     e.addEventListener("click", (function(t){
       t.preventDefault();
       BigPicture({
        el: t.target,
        gallery: '.bp-gallery',
      })
     })
    )
  }))

  // Add your javascript here

  /**
   * Simple i18n (EN/ES) - keeps English as default and only replaces text when switching to Spanish.
   */
    /**
   * Simple i18n (EN/ES)
   * - English is the "original HTML": we never replace it with an EN dictionary.
   * - Spanish replaces only the keys we define below.
   */
  const I18N = {
    es: {
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
      "about.p4": "Mis experiencias laborales más recientes incluyen Neoris 🇦🇷, Accenture 🇦🇷, Keep It Simple 🇦🇷, Agrofy 🇦🇷, Naranja X 🇦🇷, Banco Ripley 🇨🇱, RW 🇺🇸.",

      "skills.core_desc": "Aprendo rápido y me especializo en una amplia variedad de habilidades requeridas para QA Engineer y automatización",

      "skills.card1.title": "Testing manual",
      "skills.card1.desc": "Fuerte experiencia testeando FrontEnd y BackEnd",
      "skills.card2.title": "Análisis funcional",
      "skills.card2.desc": "Análisis de requerimientos funcionales y técnicos",
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

    try { localStorage.setItem("siteLang", lang); } catch (e) {}
  }

  window.addEventListener("DOMContentLoaded", () => {
    captureEnglishOriginals();

    document.querySelectorAll("[data-lang]").forEach((btn) => {
      btn.addEventListener("click", () => applyLanguage(btn.getAttribute("data-lang")));
    });

    let saved = "en";
    try { saved = localStorage.getItem("siteLang") || "en"; } catch (e) {}
    applyLanguage(saved === "es" ? "es" : "en");
  });


})();