// Variables de referencia a los elementos de HTML
const infoParrafo = document.getElementById("info")
const modificarBtn = document.getElementById("modificar-btn")
const guardarBtn = document.getElementById("guardar-btn")
const crearParrafoBtn = document.getElementById("crear-parrafo-btn")
const crearBotonBtn = document.getElementById("crear-boton-btn")
const contenedor = document.getElementById("contenedor")

// Cargar texto que va almacenar al iniciar la pagina
window.onload = function() {
    const textoGuardado = localStorage.getItem("textoInfo")
    if (textoGuardado) {
        infoParrafo.textContent = textoGuardado;
    }

    const elementosGuardados = localStorage.getItem("contenedorHTML")
    if(elementosGuardados) {
        contenedor.innerHTML = elementosGuardados;
    }
}

// Funcion para modificar el contenido del parrafo
function modificarTexto() {
    const nuevoTexto = prompt("Introduce el nuevo texto: ");
    if(nuevoTexto) {
        infoParrafo.textContent = nuevoTexto;
        console.log("Texto modificado: ", infoParrafo.textContent);
    }
}

// Funcion para guardar los cambios en LocalStorage
function guardarCambios() {
    localStorage.setItem("textoInfo", infoParrafo.textContent);
    localStorage.setItem("contenedorHTML", contenedor.innerHTML);
    alert("Los cambios han sido guardados con éxito");
}

// Funcion para agregar un nuevo parrafo al contenedor
function agregarParrafo() {
    const nuevoParrafo = document.createElement("p");
    nuevoParrafo.textContent = "Este es un nuevo parrafo creado dinámicamente";
    contenedor.appendChild(nuevoParrafo);
    console.log("Parrafo añadido: ", nuevoParrafo);
}

// Funcion para crear y agregar un boton con evento al contenedor
function agregarBotonConEvento() {
    const nuevoBoton = document.createElement("button");
    nuevoBoton.textContent = "Botón Dinámico";

    // Evento del botón que muestra la alerta
    nuevoBoton.addEventListener("click", () => {
        alert("¡Has hecho clic en el botón dinámico!");
    });

    contenedor.appendChild(nuevoBoton)
    console.log("Botón añadido con evento");
}

// Agregar eventos a los botones
modificarBtn.addEventListener("click", modificarTexto)
guardarBtn.addEventListener("click", guardarCambios)
crearParrafoBtn.addEventListener("click", agregarParrafo)
crearBotonBtn.addEventListener("click", agregarBotonConEvento)
