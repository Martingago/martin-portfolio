"use strict"
// JS MENU LATERAL
const mainMenu = document.querySelector(".menu-lateral");
const btnMenu = document.querySelector(".btn-menu-lateral");
const seccionesBtn = document.querySelectorAll(".seccionbtn")
const bodyContent = document.querySelector("body")
const muteElements = document.querySelector(".mute-content-element");

//abre y cierra el menu

let openClose = () => {
    mainMenu.classList.toggle("expanded");
    if (mainMenu.classList.contains("expanded")) {
        indicador.style.width = `257px`;
    } else {
        indicador.style.width = `67px`;
    }
    muteElements.classList.toggle("ismuted");
    document.querySelector("body").classList.toggle("expanded-body-content");
    if (muteElements.classList.contains("ismuted") && window.innerWidth < 1250) {
        bodyContent.style.overflowY = `hidden`;
    } else {
        bodyContent.style.overflowY = `scroll`;
    }
}

//Ajusta tamaño de las letras del inicio si el menu lateral está desplegado
const minimizarTitulo = () => {
    const letraH1Inicio = document.querySelector(".fixed")
    if (mainMenu.classList.contains("expanded") && window.innerWidth < 1650) {
        letraH1Inicio.style.fontSize = `55px`;
        letraH1Inicio.style.transition = `all .1s linear`
    } else {
        letraH1Inicio.style.fontSize = `clamp(1.5rem, 5vw, 5rem)`;
        letraH1Inicio.style.transition = `all .1s linear`
    }
}
//abre y cierra el menu haciendo click en el icono, o en el difuminado(<1350px)
btnMenu.addEventListener(
    "click",
    () => {
        openClose();
        minimizarTitulo();
    }
);
muteElements.addEventListener(
    "click",
    () => {
        openClose();
    }
);

//Cierra el menu si haces click fuera del mismo

document.addEventListener(
    'click',
    (event) => {
        var isClickInside = mainMenu.contains(event.target);

        if (!isClickInside && mainMenu.classList.contains("expanded")) {
            openClose();
        }
    }
);

// INDICADOR DE POSICION DE LAS SECCIONES

const indicador = document.querySelector("#indicador");
const secciones = document.querySelectorAll(".seccion");
let indexsectionActiva

const limpiar = () => {
    seccionesBtn.forEach(btn => {
        btn.style.backgroundColor = `transparent`;
    });
}

const observer = new IntersectionObserver((entradas) => {
    entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
            limpiar();
            indexsectionActiva = [...secciones].indexOf(entrada.target);
            indicador.style.transform = `translateY(${50 * indexsectionActiva}px)`;
            indicador.style.transition = `all .2s linear`;
        }
    })
}, {
    rootMargin: `0px 0px 0px -50px`,
    threshold: .6
})

secciones.forEach(seccion => observer.observe(seccion))