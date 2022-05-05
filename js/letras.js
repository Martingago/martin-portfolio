
//animacion de las letras del inicio
const letraInicio = document.querySelectorAll(".tittle-letter");
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