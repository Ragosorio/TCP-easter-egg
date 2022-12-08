const input = document.getElementById("code")
const btn = document.getElementById("btn")
const firstPage = document.getElementById("first-page")
const secondPage = document.getElementById("second-page")
const typed = new Typed(".typed", {
    strings: ["<i class='text'>The code is JesusChrist</i>", "<i class='text'>Write it in our dm</i>"],
    typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
	startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 100, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '|', // Caracter para el cursor
	contentType: 'html' // 'html' o 'null' para texto sin formato
})

secondPage.style.display = "none"

btn.addEventListener("click", cambiarPantalla)

function cambiarPantalla() {
    if (input.value == "JC") {
        firstPage.style.display = "none"
        secondPage.style.display = "flex"
    } else {
        input.classList.add("nosir") 
        location.reload();
    }
}