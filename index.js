var projects = [
  {title:"Pagina Web - Pintura Plastica",period:"Feb 2023 - Feb 2023",role:"Desarrollador Front-End",type:"Trabajo autonomo",image:"images/projects/pintura.jpg",description:"Desarrollo de un sitio web estatico con HTML y CSS para un negocio dedicado a la pintura plastica, con el objetivo de mostrar de forma profesional el portafolio de trabajos del cliente.",tags:["HTML","CSS"]},
  {title:"Programador Full-Stack Jr.",period:"Febrero 2026 - Actualidad",role:"Full-Stack Developer",type:"Sector logistico",image:"images/projects/logistica.jpg",description:"Desarrollo y mantenimiento de aplicaciones web y APIs para una empresa del sector logistico, implementando nuevas funcionalidades, optimizando procesos existentes y atendiendo requerimientos del negocio.",tags:["Flutter","C#",".NET"]},
  {title:"Proyecto ORION - Montura Ecuatorial",period:"Sept 2024 - En curso",role:"Desarrollador Full-Stack",type:"Proyecto independiente",image:"images/projects/orion.jpg",description:"Desarrollo de un prototipo orientado al calculo preciso de la posicion de estrellas, con capacidad para el rastreo automatizado de objetos celestes. Incluye desarrollo de placa electronica y prototipo movible.",tags:["Electronica","Full-Stack","IoT"]},
  {title:"Difusion ITSP",period:"Nov 2024 - Junio 2025",role:"Desarrollador Front-End",type:"Instituto Tecnologico",image:"images/projects/itsp.jpg",description:"Responsable de la pagina web en el area de difusion en el Instituto Tecnologico Superior Progreso, encargado del diseno y desarrollo frontend, asi como codificacion y despliegue en el servidor.",tags:["HTML","CSS","JavaScript"]},
  {title:"App Movil Cashless",period:"Agosto 2025 - Diciembre 2025",role:"Desarrollador Front-End",type:"Proyecto de empresa",image:"images/projects/cashless.jpg",description:"Desarrollo del Front-End de una aplicacion movil tipo cashless para la gestion de compras y ventas, incorporando un sistema de pagos mediante codigos QR cifrados.",tags:["Flutter","QR","Seguridad"]}
];

var experience = [
  {period:"Febrero 2026 - Actualidad",title:"Programador Full-Stack Jr.",role:"Desarrollador Full-Stack",description:"Desarrollo y mantenimiento de aplicaciones web y APIs para una empresa del sector logistico. Implementacion de nuevas funcionalidades, optimizacion de procesos y atencion de requerimientos del negocio con tecnologias como Flutter y C# .NET.",tags:["Flutter","C#",".NET","SQL"]},
  {period:"Nov 2024 - Junio 2025",title:"Responsable Web ITSP",role:"Desarrollador Front-End",description:"Direccion y desarrollo del sitio web de difusion del Instituto Tecnologico Superior Progreso. Diseno, codificacion y despliegue en servidor.",tags:["HTML","CSS","JavaScript"]},
  {period:"Sept 2024 - En curso",title:"Proyecto ORION",role:"Desarrollador Full-Stack & Electronica",description:"Prototipo para calculo preciso de posicion de estrellas con rastreo automatizado de objetos celestes. Incluye desarrollo de placa electronica y prototipo movible.",tags:["Electronica","IoT","Full-Stack"]},
  {period:"Agosto 2025 - Diciembre 2025",title:"App Movil Cashless",role:"Desarrollador Front-End",description:"Aplicacion movil tipo cashless para gestion de compras y ventas con pagos mediante codigos QR cifrados y buenas practicas de seguridad.",tags:["Flutter","QR","Seguridad"]},
  {period:"Feb 2023 - Feb 2023",title:"Pagina Web Pintura Plastica",role:"Desarrollador Front-End",description:"Sitio web estatico con HTML y CSS para negocio de pintura plastica, mostrando portafolio de trabajos del cliente de forma profesional.",tags:["HTML","CSS"]}
];

var aptituds = [
  {urlIcon:"images/interest_icon.png",number:1,title:"Interes actual",description:"Me interesa ampliar mi campo en la programacion y aprender nuevas tecnologias que fortalezcan mis conocimientos y habilidades."},
  {urlIcon:"images/focus_icon.png",number:2,title:"Enfoque",description:"Busco desarrollarme en el area de software, aportando soluciones practicas y efectivas que generen valor."},
  {urlIcon:"images/motivation_icon.png",number:3,title:"Motivacion",description:"Me motiva el aprendizaje continuo y la innovacion como base para crecer y adaptarme a nuevos retos."},
  {urlIcon:"images/plus_icon.png",number:4,title:"Plus personal",description:"Disfruto resolver problemas de forma creativa, trabajar en proyectos que representen un reto tecnico y ayudar a difundir conocimiento."}
];

var certs = {
  JavaCert:{title:"Universidad Java - Cero a Experto (+155 hrs)",files:[{type:"img",url:"certifications/CertificadoJAVA0EXPERTO/CertificadoJAVA0EXPERTO_EriDavalos.webp"},{type:"pdf",url:"certifications/CertificadoJAVA0EXPERTO/CertificadoJAVA0EXPERTO_EriDavalos.pdf"}]},
  WebCert:{title:"Universidad Desarrollo Web FrontEnd",files:[{type:"img",url:"certifications/CertificadoDESARROLLOWEB/CertificadoDESARROLLOWEB_EriDavalos.webp"},{type:"pdf",url:"certifications/CertificadoDESARROLLOWEB/CertificadoDESARROLLOWEB_EriDavalos.pdf"}]},
  FundaulaCert:{title:"Certificados fundaula",files:[{type:"img",url:"certifications/CertificadoFUNDAULA/CertificadoFUNDAULA_EriDavalos_1.webp"},{type:"img",url:"certifications/CertificadoFUNDAULA/CertificadoFUNDAULA_EriDavalos_2.webp"},{type:"img",url:"certifications/CertificadoFUNDAULA/CertificadoFUNDAULA_EriDavalos_3.webp"},{type:"img",url:"certifications/CertificadoFUNDAULA/CertificadoFUNDAULA_EriDavalos_4.webp"},{type:"img",url:"certifications/CertificadoFUNDAULA/CertificadoFUNDAULA_EriDavalos_5.webp"},{type:"img",url:"certifications/CertificadoFUNDAULA/CertificadoFUNDAULA_EriDavalos_6.webp"},{type:"pdf",url:"certifications/CertificadoFUNDAULA/CertificadoFUNDAULA_EriDavalos.pdf"}]},
  CertificadoCCNA:{title:"Certificado CCNA",files:[{type:"img",url:"certifications/CertificadoCCNA/CertificadoCCNA_EriDavalos.webp"},{type:"pdf",url:"certifications/CertificadoCCNA/CertificadoCCNA_EriDavalos.pdf"}]},
  CertificadoGCCF:{title:"Certificado Google CCF",files:[{type:"img",url:"certifications/CertificadoGCCF/CertificadoGCCF_EriDavalos.webp"},{type:"pdf",url:"certifications/CertificadoGCCF/CertificadoGCCF_EriDavalos.pdf"}]},
};
  
var skills = [
  {type:"languajes",icon:"images/java_icon.png",name:"Java",level:85,typeComp:"certificate",comp:certs.JavaCert,badge:"Cert"},
  {type:"languajes",icon:"images/cs_icon.png",name:"C#",level:75,typeComp:"project",badge:"Proy"},
  {type:"languajes",icon:"images/cp_logo.png",name:"C++",level:60},
  {type:"languajes",icon:"images/javascript_icon.png",name:"JavaScript",level:80,typeComp:"certificate",comp:certs.WebCert,badge:"Cert"},
  {type:"languajes",icon:"images/python_icon.png",name:"Python",level:65},
  {type:"frontend",icon:"images/html_icon.png",name:"HTML/CSS",level:90,typeComp:"certificate",comp:certs.FundaulaCert,badge:"Cert"},
  {type:"frontend",icon:"images/angular_icon.png",name:"Angular",level:60},
  {type:"frontend",icon:"images/ionic_icon.png",name:"Ionic",level:55},
  {type:"backend",icon:"images/databases_icon.png",name:"SQL",level:75},
  {type:"backend",icon:"images/node_icon.png",name:"Node.js",level:70},
  {type:"backend",icon:"images/springboot_icon.png",name:"Spring Boot",level:60},
  {type:"backend",icon:"images/php_icon.png",name:"PHP",level:65},
  {type:"backend",icon:"images/laravel_icon.png",name:"Laravel",level:55},
  {type:"tools",icon:"images/git_icon.png",name:"Git",level:80},
  {type:"tools",icon:"images/flutter_icon.png",name:"Flutter",level:70},
  {type:"tools",icon:"images/net_icon.png",name:".NET",level:65},
  {type:"tools",icon:"images/docker_icon.png",name:"Docker",level:50},
  {type:"softskills",title:"Trabajo en equipo",text:"Colaboro y apoyo de forma efectiva a mis companeros.",icon:"\uD83D\uDC65"},
  {type:"softskills",title:"Comunicacion asertiva",text:"Explico mis ideas de forma clara y concisa.",icon:"\uD83D\uDCAC"},
  {type:"softskills",title:"Adaptabilidad",text:"Aprendo nuevas tecnologias para aplicarlas en mi area.",icon:"\uD83D\uDD04"},
  {type:"softskills",title:"Pensamiento critico",text:"Evaluo las opciones mas viables antes de decidir.",icon:"\uD83E\uDDE0"},
  {type:"softskills",title:"Proactividad",text:"Tomo iniciativas para aprender y mejorar.",icon:"\uD83D\uDE80"},
  {type:"softskills",title:"Resolucion de problemas",text:"Enfrento retos con logica y creatividad.",icon:"\uD83E\uDDE9"}
];

// MATRIX
function initMatrix(){var c=document.getElementById("matrix-canvas");if(!c)return;var x=c.getContext("2d");c.width=window.innerWidth;c.height=window.innerHeight;var ch="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*";var fs=14;var cols=Math.floor(c.width/fs);var d=new Array(cols).fill(1);function draw(){x.fillStyle="rgba(10,10,15,0.05)";x.fillRect(0,0,c.width,c.height);x.fillStyle="#00e88f";x.font=fs+"px Fira Code, monospace";for(var i=0;i<d.length;i++){var t=ch[Math.floor(Math.random()*ch.length)];x.fillText(t,i*fs,d[i]*fs);if(d[i]*fs>c.height&&Math.random()>0.975)d[i]=0;d[i]++}}setInterval(draw,50);window.addEventListener("resize",function(){c.width=window.innerWidth;c.height=window.innerHeight})}

// TERMINAL TYPING
function terminalTyping(){var el=document.getElementById("welcome-text");if(!el)return;var text="Bienvenidos! Soy Eri Davalos - Full-Stack Developer";var idx=0;function type(){if(idx<text.length){el.textContent+=text.charAt(idx);idx++;setTimeout(type,45+Math.random()*30)}else{var cur=document.createElement("span");cur.className="cursor-blink";cur.textContent="\u2588";el.appendChild(cur)}}setTimeout(type,800)}

// SCROLL REVEAL
function initScrollReveal(){var r=document.querySelectorAll(".reveal");var obs=new IntersectionObserver(function(e){e.forEach(function(en){if(en.isIntersecting){var d=en.target.getAttribute("data-delay")||0;setTimeout(function(){en.target.classList.add("revealed")},parseInt(d));obs.unobserve(en.target)}})},{threshold:0.1,rootMargin:"0px 0px -50px 0px"});r.forEach(function(el){obs.observe(el)})}

// HEADER SCROLL
function initHeaderScroll(){var h=document.getElementById("header");window.addEventListener("scroll",function(){h.classList.toggle("scrolled",window.scrollY>50)})}

// HAMBURGER
function initHamburger(){var btn=document.getElementById("hamburger");var bar=document.getElementById("menu-bar");if(!btn||!bar)return;btn.addEventListener("click",function(){btn.classList.toggle("open");bar.classList.toggle("open")});bar.querySelectorAll("a").forEach(function(a){a.addEventListener("click",function(){btn.classList.remove("open");bar.classList.remove("open")})})}

// ACTIVE NAV
function initActiveNav(){var sections=document.querySelectorAll(".section-s");var links=document.querySelectorAll(".menu-bar a");var obs=new IntersectionObserver(function(e){e.forEach(function(en){if(en.isIntersecting){var id=en.target.id;links.forEach(function(a){a.classList.toggle("active",a.getAttribute("href")==="#"+id)})}})},{threshold:0.3});sections.forEach(function(s){obs.observe(s)})}

// STAT COUNTER
function initStatCounters(){var cards=document.querySelectorAll(".stat-number");var obs=new IntersectionObserver(function(e){e.forEach(function(en){if(en.isIntersecting){var el=en.target;var target=parseInt(el.getAttribute("data-target"));var current=0;var step=Math.ceil(target/30);var timer=setInterval(function(){current+=step;if(current>=target){current=target;clearInterval(timer)}el.textContent=current},40);obs.unobserve(el)}})},{threshold:0.5});cards.forEach(function(c){obs.observe(c)})}

// APTITUDE CARDS
function createAptitudeCards(){var c=document.getElementById("aptitude-cards");if(!c)return;aptituds.forEach(function(card){var d=document.createElement("div");d.className="aptitude-card";d.innerHTML='<div class="aptitude-header"><div><img src="'+card.urlIcon+'" alt="'+card.title+'"></div><h1>'+card.number+'</h1></div><div class="aptitude-h"><h2>'+card.title+'</h2></div><div class="aptitude-cont"><p>'+card.description+'</p></div>';c.appendChild(d)})}

// SKILLS
function createSkillGrid(filter){
  var grid=document.getElementById("skills-grid");
  if(!grid)return;
  grid.innerHTML="";
  var filtered=filter==="all"?skills:skills.filter(function(s){return s.type===filter});
  var techSkills=filtered.filter(function(s){return s.type!=="softskills"});
  var softItems=filtered.filter(function(s){return s.type==="softskills"});
  techSkills.forEach(function(sk){
    var d=document.createElement("div");
    d.className="skill-card";
    var badge=sk.badge?'<span class="skill-badge">'+sk.badge+'</span>':"";
    var level=sk.level?'<div class="skill-level"><div class="skill-level-fill" data-width="'+sk.level+'"></div></div>':"";
    d.innerHTML=badge+'<img src="'+sk.icon+'" alt="'+sk.name+'"><span class="skill-name">'+sk.name+'</span>'+level;
    if(sk.typeComp){
      d.addEventListener("click",function(){
        if(sk.typeComp==="certificate")openCertModal(sk.comp);
        else document.getElementById("proyectos").scrollIntoView({behavior:"smooth"});
      });
    }
    grid.appendChild(d);
  });
  if(filter==="all"&&softItems.length>0){
    var divider=document.createElement("div");
    divider.className="softskills-divider reveal";
    divider.innerHTML='<div class="softskills-divider-line"></div><span class="softskills-divider-label">Habilidades Blandas</span><div class="softskills-divider-line"></div>';
    grid.appendChild(divider);
    var sg=document.createElement("div");
    sg.className="softskills-grid";
    softItems.forEach(function(sk){
      var d2=document.createElement("div");
      d2.className="softskill-card";
      d2.innerHTML='<div class="softskill-icon">'+sk.icon+'</div><div class="softskill-info"><h4>'+sk.title+'</h4><p>'+sk.text+'</p></div>';
      sg.appendChild(d2);
    });
    grid.appendChild(sg);
  }else if(filter==="softskills"){
    var sg2=document.createElement("div");
    sg2.className="softskills-grid";
    softItems.forEach(function(sk){
      var d2=document.createElement("div");
      d2.className="softskill-card";
      d2.innerHTML='<div class="softskill-icon">'+sk.icon+'</div><div class="softskill-info"><h4>'+sk.title+'</h4><p>'+sk.text+'</p></div>';
      sg2.appendChild(d2);
    });
    grid.appendChild(sg2);
  }
  setTimeout(function(){
    document.querySelectorAll(".skill-level-fill").forEach(function(f){
      f.style.width=f.getAttribute("data-width")+"%";
    });
  },100);
  setTimeout(initScrollReveal,50);
}

function initSkillTabs(){
  var tabs=document.querySelectorAll(".skill-tab");
  tabs.forEach(function(tab){
    tab.addEventListener("click",function(){
      tabs.forEach(function(t){t.classList.remove("active")});
      tab.classList.add("active");
      createSkillGrid(tab.getAttribute("data-tab"));
    });
  });
}

// TIMELINE
function createTimeline(){
  var c=document.getElementById("timeline");
  if(!c)return;
  experience.forEach(function(exp,i){
    var d=document.createElement("div");
    d.className="timeline-item reveal";
    d.setAttribute("data-delay",String(i*150));
    var tags=exp.tags.map(function(t){return '<span class="timeline-tag">'+t+'</span>'}).join("");
    d.innerHTML='<div class="timeline-dot"></div><div class="timeline-content"><span class="timeline-period">'+exp.period+'</span><h3>'+exp.title+'</h3><span class="timeline-role">'+exp.role+'</span><p>'+exp.description+'</p><div class="timeline-tags">'+tags+'</div></div>';
    c.appendChild(d);
  });
}

// PROJECTS CAROUSEL
var carouselIdx=0;
var ghSvg='<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>';
function createProjects(){
  var c=document.getElementById("projects-grid");
  if(!c)return;
  // Container
  var container=document.createElement("div");
  container.className="carousel-container";
  // Sidebar
  var sidebar=document.createElement("div");
  sidebar.className="carousel-sidebar";
  projects.forEach(function(p,i){
    var thumb=document.createElement("div");
    thumb.className="carousel-thumb"+(i===0?" active":"");
    thumb.innerHTML='<span class="carousel-thumb-title">'+p.title+'</span>'+
      '<span class="carousel-thumb-period">'+p.period+'</span>'+
      '<span class="carousel-thumb-type">'+p.type+'</span>';
    thumb.onclick=function(){goToSlide(i)};
    sidebar.appendChild(thumb);
  });
  container.appendChild(sidebar);
  // Main
  var main=document.createElement("div");
  main.className="carousel-main";
  var track=document.createElement("div");
  track.className="carousel-track";
  projects.forEach(function(p,i){
    var tags=p.tags.map(function(t){return '<span class="project-tag">'+t+'</span>'}).join("");
    var imgHTML='<div class="placeholder"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg><span>Agregar imagen</span></div>';
    var slide=document.createElement("div");
    slide.className="carousel-slide"+(i===0?" active":"");
    slide.innerHTML='<div class="carousel-card">'+
      '<div class="carousel-card-image">'+imgHTML+'</div>'+
      '<div class="carousel-card-body">'+
        '<span class="project-type-badge">'+p.type+'</span>'+
        '<h3>'+p.title+'</h3>'+
        '<div class="project-meta"><span>'+p.period+'</span><span>'+p.role+'</span></div>'+
        '<p>'+p.description+'</p>'+
        '<div class="project-tags">'+tags+'</div>'+
        '<a href="https://github.com/EriDavalos" class="carousel-card-link" target="_blank">'+ghSvg+'<span>Ver en GitHub</span></a>'+
      '</div></div>';
    track.appendChild(slide);
  });
  main.appendChild(track);
  // Nav
  var nav=document.createElement("div");
  nav.className="carousel-nav";
  nav.innerHTML='<button class="carousel-arrow" id="carousel-prev"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="15 18 9 12 15 6"/></svg></button>'+
    '<span class="carousel-counter" id="carousel-counter"></span>'+
    '<button class="carousel-arrow" id="carousel-next"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="9 18 15 12 9 6"/></svg></button>';
  main.appendChild(nav);
  container.appendChild(main);
  c.appendChild(container);
  document.getElementById("carousel-prev").onclick=function(){moveCarousel(-1)};
  document.getElementById("carousel-next").onclick=function(){moveCarousel(1)};
  updateCarousel();
}
function moveCarousel(dir){
  carouselIdx+=dir;
  if(carouselIdx<0)carouselIdx=projects.length-1;
  if(carouselIdx>=projects.length)carouselIdx=0;
  goToSlide(carouselIdx);
}
function goToSlide(idx){
  carouselIdx=idx;
  var slides=document.querySelectorAll(".carousel-slide");
  var thumbs=document.querySelectorAll(".carousel-thumb");
  slides.forEach(function(s,i){s.classList.toggle("active",i===idx)});
  thumbs.forEach(function(t,i){t.classList.toggle("active",i===idx)});
  updateCarousel();
}
function updateCarousel(){
  var counter=document.getElementById("carousel-counter");
  if(counter)counter.textContent=(carouselIdx+1)+" / "+projects.length;
}

// CERT VIEWER
var currentCert=null;var currentCertIdx=0;
function openCertModal(cert){
  currentCert=cert;currentCertIdx=0;
  var m=document.getElementById("certificates");
  var title=document.getElementById("viewer-cert-title");
  var thumbs=document.getElementById("images-list");
  thumbs.innerHTML="";
  title.textContent=cert.title;
  showCertFile(0);
  cert.files.forEach(function(f,i){
    var t=document.createElement("div");
    t.className="viewer-thumb"+(i===0?" active":"");
    if(f.type==="pdf"){
      t.classList.add("viewer-thumb-pdf");
      t.textContent="PDF";
    }else{
      t.style.backgroundImage="url("+f.url+")";
    }
    t.addEventListener("click",function(){showCertFile(i)});
    thumbs.appendChild(t);
  });
  document.body.style.overflow="hidden";
  m.showModal();
}
function showCertFile(idx){
  if(!currentCert||idx<0||idx>=currentCert.files.length)return;
  currentCertIdx=idx;
  var f=currentCert.files[idx];
  var media=document.getElementById("viewer-media");
  var counter=document.getElementById("viewer-counter");
  if(f.type==="pdf"){window.open(f.url,"_blank");return}
  media.innerHTML='<img src="'+f.url+'" alt="Certificado">';
  counter.textContent=(idx+1)+" / "+currentCert.files.length;
  var thumbs=document.querySelectorAll(".viewer-thumb");
  thumbs.forEach(function(t,i){t.classList.toggle("active",i===idx)});
}
function navigateCert(dir){
  if(!currentCert)return;
  var next=currentCertIdx+dir;
  if(next<0)next=currentCert.files.length-1;
  if(next>=currentCert.files.length)next=0;
  showCertFile(next);
}
function closeCerts(){
  document.getElementById("certificates").close();
  document.body.style.overflow="";
  currentCert=null;
}

// CERTS GALLERY
function createCertsGallery(){
  var grid=document.getElementById("certs-grid");
  if(!grid)return;
  var certKeys=Object.keys(certs);
  certKeys.forEach(function(key,i){
    var cert=certs[key];
    var d=document.createElement("div");
    d.className="cert-card reveal";
    d.setAttribute("data-delay",String(i*120));
    var thumbUrl=cert.files[0].type==="img"?cert.files[0].url:"";
    var previewHTML=thumbUrl?
      '<img src="'+thumbUrl+'" alt="'+cert.title+'">':
      '<div class="cert-icon">&#128196;</div>';
    var count=cert.files.length;
    var countLabel=count+" archivo"+(count>1?"s":"");
    d.innerHTML='<div class="cert-preview">'+previewHTML+'</div>'+
      '<div class="cert-body">'+
        '<h3>'+cert.title+'</h3>'+
        '<span class="cert-count">'+countLabel+'</span>'+
        '<button class="cert-view-btn">Ver certificado <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></button>'+
      '</div>';
    d.querySelector(".cert-view-btn").addEventListener("click",function(e){e.stopPropagation();openCertModal(cert)});
    grid.appendChild(d);
  });
}

// INIT
document.addEventListener("DOMContentLoaded",function(){
  initMatrix();
  terminalTyping();
  createAptitudeCards();
  createSkillGrid("all");
  initSkillTabs();
  createTimeline();
  createProjects();
  createCertsGallery();
  initHeaderScroll();
  initHamburger();
  initActiveNav();
  initStatCounters();
  setTimeout(initScrollReveal,100);
  var s=document.createElement("style");
  s.textContent=".cursor-blink{animation:blink 1s step-end infinite;color:var(--accent)}@keyframes blink{50%{opacity:0}}";
  document.head.appendChild(s);
  // Keyboard nav for cert viewer
  document.addEventListener("keydown",function(e){
    if(!currentCert)return;
    if(e.key==="Escape")closeCerts();
    if(e.key==="ArrowLeft")navigateCert(-1);
    if(e.key==="ArrowRight")navigateCert(1);
  });
});