// Menú lateral
document.getElementById('menu-btn').addEventListener('click', function() {
    let menu = document.getElementById('menu');
    menu.style.right = menu.style.right === '0px' ? '-250px' : '0px';
});

// Cerrar menú al hacer clic en un enlace
document.querySelectorAll('#menu a').forEach(link => {
    link.addEventListener('click', function() {
        document.getElementById('menu').style.right = '-250px';
    });
});

// Carrito de compras
let carrito = [];
const contadorCarrito = document.getElementById('contador-carrito');
const listaCarrito = document.getElementById('lista-carrito');

document.querySelectorAll('.comprar').forEach(boton => {
    boton.addEventListener('click', function() {
        let producto = this.parentElement;
        let nombre = producto.getAttribute('data-nombre');
        let precio = producto.getAttribute('data-precio');

        carrito.push({ nombre, precio });
        actualizarCarrito();
    });
});

function actualizarCarrito() {
    listaCarrito.innerHTML = "";
    carrito.forEach((producto, index) => {
        let li = document.createElement('li');
        li.textContent = `${producto.nombre} - $${producto.precio}`;
        let botonEliminar = document.createElement('button');
        botonEliminar.textContent = "❌";
        botonEliminar.addEventListener('click', function() {
            carrito.splice(index, 1);
            actualizarCarrito();
        });
        li.appendChild(botonEliminar);
        listaCarrito.appendChild(li);
    });

    contadorCarrito.textContent = carrito.length;
}

// Vaciar carrito
document.getElementById('vaciar-carrito').addEventListener('click', function() {
    carrito = [];
    actualizarCarrito();
});

