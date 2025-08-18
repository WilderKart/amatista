// js/products.js
document.addEventListener('DOMContentLoaded', function() {
    const products = [
        {
            id: 1,
            name: "Manilla de perlas doradas",
            price: 120000,
            image: "https://placehold.co/400x400/DEC9F0/2a2a2d?text=Manilla+Premium",
            description: "Elegante manilla con perlas naturales y acabado en oro de 18k. Perfecta para ocasiones especiales y uso diario."
        },
        {
            id: 2,
            name: "Collar minimalista de oro",
            price: 150000,
            image: "https://placehold.co/400x400/D8BEE5/2a2a2d?text=Collar+Elegante",
            description: "Collar delicado con cadena fina de oro y colgante minimalista. Diseño atemporal que complementa cualquier outfit."
        },
        {
            id: 3,
            name: "Anillo de circonia negra",
            price: 85000,
            image: "https://placehold.co/400x400/F2CAEA/2a2a2d?text=Anillo+Moderno",
            description: "Anillo moderno con circonia cúbica negra y montura en plata. Pieza audaz que combina perfectamente con looks urbanos."
        },
        {
            id: 4,
            name: "Cadena larga eslabón fino",
            price: 110000,
            image: "https://placehold.co/400x400/DEC9F0/2a2a2d?text=Cadena+Fina",
            description: "Cadena larga con eslabones finos de oro. Versátil y elegante, ideal para capas o uso individual."
        },
        {
            id: 5,
            name: "Pulsera de acero pulido",
            price: 95000,
            image: "https://placehold.co/400x400/D8BEE5/2a2a2d?text=Pulsera+Brillante",
            description: "Pulsera de acero quirúrgico con acabado pulido espejo. Duradera, hipoalergénica y perfecta para el día a día."
        },
        {
            id: 6,
            name: "Aros geométricos dorados",
            price: 75000,
            image: "https://placehold.co/400x400/F2CAEA/2a2a2d?text=Aros+Dorados",
            description: "Aros circulares con diseño geométrico en oro. Modernos y sofisticados, realzan la belleza de tu rostro."
        }
    ];

    const productsContainer = document.getElementById('products-container');
    
    if (productsContainer) {
        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'col-12 col-sm-6 col-lg-4 col-xl-3';
            productCard.innerHTML = `
                <div class="product-card h-100" onclick="openProductModal(${product.id})">
                    <div class="position-relative">
                        <img src="${product.image}" alt="${product.name}" class="img-fluid w-100" style="border-radius: ${getComputedStyle(document.documentElement).getPropertyValue('--radius-lg')}">
                        <div class="position-absolute top-0 start-0 w-100 h-100 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-3"></div>
                    </div>
                    <div class="p-4">
                        <h3 class="h5 mb-2">${product.name}</h3>
                        <div class="d-flex align-items-center justify-content-between">
                            <span class="price fw-bold" style="font-size: 1.5rem;">$${product.price.toLocaleString()}</span>
                            <span class="badge bg-primary bg-gradient text-white px-3 py-2" style="border-radius: 50px;">Nuevo</span>
                        </div>
                    </div>
                </div>
            `;
            productsContainer.appendChild(productCard);
        });
    }
});

function openProductModal(productId) {
    const products = [
        {
            id: 1,
            name: "Manilla de perlas doradas",
            price: 120000,
            image: "https://placehold.co/400x400/DEC9F0/2a2a2d?text=Manilla+Premium",
            description: "Elegante manilla con perlas naturales y acabado en oro de 18k. Perfecta para ocasiones especiales y uso diario."
        },
        {
            id: 2,
            name: "Collar minimalista de oro",
            price: 150000,
            image: "https://placehold.co/400x400/D8BEE5/2a2a2d?text=Collar+Elegante",
            description: "Collar delicado con cadena fina de oro y colgante minimalista. Diseño atemporal que complementa cualquier outfit."
        },
        {
            id: 3,
            name: "Anillo de circonia negra",
            price: 85000,
            image: "https://placehold.co/400x400/F2CAEA/2a2a2d?text=Anillo+Moderno",
            description: "Anillo moderno con circonia cúbica negra y montura en plata. Pieza audaz que combina perfectamente con looks urbanos."
        },
        {
            id: 4,
            name: "Cadena larga eslabón fino",
            price: 110000,
            image: "https://placehold.co/400x400/DEC9F0/2a2a2d?text=Cadena+Fina",
            description: "Cadena larga con eslabones finos de oro. Versátil y elegante, ideal para capas o uso individual."
        },
        {
            id: 5,
            name: "Pulsera de acero pulido",
            price: 95000,
            image: "https://placehold.co/400x400/D8BEE5/2a2a2d?text=Pulsera+Brillante",
            description: "Pulsera de acero quirúrgico con acabado pulido espejo. Duradera, hipoalergénica y perfecta para el día a día."
        },
        {
            id: 6,
            name: "Aros geométricos dorados",
            price: 75000,
            image: "https://placehold.co/400x400/F2CAEA/2a2a2d?text=Aros+Dorados",
            description: "Aros circulares con diseño geométrico en oro. Modernos y sofisticados, realzan la belleza de tu rostro."
        }
    ];

    const product = products.find(p => p.id === productId);
    if (product) {
        document.getElementById('productModalLabel').textContent = product.name;
        document.getElementById('modal-product-name').textContent = product.name;
        document.getElementById('modal-product-description').textContent = product.description;
        document.getElementById('modal-product-price').textContent = `$${product.price.toLocaleString()}`;
        document.getElementById('modal-product-image').src = product.image;
        
        const modal = new bootstrap.Modal(document.getElementById('productModal'));
        modal.show();
    }
}