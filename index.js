var projects = [
  {title:"Pagina Web - Pintura Plastica",period:"Feb 2023 - Feb 2023",role:"Desarrollador Front-End",type:"Trabajo autonomo",image:"images/projects/pintura.jpg",description:"Desarrollo de un sitio web estatico con HTML y CSS para un negocio dedicado a la pintura plastica, con el objetivo de mostrar de forma profesional el portafolio de trabajos del cliente.",tags:["HTML","CSS"]},
  {title:"Programador Full-Stack Jr.",period:"Febrero 2026 - Actualidad",role:"Full-Stack Developer",type:"Sector logistico",image:"images/projects/logistica.jpg",description:"Desarrollo y mantenimiento de aplicaciones web y APIs para una empresa del sector logistico, implementando nuevas funcionalidades, optimizando procesos existentes y atendiendo requerimientos del negocio.",tags:["Flutter","C#",".NET"]},
  {title:"Proyecto ORION - Montura Ecuatorial",period:"Sept 2024 - En curso",role:"Desarrollador Full-Stack",type:"Proyecto independiente",image:"images/projects/orion.jpg",description:"Desarrollo de un prototipo orientado al calculo preciso de la posicion de estrellas, con capacidad para el rastreo automatizado de objetos celestes. Incluye desarrollo de placa electronica y prototipo movible.",tags:["Electronica","Full-Stack","IoT"]},
  {title:"Difusion ITSP",period:"Nov 2024 - Junio 2025",role:"Desarrollador Front-End",type:"Instituto Tecnologico",image:"images/projects/itsp.jpg",description:"Responsable de la pagina web en el area de difusion en el Instituto Tecnologico Superior Progreso, encargado del diseno y desarrollo frontend, asi como codificacion y despliegue en el servidor.",tags:["HTML","CSS","JavaScript"]},
  {title:"App Movil Cashless",period:"Agosto 2025 - Diciembre 2025",role:"Desarrollador Front-End",type:"Proyecto de empresa",image:"images/projects/cashless.jpg",description:"Desarrollo del Front-End de una aplicacion movil tipo cashless para la gestion de compras y ventas, incorporando un sistema de pagos mediante codigos QR cifrados.",tags:["Flutter","QR","Seguridad"]}
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
  FundaulaCert:{title:"Certificados fundaula",files:[{type:"img",url:"certifications/CertificadoFUNDAULA/CertificadoFUNDAULA_EriDavalos_1.webp"},{type:"img",url:"certifications/CertificadoFUNDAULA/CertificadoFUNDAULA_EriDavalos_2.webp"},{type:"img",url:"certifications/CertificadoFUNDAULA/CertificadoFUNDAULA_EriDavalos_3.webp"},{type:"img",url:"certifications/CertificadoFUNDAULA/CertificadoFUNDAULA_EriDavalos_4.webp"},{type:"img",url:"certifications/CertificadoFUNDAULA/CertificadoFUNDAULA_EriDavalos_5.webp"},{type:"img",url:"certifications/CertificadoFUNDAULA/CertificadoFUNDAULA_EriDavalos_6.webp"},{type:"pdf",url:"certifications/CertificadoFUNDAULA/CertificadoFUNDAULA_EriDavalos.pdf"}]}
};

var skills = [
  {type:"languajes",icon:"images/java_icon.png",name:"Java",typeComp:"certificate",comp:certs.JavaCert},
  {type:"languajes",icon:"images/cs_icon.png",name:"C#",typeComp:"project"},
  {type:"languajes",icon:"images/cp_logo.png",name:"C++"},
  {type:"languajes",icon:"images/javascript_icon.png",name:"Javascript",typeComp:"certificate",comp:certs.WebCert},
  {type:"languajes",icon:"images/python_icon.png",name:"Python"},
  {type:"frontend",icon:"images/ionic_icon.png",name:"Ionic"},
  {type:"frontend",icon:"images/angular_icon.png",name:"Angular"},
  {type:"frontend",icon:"images/html_icon.png",name:"HTML/CSS",typeComp:"certificate",comp:certs.FundaulaCert},
  {type:"backend",icon:"images/databases_icon.png",name:"SQL"},
  {type:"backend",icon:"images/node_icon.png",name:"NodeJS"},
  {type:"backend",icon:"images/springboot_icon.png",name:"SpringBoot"},
  {type:"backend",icon:"images/php_icon.png",name:"PHP"},
  {type:"backend",icon:"images/laravel_icon.png",name:"Laravel"},
  {type:"softskills",title:"Trabajo en equipo",text:"Colaboro y apoyo de forma efectiva a mis companeros."},
  {type:"softskills",title:"Comunicacion asertiva",text:"Explico mis ideas de forma clara y concisa."},
  {type:"softskills",title:"Adaptabilidad",text:"Aprendo nuevas tecnologias para aplicarlas en mi area."},
  {type:"softskills",title:"Pensamiento critico",text:"Evaluo las opciones mas viables antes de decidir."},
  {type:"softskills",title:"Proactividad",text:"Tomo iniciativas para aprender y mejorar."}
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

// NAV DOTS
function initNavDots(){var s=document.querySelectorAll(".section-s");var d=document.querySelectorAll(".dot");var obs=new IntersectionObserver(function(e){e.forEach(function(en){if(en.isIntersecting){var id=en.target.id;d.forEach(function(dot){dot.classList.toggle("active",dot.getAttribute("href")==="#"+id)})}})},{threshold:0.3});s.forEach(function(sec){obs.observe(sec)})}

// APTITUDE CARDS
function createAptitudeCards(){var c=document.getElementById("aptitude-cards");if(!c)return;aptituds.forEach(function(card){var d=document.createElement("div");d.className="aptitude-card";d.innerHTML='<div class="aptitude-header"><div><img src="'+card.urlIcon+'" alt="'+card.title+'"></div><h1>'+card.number+'</h1></div><div class="aptitude-h"><h2>'+card.title+'</h2></div><div class="aptitude-cont"><p>'+card.description+'</p></div>';c.appendChild(d)})}

// SKILLS
function createSkillTargets(){var ct={languajes:document.getElementById("skills"),frontend:document.getElementById("frontend"),backend:document.getElementById("backend"),softskills:document.getElementById("softskills")};skills.forEach(function(sk){var t=ct[sk.type];if(!t)return;if(sk.type==="softskills"){var d=document.createElement("div");d.className="softskills";d.innerHTML="<p>"+sk.title+'</p><div class="dot-sep"></div><p>'+sk.text+"</p>";t.appendChild(d)}else{var d2=document.createElement("div");d2.className="skill-target";var dh="";if(sk.typeComp){var lb=sk.typeComp==="certificate"?"Comprobado con certificado":"Comprobado con proyecto";var bl=sk.typeComp==="certificate"?"Ver certificado":"Ver proyecto";dh='<div class="skill-description"><p>'+lb+"</p><button>"+bl+"</button></div>"}d2.innerHTML='<img src="'+sk.icon+'" alt="'+sk.name+'"><p>'+sk.name+"</p>"+dh;if(sk.typeComp==="certificate"){var b=d2.querySelector("button");if(b)b.addEventListener("click",function(){openCertModal(sk.comp)})}else if(sk.typeComp==="project"){var b2=d2.querySelector("button");if(b2)b2.addEventListener("click",function(){document.getElementById("proyectos").scrollIntoView({behavior:"smooth"})})}t.appendChild(d2)}})}

// PROJECTS
function createProjects(){var c=document.getElementById("projects-grid");if(!c)return;projects.forEach(function(p,i){var d=document.createElement("div");d.className="project-card reveal";d.setAttribute("data-delay",String(i*120));var tags=p.tags.map(function(t){return '<span class="project-tag">'+t+"</span>"}).join("");var imgHTML='<div class="placeholder"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg><span>Agregar imagen</span></div>';d.innerHTML='<div class="project-image">'+imgHTML+'</div><div class="project-body"><h3>'+p.title+'</h3><div class="project-meta"><span>'+p.period+'</span><span>'+p.role+"</span></div><p>"+p.description+'</p><div class="project-tags">'+tags+"</div></div>";c.appendChild(d)});setTimeout(initScrollReveal,100)}

// CERT MODAL
function openCertModal(cert){var m=document.getElementById("certificates");var iv=document.getElementById("img-viewer");var l=document.getElementById("images-list");l.innerHTML="";iv.src=cert.files[0].url;document.body.style.overflow="hidden";var bs=[];cert.files.forEach(function(f){var b=document.createElement("button");if(f.type==="img"){b.style.backgroundImage="url("+f.url+")"}else{b.style.backgroundImage="url(images/pdf_icon.png)";b.style.backgroundSize="44px";b.style.backgroundRepeat="no-repeat";b.style.backgroundPosition="center"}b.addEventListener("click",function(){if(f.type==="pdf"){window.location.href=f.url}else{iv.src=f.url;bs.forEach(function(x){x.style.borderColor="transparent"});b.style.borderColor="#fff"}});l.appendChild(b);bs.push(b)});if(bs[0])bs[0].style.borderColor="#fff";m.showModal()}
function closeCerts(){document.getElementById("certificates").close();document.body.style.overflow=""}

// INIT
document.addEventListener("DOMContentLoaded",function(){initMatrix();terminalTyping();createAptitudeCards();createSkillTargets();createProjects();initHeaderScroll();initHamburger();initNavDots();setTimeout(initScrollReveal,100);var s=document.createElement("style");s.textContent=".cursor-blink{animation:blink 1s step-end infinite;color:var(--accent)}@keyframes blink{50%{opacity:0}}";document.head.appendChild(s)});