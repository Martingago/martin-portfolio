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
            cerrarTelonCuerda();
            cerrarTelon(3000);
            cuerdaInfinita(5000);
            habilitarClick(5500);
            telonero++
        } else {
            cuerdaTelon.disabled = true
            recogerCuerda(2000);
            abrirTelon(3000);
            apareceCuerda(5000);
            cuerdaInfinita(8100);
            habilitarClick(8500);
            telonero--
        }
    }
);