const container = document.querySelector(".container")
const totalCarrito = document.querySelector("span")
const inputBuscar = document.querySelector("#inputSearch")
const URL = 'js/prendas.json'
const prendas = []


function obtenerPrendas(){
    fetch(URL)
    .then(response => response.json())
    .then(data => prendas.push(...data))
    .then(() => cargarProductos(prendas))
    .catch(error => console.log(error))
}
obtenerPrendas()

function actualizarTotalPrendas() {
    totalCarrito.textContent = carritoProductos.length
}
actualizarTotalPrendas()

function activarClickEnBotones() {
    
    const botones = document.querySelectorAll("button")
    if (botones !== null) {
        for (const boton of botones) {
            boton.addEventListener("click", (e) => {
                let producto = prendas.find((prenda) => prenda.codigo === parseInt(e.target.id))
                carritoProductos.push(producto)
                actualizarTotalPrendas()
                guardarCarrito()
            })
        }
        
    }
}

function cargarProductos(array) {
    container.innerHTML = ""
    array.forEach((prenda) => { container.innerHTML += retornarCardHTML(prenda) })
    activarClickEnBotones()
}
//cargarProductos(prendas)

function filtrarProductos() {
    let resultado = prendas.filter((prenda)=> prenda.tipo.toLowerCase().includes(inputBuscar.value.toLowerCase().trim()))
        if (resultado !== []) {
            cargarProductos(resultado)
        }
}
inputBuscar.addEventListener("search", filtrarProductos)