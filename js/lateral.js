"use strict"
// JS MENU LATERAL
const mainMenu = document.querySelector(".menu-lateral");
const btnMenu = document.querySelector(".btn-menu-lateral");
const bodyContent = document.querySelector("body")
const muteElements = document.querySelector(".mute-content-element");
const letraInicio = document.querySelectorAll(".tittle-letter");


function openClose() {
    mainMenu.classList.toggle("expanded");
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
    function (event) {
        var isClickInside = mainMenu.contains(event.target);

        if (!isClickInside && mainMenu.classList.contains("expanded")) {
            openClose();
        }
    });

//animacion de las letras del inicio

//HOVER

const hoverAnimation = (letra) => {
    if (letra.classList.contains("animation")) {
        setTimeout(() => {
            letra.classList.remove("animation")
        }, 1000)
    }
}

letraInicio.forEach(
    (letra) => {
        letra.addEventListener(
            "mouseenter",
            () => {
                letra.classList.add("animation");
                hoverAnimation(letra);
            }
        )
    }
)
letraInicio.forEach(
    (letra) => {
        letra.addEventListener(
            "mouseleave",
            () => {
                hoverAnimation(letra);

            }
        )
    }
)

// RAMDOM

const ramdom1 = document.querySelectorAll(".ramdom1");
const ramdom2 = document.querySelectorAll(".ramdom2");
const ramdom3 = document.querySelectorAll(".ramdom3");
const ramdom4 = document.querySelectorAll(".ramdom4");


const animationRamdom = (elements, interval) => {
    elements.forEach(
        (ramdom) => {
            let sw = true;
            setInterval(() => {
                if (!muteElements.classList.contains("ismuted")) {
                    if (sw) {
                        ramdom.classList.add("animation");
                        sw = false
                    }else{
                        ramdom.classList.remove("animation");
                        sw = true
                    }
                }
            }, interval);
        }
    )
}

animationRamdom(ramdom1, 5500);
animationRamdom(ramdom2, 9500);
animationRamdom(ramdom3, 7000);
animationRamdom(ramdom4, 3500);

