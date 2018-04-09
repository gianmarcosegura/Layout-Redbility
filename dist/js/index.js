const openMenu = document.getElementById("headerMenu");
const closeMenu = document.getElementById("headerMenu");
const fondo = document.getElementById("headder");

let abrirMenu = () => openMenu.style.width = "100%";
let cerrarMenu = () => closeMenu.style.width = "0%";

let change = (param) => {
    fondo.style.backgroundImage = `url(dist/img/fondo${param}.png)`;
    let dots = event.target.parentNode.children;
    for (let dot of dots) {
        dot.style.backgroundColor = 'white';
    }
    event.target.style.backgroundColor = 'rgb(255,0,78)';
}