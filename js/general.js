const carritoProductos = recuperarCarrito() || []

function retornarCardHTML(prenda) {
    return `<div class="div-card">
                <div class="prenda"><p>${prenda.tipo}</p></div>
                <div class="importe"><p>$ ${prenda.precio}</p></div>
                <div class="comprar"><button id="${prenda.codigo}">add</button></div>
            </div>`
}

function armarTablaHTML(prenda){
    return `<tr>
                <td> ${prenda.tipo}</td>
                <td> ${prenda.precio} </td>
                <td><button class = "button-eliminar" id=" ${prenda.codigo} ">x</button></td>
            </tr>`
}

function guardarCarrito(){
    localStorage.setItem("carritoPrendas", JSON.stringify(carritoProductos))

}


function recuperarCarrito(){
    return JSON.parse(localStorage.getItem("carritoPrendas"))
}    
