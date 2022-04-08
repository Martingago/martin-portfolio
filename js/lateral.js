"use strict"
// JS MENU LATERAL
const mainMenu = document.querySelector(".menu-lateral");
const btnMenu = document.querySelector(".btn-menu-lateral");
const seccionesBtn = document.querySelectorAll(".seccionbtn")
const bodyContent = document.querySelector("body")
const muteElements = document.querySelector(".mute-content-element");
const letraInicio = document.querySelectorAll(".tittle-letter");

function openClose() {
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
    function (event) {
        var isClickInside = mainMenu.contains(event.target);

        if (!isClickInside && mainMenu.classList.contains("expanded")) {
            openClose();
        }
    });

// INDICADOR DE POSICION DE LAS SECCIONES

const indicador = document.querySelector("#indicador");
const secciones = document.querySelectorAll(".seccion");
let indexsectionActiva

const limpiar = () => {
    seccionesBtn.forEach(btn => {
        btn.style.backgroundColor = `transparent`;
    });
}

const observer = new IntersectionObserver((entradas, observer) => {
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
                    } else {
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


// TELON ABOUT ME   
const cuerdaTelon = document.querySelector(".telon-launcher");
const telonIzquierda = document.querySelector(".telon-izquierda");
const telonDerecha = document.querySelector(".telon-derecha");

// SE ABRE EL TELON
// Animacion de recogerse la cuerda (sólo al abrir el telón)
const recogerCuerda = (temporizador) => {
    cuerdaTelon.style.animation = `launcherclickanimation 3s linear`;
    setTimeout(() => {
        cuerdaTelon.style.transform = `translateY(-100%)`
    }, temporizador);
}
//La cuerda cae desde arriba (sólo al abrir el telon)
const apareceCuerda = (temporizador) => {
    setTimeout(() => {
        cuerdaTelon.style.animation = `launchertimeoutanimation 3s linear`;
        cuerdaTelon.style.transform = `translateY(0)`;
    }, temporizador);
}
// Animacion de abrir el telon
const abrirTelon = (temporizador) => {
    setTimeout(() => {
        telonIzquierda.classList.add("abrir-telon-izquierda");
        telonIzquierda.style.animation = `movtelonizquierda 1.5s linear`;
        telonDerecha.classList.add("abrir-telon-derecha");
        telonDerecha.style.animation = `movtelonderecha 1.5s linear`;
    }, temporizador);
}

//SE CIERRA EL TELON
// Animacion tirar de la cuerda (al cerrar telon)
const cerrarTelonCuerda = () => {
    cuerdaTelon.style.animation = `launchercloseanimation 3s linear`;
}
// Animacion cerrar el telon
const cerrarTelon = (temporizador) => {
    setTimeout(() => {
        telonIzquierda.classList.remove("abrir-telon-izquierda");
        telonIzquierda.style.animation = `cerrartelonizquierda 1.5s linear`;
        telonDerecha.classList.remove("abrir-telon-derecha");
        telonDerecha.style.animation = `cerrartelonderecha 1.5s linear`;
    }, temporizador);
}
// Animacion infinita de la cuerda
const cuerdaInfinita = (temporizador) => {
    setTimeout(() => {
        cuerdaTelon.style.animation = `launcheranimation 3s infinite`;
    }, temporizador)
}
//habilitamos el click de la cuerda
const habilitarClick = (temporizador) => {
    setTimeout(() => {
        cuerdaTelon.disabled = false
    }, temporizador);
}
// Capturamos el click de la cuerda y ejecutamos todas las animaciones
var telonero = 1;
cuerdaTelon.addEventListener(
    "click",
    () => {
        if (telonero == 0) {
            cuerdaTelon.disabled = true
            console.log("el telon se cierra")
            cerrarTelonCuerda();
            cerrarTelon(3000);
            cuerdaInfinita(5000);
            habilitarClick(5500);
            telonero++
        } else {
            cuerdaTelon.disabled = true
            console.log("el telon se abre")
            recogerCuerda(2000);
            abrirTelon(3000);
            apareceCuerda(5000);
            cuerdaInfinita(8100);
            habilitarClick(8500);
            telonero--
        }
    }
);

// Proyectos

const proyecto = document.querySelectorAll(".proyecto-elemento");

proyecto.forEach(proyecto => {

    proyecto.addEventListener(
        "mouseenter",
        () => {
            proyecto.classList.add("proyecto-active")
        }
    )
    proyecto.addEventListener(
        "mouseleave",
        () => {
            proyecto.classList.remove("proyecto-active")
        }
    )
});