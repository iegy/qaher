/* ==========================================================================
   Qahir Altariq — Site logic: i18n rendering, interactions, animations
   ========================================================================== */
(function(){
  "use strict";

  const IMG = "assets/img/";
  let lang = localStorage.getItem("qat-lang") || "en";

  const ICONS = {
    check:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>',
    plus:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>',
    pin:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s7-7.58 7-12A7 7 0 0 0 5 10c0 4.42 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/></svg>',
    phone:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.9 2z"/></svg>',
    mail:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 6l-10 7L2 6"/></svg>',
    shield:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l8 4v6c0 5-3.4 8.4-8 10-4.6-1.6-8-5-8-10V6l8-4z"/></svg>',
    leaf:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 4 13c0-6 6-11 15-11-1 9-6 15-11 15Z"/><path d="M4 20l7-7"/></svg>',
    hardhat:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 18v-1a8 8 0 0 1 16 0v1"/><path d="M2 18h20"/><path d="M12 9V4"/></svg>',
    idcard:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><circle cx="8" cy="12" r="2"/><path d="M14 10h5M14 14h5"/></svg>',
    truck:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="7" width="14" height="10"/><path d="M15 10h4l3 3v4h-7z"/><circle cx="6" cy="19" r="1.6"/><circle cx="17.5" cy="19" r="1.6"/></svg>',
    fence:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 21V7l3-4 3 4v14M4 11h6M11 21V7l3-4 3 4v14M14 11h6M20 21V9"/></svg>',
    arrow:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    close:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>',
    whatsapp:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.85.5 3.58 1.36 5.07L2 22l5.19-1.44a9.86 9.86 0 0 0 4.85 1.27c5.46 0 9.91-4.45 9.91-9.92C21.95 6.45 17.5 2 12.04 2zm5.8 14.09c-.24.68-1.4 1.3-1.93 1.38-.5.08-1.12.11-1.81-.11-.42-.14-.96-.31-1.65-.6-2.9-1.25-4.8-4.15-4.94-4.34-.14-.19-1.18-1.57-1.18-3 0-1.42.75-2.12 1.02-2.41.27-.29.58-.36.78-.36.19 0 .39 0 .55.01.18.01.42-.07.65.5.24.58.82 2 .89 2.14.07.14.12.31.02.5-.09.19-.14.31-.28.48-.14.17-.29.37-.42.5-.14.14-.28.29-.12.56.16.28.71 1.17 1.53 1.9 1.05.94 1.94 1.23 2.21 1.37.28.14.44.12.6-.07.17-.19.71-.83.9-1.11.19-.28.37-.23.63-.14.26.09 1.66.78 1.94.93.28.14.47.21.53.33.07.12.07.68-.17 1.36z"/></svg>',
    upload:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5M5 12l7-7 7 7"/></svg>'
  };

  const $ = (s,ctx)=> (ctx||document).querySelector(s);
  const $$ = (s,ctx)=> Array.from((ctx||document).querySelectorAll(s));

  /* --------------------------- i18n text binding --------------------------- */
  function applyStaticText(t){
    $$("[data-i18n]").forEach(el=>{
      const path = el.getAttribute("data-i18n");
      const val = resolvePath(t, path);
      if(val != null) el.innerHTML = val;
    });
    $$("[data-i18n-attr]").forEach(el=>{
      const spec = el.getAttribute("data-i18n-attr"); // format: attr:path
      spec.split(";").forEach(pair=>{
        const [attr, path] = pair.split(":").map(s=>s.trim());
        const val = resolvePath(t, path);
        if(val != null) el.setAttribute(attr, val);
      });
    });
  }
  function resolvePath(obj, path){
    return path.split(".").reduce((o,k)=> (o && o[k] != null) ? o[k] : null, obj);
  }

  /* --------------------------- Dynamic renderers --------------------------- */
  function renderValues(t){
    const wrap = $("#valuesGrid"); if(!wrap) return;
    wrap.innerHTML = t.values.items.map((v,i)=>`
      <div class="value-item reveal" style="--i:${i}">
        <div class="badge-ring">${[ICONS.shield,ICONS.idcard,ICONS.check,ICONS.leaf,ICONS.hardhat][i]||ICONS.shield}</div>
        <h4>${v.title}</h4>
        <p>${v.desc}</p>
      </div>`).join("");
  }

  function renderServices(t){
    const wrap = $("#servicesGrid"); if(!wrap) return;
    wrap.innerHTML = t.services.items.map((s,i)=>`
      <article class="service-card reveal" style="--i:${i % 3}" data-idx="${i}">
        <div class="service-media${s.img ? "" : " no-photo"}">
          ${s.img
            ? `<img src="${IMG}services/${s.img}" alt="${s.title}" loading="lazy">`
            : `<span class="no-photo-icon">${ICONS[s.icon] || ICONS.idcard}</span>`}
          <span class="service-tag">${s.tag}</span>
        </div>
        <div class="service-body">
          <h3>${s.title}</h3>
          <p class="desc">${s.desc}</p>
          <button class="service-toggle" type="button" aria-expanded="false">
            <span class="label">${lang==='ar' ? 'التفاصيل' : 'Details'}</span> ${ICONS.plus}
          </button>
          <ul class="service-points">
            ${s.points.map(p=>`<li>${p}</li>`).join("")}
          </ul>
        </div>
      </article>`).join("");

    $$(".service-card .service-toggle", wrap).forEach(btn=>{
      btn.addEventListener("click", ()=>{
        const card = btn.closest(".service-card");
        const isOpen = card.classList.toggle("open");
        btn.setAttribute("aria-expanded", isOpen);
        const list = card.querySelector(".service-points");
        list.style.maxHeight = isOpen ? list.scrollHeight+"px" : "0px";
      });
    });
  }

  function renderWhy(t){
    const wrap = $("#whyList"); if(!wrap) return;
    wrap.innerHTML = t.why.items.map((item,i)=>`
      <div class="why-item reveal" style="--i:${i}">
        <span class="check">${ICONS.check}</span>
        <span>${item}</span>
      </div>`).join("");
    $("#whyClosing").innerHTML = t.why.closing;
  }

  function renderFleet(t){
    const wrap = $("#fleetTags"); if(!wrap) return;
    wrap.innerHTML = t.fleet.items.map(item=>`
      <div class="fleet-tag"><span class="dot"></span>${item}</div>`).join("");
    $("#fleetNote").innerHTML = t.fleet.note;
  }

  function renderCerts(t){
    const wrap = $("#certsGrid"); if(!wrap) return;
    const icons = [ICONS.check, ICONS.leaf, ICONS.shield, ICONS.idcard, ICONS.hardhat];
    wrap.innerHTML = t.certifications.items.map((c,i)=>`
      <div class="cert-card reveal" style="--i:${i}" ${c.img ? `data-img="${IMG}certs/${c.img}"` : ""}>
        <div class="cert-top">
          <div class="cert-seal">${icons[i]||ICONS.check}</div>
          <div>
            <h4>${c.name}</h4>
            <div class="cert-sub">${c.sub}</div>
          </div>
        </div>
        <div class="cert-meta">${c.no}<br>${c.valid}</div>
        ${c.img ? `<span class="cert-view">${t.certifications.viewCert} ${ICONS.arrow}</span>` : ""}
      </div>`).join("");

    $$(".cert-card[data-img]", wrap).forEach(card=>{
      card.addEventListener("click", ()=> openLightbox(card.getAttribute("data-img")));
    });
  }

  function renderClients(t){
    const wrap = $("#clientsGrid"); if(!wrap) return;
    wrap.innerHTML = t.clients.items.map((c,i)=>`
      <div class="client-card reveal" style="--i:${i%4}">
        <div class="client-logo-wrap"><img src="${IMG}clients/${c.img}" alt="${c.name}" loading="lazy"></div>
        <h5>${c.name}</h5>
        <span>${c.sub}</span>
      </div>`).join("");
  }

  const GALLERY_ITEMS = [
    { img:"gallery/canopy_night.jpg", cls:"g-wide g-tall" },
    { img:"hero/fleet_trucks.jpg", cls:"" },
    { img:"gallery/tent_interior.jpg", cls:"g-tall" },
    { img:"gallery/dining_hall.jpg", cls:"" },
    { img:"gallery/parking_curved2.jpg", cls:"g-wide" },
    { img:"gallery/car_lift.jpg", cls:"" },
    { img:"gallery/dining_hall2.jpg", cls:"" },
    { img:"gallery/parking_tensile.jpg", cls:"g-tall" },
    { img:"gallery/tent_2.jpg", cls:"g-wide" },
    { img:"gallery/handshake.jpg", cls:"" }
  ];
  function renderGallery(){
    const wrap = $("#galleryGrid"); if(!wrap) return;
    wrap.innerHTML = GALLERY_ITEMS.map(g=>`
      <a href="#" class="${g.cls}" data-img="${IMG}${g.img}">
        <img src="${IMG}${g.img}" alt="" loading="lazy">
      </a>`).join("");
    $$("#galleryGrid a").forEach(a=>{
      a.addEventListener("click", e=>{ e.preventDefault(); openLightbox(a.getAttribute("data-img")); });
    });
  }

  function renderServiceOptions(t){
    const sel = $("#svcSelect"); if(!sel) return;
    sel.innerHTML = `<option value="">${t.contact.form.servicePlaceholder}</option>` +
      t.services.items.map(s=>`<option value="${s.title}">${s.title}</option>`).join("");
  }

  /* --------------------------- Lightbox --------------------------- */
  function openLightbox(src){
    const lb = $("#lightbox");
    $("#lightboxImg").src = src;
    lb.classList.add("active");
    document.body.style.overflow = "hidden";
  }
  function closeLightbox(){
    $("#lightbox").classList.remove("active");
    document.body.style.overflow = "";
  }

  /* --------------------------- Stat counters --------------------------- */
  function renderStats(t){
    const wrap = $("#statsGrid"); if(!wrap) return;
    wrap.innerHTML = t.stats.map(s=>`
      <div class="stat-item">
        <span class="stat-value" data-target="${s.value}"><span class="num">0</span><span class="suffix">${s.suffix}</span></span>
        <div class="stat-label">${s.label}</div>
      </div>`).join("");
  }
  function animateStats(){
    $$(".stat-value").forEach(el=>{
      const target = parseFloat(el.getAttribute("data-target"));
      const numEl = el.querySelector(".num");
      const isDecimal = String(el.getAttribute("data-target")).includes(".");
      let cur = 0;
      const steps = 40;
      const inc = target/steps;
      let i=0;
      const timer = setInterval(()=>{
        i++; cur += inc;
        if(i>=steps){ cur = target; clearInterval(timer); }
        numEl.textContent = isDecimal ? cur.toFixed(2) : Math.round(cur);
      }, 30);
    });
  }

  /* --------------------------- Language switching --------------------------- */
  function setLanguage(l){
    lang = l;
    localStorage.setItem("qat-lang", l);
    const t = CONTENT[l];
    document.documentElement.lang = l;
    document.documentElement.dir = t.dir;
    document.title = t.meta.title;
    const metaDesc = $('meta[name="description"]'); if(metaDesc) metaDesc.setAttribute("content", t.meta.description);

    applyStaticText(t);
    renderStats(t);
    renderValues(t);
    renderServices(t);
    renderWhy(t);
    renderFleet(t);
    renderCerts(t);
    renderClients(t);
    renderServiceOptions(t);

    $$(".lang-btn").forEach(b=> b.textContent = t.nav.langSwitch);

    initReveal();
  }

  /* --------------------------- Header scroll state --------------------------- */
  function initHeaderScroll(){
    const header = $("#siteHeader");
    const toTop = $("#toTop");
    window.addEventListener("scroll", ()=>{
      const y = window.scrollY;
      header.classList.toggle("scrolled", y > 40);
      toTop.classList.toggle("show", y > 700);
    }, { passive:true });
  }

  /* --------------------------- Mobile nav --------------------------- */
  function initMobileNav(){
    const burger = $("#hamburger");
    const nav = $("#mainNav");
    burger.addEventListener("click", ()=>{
      const open = nav.classList.toggle("open");
      burger.classList.toggle("open", open);
      document.body.style.overflow = open ? "hidden" : "";
    });
    $$("#mainNav a").forEach(a=> a.addEventListener("click", ()=>{
      nav.classList.remove("open"); burger.classList.remove("open");
      document.body.style.overflow = "";
    }));
  }

  /* --------------------------- Reveal on scroll --------------------------- */
  let revealObserver;
  function initReveal(){
    if(revealObserver) revealObserver.disconnect();
    revealObserver = new IntersectionObserver((entries)=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          entry.target.classList.add("in");
          if(entry.target.id === "statsGrid") animateStats();
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold:.15, rootMargin:"0px 0px -60px 0px" });

    $$(".reveal").forEach(el=> revealObserver.observe(el));
    const statsGrid = $("#statsGrid");
    if(statsGrid) revealObserver.observe(statsGrid);

    // Safety net: ensure nothing stays hidden if the observer misses an element
    clearTimeout(window.__revealFallback);
    window.__revealFallback = setTimeout(()=>{
      $$(".reveal:not(.in)").forEach(el=> el.classList.add("in"));
    }, 2500);
  }

  /* --------------------------- Contact form (mailto) --------------------------- */
  function initContactForm(){
    const form = $("#contactForm");
    if(!form) return;
    form.addEventListener("submit", (e)=>{
      e.preventDefault();
      const t = CONTENT[lang];
      const data = Object.fromEntries(new FormData(form).entries());
      const subject = encodeURIComponent(`Website Inquiry — ${data.service || "General"} — ${data.name || ""}`);
      const bodyLines = [
        `Name: ${data.name||""}`,
        `Company: ${data.company||""}`,
        `Email: ${data.email||""}`,
        `Phone: ${data.phone||""}`,
        `Service: ${data.service||""}`,
        "",
        data.message||""
      ];
      const body = encodeURIComponent(bodyLines.join("\n"));
      window.location.href = `mailto:qahiraltariq@gmail.com?subject=${subject}&body=${body}`;
    });
  }

  /* --------------------------- Active nav on scroll --------------------------- */
  function initScrollSpy(){
    const sections = $$("main section[id]");
    const navLinks = $$("#mainNav a");
    const spy = new IntersectionObserver((entries)=>{
      entries.forEach(entry=>{
        const id = entry.target.id;
        const link = navLinks.find(a=> a.getAttribute("href") === "#"+id);
        if(!link) return;
        if(entry.isIntersecting) navLinks.forEach(a=>a.classList.remove("active")), link.classList.add("active");
      });
    }, { threshold:.4 });
    sections.forEach(s=> spy.observe(s));
  }

  /* --------------------------- Init --------------------------- */
  document.addEventListener("DOMContentLoaded", ()=>{
    renderGallery();
    setLanguage(lang);
    initHeaderScroll();
    initMobileNav();
    initContactForm();
    initScrollSpy();

    $$(".lang-btn").forEach(b=> b.addEventListener("click", ()=> setLanguage(lang === "en" ? "ar" : "en")));
    $("#hamburger");
    $("#lightboxClose").addEventListener("click", closeLightbox);
    $("#lightbox").addEventListener("click", (e)=>{ if(e.target.id==="lightbox") closeLightbox(); });
    document.addEventListener("keydown", (e)=>{ if(e.key==="Escape") closeLightbox(); });
    $("#toTop").addEventListener("click", ()=> window.scrollTo({top:0, behavior:"smooth"}));

    // Year
    const yearEl = $("#year"); if(yearEl) yearEl.textContent = new Date().getFullYear();
  });
})();
