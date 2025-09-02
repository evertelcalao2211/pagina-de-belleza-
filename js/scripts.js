
// Datos de productos
const products = [
    {
        name: "Crema Hidratante Premium",
        description: "Hidratación profunda con extractos naturales",
        price: "$45.99",
        image: "assets/imagenes/angie 1.jpg  "
    },
    {
        name: "Serum Anti-Edad",
        description: "Reduce visiblemente las líneas de expresión",
        price: "$62.50",
        image: "assets/imagenes/angie 2.jpg "
    },
    {
        name: "Kit de Maquillaje Completo",
        description: "Todo lo que necesitas para tu rutina beauty",
        price: "$89.99",
        image: " assets/imagenes/angie 3.jpg "
    }
];

// Función para renderizar productos
function renderProducts() {
    const productGrid = document.querySelector('.product-grid');
    
    if (!productGrid) return;
    
    let productsHTML = '';
    
    products.forEach(product => {
        productsHTML += `
            <div class="product-card">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <div class="product-price">${product.price}</div>
                    <a href="#!" class="btn-buy">Comprar Ahora</a>
                </div>
            </div>
        `;
    });
    
    productGrid.innerHTML = productsHTML;
}

// Inicializar cuando el documento esté listo
document.addEventListener('DOMContentLoaded', function() {
    renderProducts();
});




// TESTIMONIOS     ESTO DEBE ESTAR EN TU ARCHIVO js/scripts.js
const testimonials = [
    {
        name: "María González",
        text: "¡Increíble servicio! Mi landing page convierte mucho mejor ahora.",
        rating: 5
    },
    {
        name: "Carlos Rodríguez", 
        text: "Profesionales y rápidos. Mi negocio ya tiene presencia online.",
        rating: 5
    },
    {
        name: "Ana Martínez",
        text: "El mejor inversión para mi emprendimiento. Los recomiendo 100%.",
        rating: 5
    }

];


// FUNCIÓN PARA RENDERIZAR TESTIMONIOS
function renderTestimonials() {
    const container = document.querySelector('.testimonial-grid');
    if (!container) {
        console.error('No se encontró el contenedor de testimonios');
        return;
    }
    
    let testimonialsHTML = '';
    testimonials.forEach(testimonial => {
        testimonialsHTML += `
            <div class="testimonial-card">
                <p class="testimonial-text">"${testimonial.text}"</p>
                <p class="testimonial-author">- ${testimonial.name}</p>
            </div>
        `;
    });
    
    container.innerHTML = testimonialsHTML;
}


// AL FINAL DE TU js/scripts.js AGREGA:
document.addEventListener('DOMContentLoaded', function() {
    renderProducts();
    renderTestimonials();  // ¡ESTA LÍNEA ES CLAVE!
    console.log('Página cargada correctamente');
});


// Animación al scroll
function setupScrollAnimations() {
    const elements = document.querySelectorAll('.product-card, .testimonial-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(element => {
        element.classList.add('fade-in');
        observer.observe(element);
    });
}

// Ejecutar al cargar
document.addEventListener('DOMContentLoaded', function() {
    renderProducts();
    renderTestimonials();
    setupScrollAnimations(); // ¡Agregar esta línea!
});



// Validación de formulario
function setupFormValidation() {
    const form = document.querySelector('.contact-form');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        const emailInput = form.querySelector('input[type="email"]');
        const email = emailInput.value;
        
        if (!isValidEmail(email)) {
            e.preventDefault();
            alert('Por favor ingresa un email válido');
            emailInput.focus();
        }
    });
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Agregar al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    renderProducts();
    renderTestimonials();
    setupScrollAnimations();
    setupFormValidation(); // ¡Agregar esta línea!
});