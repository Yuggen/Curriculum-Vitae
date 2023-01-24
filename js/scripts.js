function swapSeleccionada(clickeado){
    let viejo=document.getElementsByClassName("seleccionada");
    viejo[0].classList.remove("seleccionada");
    clickeado.classList.add("seleccionada");
    swapContenido(clickeado);
}
function swapContenido(clickeado){
    let viejo=document.getElementsByClassName("activo");
    viejo[0].classList.remove("activo");
    let nuevo=document.getElementById(clickeado.id.slice(0,-3));
    nuevo.classList.add("activo");
}
