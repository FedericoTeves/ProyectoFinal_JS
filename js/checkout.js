const tbody = document.querySelector("tbody")
const spanTotal = document.querySelector("span#importeTotal")
const confirmarCompra = document.querySelector("button#confirmarCompra")

function cargarCarrito(){
    if (carritoProductos.length > 0){
        tbody.innerHTML= ""
        carritoProductos.forEach((prenda) => { tbody.innerHTML += armarTablaHTML(prenda)})
        activarClickEnBotonesEliminar()
        spanTotal.innerText = "$ " + calcularTotalCarrito()
    }else{
        tbody.innerHTML = "No hay productos en el carrito"
    }
}
cargarCarrito()


function activarClickEnBotonesEliminar(){
    const botones = document.querySelectorAll("button.button-eliminar")
    if (botones !== null){
        for (boton of botones){
            boton.addEventListener("click", (e)=> {
                let indice = carritoProductos.findIndex(prenda => prenda.codigo === parseInt(e.target.id))
                    carritoProductos.splice(indice, 1)
                    guardarCarrito()
                    cargarCarrito()
            })
        }

    }
}

function calcularTotalCarrito(){
    let total = 0
    carritoProductos.forEach(prenda => total = total + prenda.precio)
    return total
}

confirmarCompra.addEventListener("click", ()=> {
    Swal.fire(
        'Muchas gracias por tu compra',
        'Se debitaran de tu billetera el importe de $  '+ calcularTotalCarrito(),
        
    )
    localStorage.removeItem("carritoPrendas")
    carritoProductos.length = 0
    spanTotal.innerText = "$ 0.00"
    cargarCarrito()
})