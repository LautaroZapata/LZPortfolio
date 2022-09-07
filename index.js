let uk = document.getElementById('uk');
let spain = document.getElementById('spain');

function translateSpanish() {
    document.getElementById('home').innerHTML = "Inicio";
    document.getElementById('technologies').innerHTML = "Tecnologías";
    document.getElementById('proyects').innerHTML = "Proyectos"
    document.getElementById('contact').innerHTML = "Contacto"
    document.getElementById('hi').innerHTML = "< Hola! />"
    document.getElementById('text1').innerHTML = "Mi nombre es <b class='lautacolor'>LAUTARO ZAPATA</b>. Soy un Desarrollador Web Trainee. Me aventuré en la tecnología por diversión, interes y curiosidad. Actualmente estoy estudiando en Jóvenes a Programar"
    document.getElementById('proyectsSection').innerHTML = "Proyectos";
    document.getElementById('download').innerHTML = "Descargar CV";

}

function translateEnglish() {
    document.getElementById('home').innerHTML = "Home";
    document.getElementById('technologies').innerHTML = "Technologies";
    document.getElementById('proyects').innerHTML = "Proyects";
    document.getElementById('contact').innerHTML = "Contact";
    document.getElementById('hi').innerHTML = "< Hi! />";
    document.getElementById('text1').innerHTML = `My name is <b class="lautacolor">LAUTARO ZAPATA</b>.I'm a Trainee Web
    Developer. I ventured into the technologies for fun, interest and curiosity. I'm currently studying in
    Jovenes a Programar.`;
    document.getElementById('proyectsSection').innerHTML = "Proyects";
    document.getElementById('download').innerHTML = "Download CV";

}

document.addEventListener('DOMContentLoaded',() => {
    uk.addEventListener('click',() => {
        translateEnglish();
    });
    spain.addEventListener('click',() => {
        translateSpanish()
    })
})