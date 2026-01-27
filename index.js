const aboutMe = "Estudiante de noveno semestre de Ingeniería en Sistemas Computacionales, con interés en desarrollarse profesionalmente en el área tecnológica. Comprometido con el aprendizaje continuo, con habilidades para el trabajo en equipo y una actitud proactiva. Apasionado por la tecnología y la solución de problemas.";

const education = {
  campus: "instituto Tecnológico Superior de progreso",
  period: "2021 - Actualmente en 9° semestre"
};

const fullName = "Eri Jair Davalos Quijano";

const role = "Desarrollador Back-End";

const languageAndTech = [
  {title: "Lenguajes de programación", description: "C, C++, C#, Java, Python, PHP, TypeScript"},
  {title: "Desarrollo Web", description: "HTML, CSS + JavaScript, PHP"},
  {title: "Frameworks / Plataformas", description: ".NET Framework, SpringBoot, Ionic, Larave, Ángular"},
  {title: "Bases de Datos", description: "MySQL, PostgreSQL, SQL Server"},
];

const idiome = "English B1"

//const skills = ["Trabajo en equipo", "Resolución de problemas de manera eficiente", "Aprendizaje eficiente y rápido", "Abierto a nuevas áreas de aprendizaje"];

const projects = [
  {title: "Página web", company: "Trabajo autónomo", role: "Desarrollador Front-End", description: "Desarrollo de un sitio web estático con HTML y CSS para un negocio dedicado a la pintura plástica, con el objetivo de mostrar de forma profesional el portafolio de trabajos del cliente."},
  {title: "Software de escritorio + web", company: "Trabajo autónomo", role: "Desarrollador Full-Stack", description: "Desarrollo de software de escritorio en C# .NET para la gestión de un pequeño negocio de alquiler de apartamentos. El sistema incluye funciones de registro y control monetario, integrándose con un sitio web que muestra los apartamentos disponibles y sus vistas. Ambos sistemas están conectados a una base de datos remota para sincronización en tiempo real."},
  {title: "Montura Ecuatorial (escritorio, web y móvil)", company: "Proyecto independiente", role: "Desarrollador Full-Stack", description: "Desarrollo de un prototipo orientado al cálculo preciso de la posición de estrellas, con capacidad para el rastreo automatizado de objetos celestes. El proyecto busca reducir costos, optimizar su uso mediante automatización y facilitar su aplicación en áreas como la astrofotografía y la observación astronómica. Al igual que desarrollo de placa electrónica y prototipo movible."},
  {title: "Difusión ITSP", company: "Instituto Tecnológico Superior de Progreso", role: "Desarrollador Front-End", description: "Responsable de la página web en el área de difusión en el Instituto Tecnológico Superior Progreso, encargado del diseño y desarrollo frontend, así como codificación y despliegue en el servidor."}
  /*{title: "", company: "", role: "Des", description: ""},*/
];

const aptituds = [
  {urlIcon: "images/interest_icon.png", number: 1, title: "Interés actual", description: "Me interesa ampliar mi campo en la programación y aprender nuevas tecnologías que fortalezcan mis conocimientos y habilidades."},
  {urlIcon: "images/focus_icon.png", number: 2, title: "Enfoque", description: "Busco desarrollarme en el área de software, aportando soluciones prácticas y efectivas que generen valor."},
  {urlIcon: "images/motivation_icon.png", number: 3, title: "Motivación", description: "Me motiva el aprendizaje continuo y la innovación como base para crecer y adaptarme a nuevos retos."},
  {urlIcon: "images/plus_icon.png", number: 4, title: "Plus personal", description: "Disfruto resolver problemas de forma creativa, trabajar en proyectos que representen un reto técnico y ayudar a difundir conocimiento."},
];

const certs = {
    JavaCert: {
      title: "Universidad Java - Cero a Experto - Actualizado (+155 hrs)", 
      files: [
        {type: 'img', url: 'certifications/CertificadoJAVA0EXPERTO/CertificadoJAVA0EXPERTO_EriDavalos.webp'},
        {type: 'pdf', url: 'certifications/CertificadoJAVA0EXPERTO/CertificadoJAVA0EXPERTO_EriDavalos.pdf'},
      ]
    }, 
    WebCert: {
      title: "Universidad Desarrollo Web FrontEnd Web Developer!",
      files: [
        {type: 'img', url: 'certifications/CertificadoDESARROLLOWEB/CertificadoDESARROLLOWEB_EriDavalos.webp'},
        {type: 'pdf', url: 'certifications/CertificadoDESARROLLOWEB/CertificadoDESARROLLOWEB_EriDavalos.pdf'},
      ]
    },
  }

const skills = [
  {type: "languajes", time: 0.00, icon: "images/java_icon.png", name: "Java", typeComp: 'certificate', comp: certs.JavaCert },
  {type: "languajes", time: 0.25, icon: "images/cs_icon.png", name: "C#", typeComp: 'project'},
  {type: "languajes", time: 0.50, icon: "images/cp_logo.png", name: "C++"},
  {type: "languajes", time: 0.75, icon: "images/javascript_icon.png", name: "Javascript", typeComp: 'certificate', comp: certs.WebCert},
  {type: "languajes", time: 1.00, icon: "images/python_icon.png", name: "Python"},

  {type: "frontend", time: 0.00, icon: "images/ionic_icon.png", name: "Ionic"},
  {type: "frontend", time: 0.25, icon: "images/angular_icon.png", name: "Angular"},
  {type: "frontend", time: 0.50, icon: "images/html_icon.png", name: "Web"},

  {type: "backend", time: 0.00, icon: "images/databases_icon.png", name: "Databases"},
  {type: "backend", time: 0.25, icon: "images/node_icon.png", name: "NodeJS"},
  {type: "backend", time: 0.50, icon: "images/springboot_icon.png", name: "SpringBoot"},
  {type: "backend", time: 0.75, icon: "images/php_icon.png", name: "PHP"},
];

/* Animation type */

var text = "<¡Bienvenidos!, soy/>"
const speed = 100;
let i = 0;

const wel = document.getElementById("welcome");
wel.textContent = "";

function typeEffect() {

  if (i < text.length) {
    wel.innerHTML += text.charAt(i);
    
    if(i==13){
      wel.innerHTML = "<";
      const p = document.createElement('dec');
      p.textContent = "¡Bienvenidos!";
      wel.appendChild(p);
    }

    i++;

    setTimeout(typeEffect, speed);
  }

}

/* Obtener las tarjetas de aptitudes */

function getAptitudeCards(){
  aptituds.forEach(aptitude => {
    createAptitudeCard(aptitude);
  });
}

function createAptitudeCard(card){
  const cont = document.getElementById("aptitude-cards");

  const divF = document.createElement('div');
  divF.className = "aptitude-card";

  const divCH = document.createElement('div');
  divCH.className = "aptitude-header"; 

  const div = document.createElement('div');
  const img = document.createElement('img');
  img.src = card.urlIcon;

  div.appendChild(img);

  const pN = document.createElement('h1');
  pN.innerHTML = card.number;

  divCH.appendChild(div);
  divCH.appendChild(pN);

  const divCC = document.createElement('div');
  divCC.className = "aptitude-cont";
  const h2 = document.createElement('h2');
  h2.innerHTML = card.title;
  const p = document.createElement('p');
  p.innerHTML = card.description;

  divCC.appendChild(h2);
  divCC.appendChild(p);

  divF.appendChild(divCH);
  divF.appendChild(divCC);

  cont.appendChild(divF);
}

function getSkillTargets(){
  skills.forEach(skill => {
    createSkillsTarget(skill);
  });
}

function createSkillsTarget(skill){

  const skills = document.getElementById('skills');
  const frontend = document.getElementById('frontend');
  const backend = document.getElementById('backend');

  const div = document.createElement('div');
  div.className = "skill-target";
  const img = document.createElement('img');
  img.src = skill.icon;
  const p = document.createElement('p');
  p.innerHTML = skill.name;

  div.appendChild(img);
  div.appendChild(p);

  const div2 = document.createElement('div');
  div2.className = "skill-description";

  const p2 = document.createElement('p');
  p2.innerHTML = skill.typeComp == 'certificate' ? "Comprobado con certificado" : "Comprobado con proyecto";

  const btn = document.createElement('button');
  btn.innerHTML = skill.typeComp == 'certificate' ? "Ver certificado" : "Ver proyecto";
  btn.addEventListener('click', function(){
    
    if(skill.typeComp == 'certificate'){

      const img = document.getElementById('img-viewer');
      const list = document.getElementById('images-list');
      document.body.style.overflow = 'hidden';

      list.innerHTML = "";
      const files = skill.comp.files;
      img.src = files[0].url;

      files.forEach(file => {

        const btn = document.createElement('button');
        btn.style = 'background-image: url(' + (file.type == 'img' ? file.url : '/images/pdf_icon.png') + ');' + (file.type == 'pdf' ? 'background-size: 48px; background-repeat: no-repeat; background-position: center;' : '');

        list.appendChild(btn);
      });
      
      certificates.showModal();
      //window.location.href = skill.comp_url;
    }

  });

  div2.appendChild(p2);
  div2.appendChild(btn);

  div.appendChild(div2);

  switch (skill.type) {
    case "languajes":
      skills.appendChild(div);
      break;
    
    case "frontend":
      frontend.appendChild(div);
      break;

    case "backend":
      backend.appendChild(div);
      break;

    default:
      break;
  }
}

function openCertificate(){
  const cert = document.getElementById(certificates);
  cert.style = "display: auto;";
}

function closeCerts(){
  certificates.close();
  document.body.style.overflow = '';
}

getAptitudeCards();
getSkillTargets();
typeEffect();