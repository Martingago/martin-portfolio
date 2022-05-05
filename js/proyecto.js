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