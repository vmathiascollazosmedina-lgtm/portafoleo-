const boton = document.getElementById("miBoton");
const mensaje = document.getElementById("mensaje");
const youtube = document.getElementById("youtube");
const cerrar = document.getElementById("cerrar");
const comunity = document.getElementById("comunity123")
const canal = document.getElementById("canal123")

boton.addEventListener("click", function() {
    mensaje.style.display = "block";
});

youtube.addEventListener("click", function() {
    window.open("https://www.youtube.com/")
});

cerrar.addEventListener("click", function() {
    mensaje.style.display = "none";
});

comunity.addEventListener("click", function() {
    window.open("https://discord.gg/bJ2sg8nc")
});

canal.addEventListener("click", function() {
    window.open("https://www.youtube.com/@Klyrox-t8r")
});