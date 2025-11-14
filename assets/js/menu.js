// Selección de elementos
const btn = document.getElementById("burger-checkbox");
const menu = document.getElementById("menu");

// Evento para abrir/cerrar menú
btn.addEventListener("click", () => {
    menu.classList.toggle("menu-activo");
    btn.classList.toggle("activo");
});