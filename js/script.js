// Datos de ejemplo para los productos
const productos = [
	{
		id: 1,
		nombre: "Manzanas Orgánicas",
		precio: 2.99,
		imagen: "img/1.jpeg",
		categoria: "frutas",
		descripcion: "Manzanas orgánicas frescas cultivadas sin pesticidas. Perfectas para comer directamente o para preparar postres saludables."
	},
	{
		id: 2,
		nombre: "Zanahorias Frescas",
		precio: 1.49,
		imagen: "img/2.jpg",
		categoria: "verduras",
		descripcion: "Zanahorias orgánicas recién cosechadas. Ricas en vitamina A y perfectas para ensaladas o jugos."
	},
	{
		id: 3,
		nombre: "Arroz Integral",
		precio: 3.99,
		imagen: "img/3.jpg",
		categoria: "granos",
		descripcion: "Arroz integral orgánico de grano largo. Rico en fibra y nutrientes esenciales."
	},
	{
		id: 4,
		nombre: "Plátanos Orgánicos",
		precio: 1.99,
		imagen: "img/4.jpg",
		categoria: "frutas",
		descripcion: "Plátanos orgánicos madurados naturalmente. Fuente excelente de potasio y energía."
	},
	{
		id: 5,
		nombre: "Espinacas Frescas",
		precio: 2.49,
		imagen: "img/5.jpg",
		categoria: "verduras",
		descripcion: "Espinacas orgánicas frescas. Ricas en hierro y vitaminas, perfectas para ensaladas y salteados."
	},
	{
		id: 6,
		nombre: "Lentejas Orgánicas",
		precio: 2.79,
		imagen: "img/6.jpg",
		categoria: "granos",
		descripcion: "Lentejas orgánicas de alta calidad. Excelente fuente de proteínas y fibra."
	},
	{
		id: 7,
		nombre: "Fresas Orgánicas",
		precio: 4.99,
		imagen: "img/7.png",
		categoria: "frutas",
		descripcion: "Fresas orgánicas dulces y jugosas. Perfectas para postres o para comer directamente."
	},
	{
		id: 8,
		nombre: "Brócoli Fresco",
		precio: 2.29,
		imagen: "img/8.jpg",
		categoria: "verduras",
		descripcion: "Brócoli orgánico fresco. Rico en vitamina C y antioxidantes."
	},
	{
		id: 9,
		nombre: "Quinoa Orgánica",
		precio: 5.99,
		imagen: "img/9.jpg",
		categoria: "granos",
		descripcion: "Quinoa orgánica de alta calidad. Superalimento rico en proteínas y todos los aminoácidos esenciales."
	}
];

// Función para cargar los productos en la página
function cargarProductos(productosArray) {
	const productsList = document.getElementById('productsList');

	// Si no estamos en la página de productos, salimos de la función
	if (!productsList) return;

	// Limpiamos el contenedor
	productsList.innerHTML = '';

	// Si no hay productos que mostrar
	if (productosArray.length === 0) {
		productsList.innerHTML = '<div class="col-12 text-center"><p>No se encontraron productos que coincidan con tu búsqueda.</p></div>';
		return;
	}

	// Agregamos cada producto al contenedor
	productosArray.forEach(producto => {
const productoHTML = `
    <div class="col-md-4 mb-4 d-flex">
        <div class="card product-card flex-grow-1" data-id="${producto.id}">
            <div class="image-container">
                <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
            </div>
            <div class="card-body d-flex flex-column">
                <h5 class="card-title mb-2">${producto.nombre}</h5> <!-- Added mb-2 -->
                <p class="product-price mt-auto mb-2">S/ ${producto.precio.toFixed(2)}</p> <!-- Added mb-2 -->
                <button class="btn btn-outline-success btn-sm view-product mt-auto">Ver detalles</button>
            </div>
        </div>
    </div>
`;

		productsList.innerHTML += productoHTML;
	});

	// Agregamos eventos a los botones de ver detalles
	document.querySelectorAll('.view-product').forEach(button => {
		button.addEventListener('click', function () {
			const productId = this.closest('.product-card').dataset.id;
			window.location.href = `/productos/${productId}.html`;
			// mostrarDetallesProducto(parseInt(productId));
		});
	});
}



// Función para validar el formulario de contacto
function validarFormularioContacto(event) {
	const form = document.getElementById('contactForm');

	if (!form) return;

	if (!form.checkValidity()) {
		event.preventDefault();
		event.stopPropagation();

		// Mostramos los mensajes de validación
		Array.from(form.elements).forEach(input => {
			if (input.checkValidity() === false) {
				input.classList.add('is-invalid');
			} else {
				input.classList.remove('is-invalid');
				input.classList.add('is-valid');
			}
		});
	} else {
		// Si el formulario es válido, mostramos un mensaje de éxito
		event.preventDefault();
		alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
		form.reset();
		Array.from(form.elements).forEach(input => {
			input.classList.remove('is-valid');
		});
	}
}



// Inicializamos la página cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', function () {
	// Cargamos los productos si estamos en la página de productos
	if (document.getElementById('productsList')) {
		cargarProductos(productos);

	}

	// Agregamos evento al formulario de contacto
	const contactForm = document.getElementById('contactForm');
	if (contactForm) {
		contactForm.addEventListener('submit', validarFormularioContacto);
	}




});