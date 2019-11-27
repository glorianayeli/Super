const badgeTotalProductos = document.querySelector('#totalProductos');
const inputProductos = document.querySelector('input[name = "producto"]');
const lista = document.querySelector('.list-group');
const formulario = document.querySelector('form');

//let totalProductos = 0;

function AgregarProducto(event) {
    event.preventDefault(); //previene el refresh de la página por el submit

    let productoNombre = inputProductos.value.trim();//trim elimina los espacios antes y despues de la cadena
    if (productoNombre === '') {
        alert('Ingresa un nombre');
        return false;
    }

    let hmtl = `                
    <li class="list-group-item d-flex justify-content-between lh-condensed">
                    <div>
                        <h6 class="my-0">
                            ${productoNombre} 
                        </h6>
                    </div>
                    <div class="botones">
                        <button class="btn btn-sm btn-danger" data-onclick="EliminarProducto(this);">
                            <span class="material-icons">
                                warning
                            </span>
                        </button>
                        <button class="btn btn-sm btn-success" data-onclick="MarcarComprado(this);">
                            <span class="material-icons">
                                done_outline
                            </span>
                        </button>
                    </div>
    </li>`;
    lista.innerHTML += hmtl;
    //totalProductos += 1;
    ActualizarTotalProductos();
    inputProductos.value = '';
    AsignarEventosBotones();
    return false;
}
function ActualizarTotalProductos(){
    //badgeTotalProductos.innerHTML = totalProductos; 
    let productos = document.querySelectorAll('.list-group-item');
    badgeTotalProductos.textContent = productos.length;
}
function AsignarEventosBotones(){
    document.querySelectorAll('.btn-danger').forEach(item =>{
        item.addEventListener('click', EliminarProducto);
    });
    document.querySelectorAll('.btn-success').forEach(successButton =>{
        successButton.addEventListener('click', MarcarComprado);
    });
}
//funcion para cargar algo desde que el dom se carga
document.addEventListener('DOMContentLoaded', function(event){
    formulario.addEventListener('submit', AgregarProducto);
    AsignarEventosBotones();
})
function EliminarProducto(){
    this.closest('.list-group-item').remove();
    ActualizarTotalProductos();
}
function MarcarComprado(){
    let listItem = this.closest('.list-group-item');
    this.closest('.botones').textContent = "done";
    
    console.log(listItem);
    listItem.classList.add('bg-light');
    listItem.classList.add('text-success');
    
    /*let listItem = this.closest('.list-group-item');
    listItem.classList.add('bg-light');
    listItem.classList.add('text-success');

    let buttons = listItem.getElementsByTagName('button');
    Array.from(buttons).forEach(function(button){
        button.remove();
    });

    let contenderDone = listItem.getElementsByTagName('div')[1];
    contenderDone.innerHTML = 'Done';*/
    
    
}