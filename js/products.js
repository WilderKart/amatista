// js/products.js
document.addEventListener('DOMContentLoaded', function() {
    // Product data by category
    const products = {
        manillas: [
            {
                id: 1,
                name: "Manilla de perlas doradas",
                price: 120000,
                originalPrice: 150000,
                image: "./asset/images/manilla1 (1).jpg",
                description: "Elegante manilla con perlas naturales y acabado en oro de 18k. Perfecta para ocasiones especiales y uso diario.",
                stock: "En stock",
                features: [
                    "Perlas naturales AAA",
                    "Acabado en oro de 18k",
                    "Cierre de seguridad",
                    "Hecha a mano en Cali"
                ],
                variants: ["Oro", "Plata", "Cobre"],
                category: "manillas"
            },
            {
                id: 2,
                name: "Manilla de circonia negra",
                price: 95000,
                image: "./asset/images/manilla1 (2).jpg",
                description: "Manilla moderna con circonia cúbica negra y montura en plata. Diseño audaz que combina perfectamente con looks urbanos.",
                stock: "En stock",
                features: [
                    "Circonia cúbica negra",
                    "Montura en plata",
                    "Ajustable",
                    "Hipoalergénica"
                ],
                variants: ["Negro", "Blanco", "Azul"],
                category: "manillas"
            },
            {
                id: 3,
                name: "Manilla minimalista de oro",
                price: 110000,
                originalPrice: 140000,
                image: "./asset/images/manilla1 (3).jpg",
                description: "Manilla delicada con diseño minimalista y acabado en oro. Diseño atemporal que complementa cualquier outfit.",
                stock: "Últimas 3 unidades",
                features: [
                    "Diseño minimalista",
                    "Acabado en oro de 18k",
                    "Peso ligero",
                    "Versátil"
                ],
                variants: ["Oro", "Plata"],
                category: "manillas"
            },
            {
                id: 4,
                name: "Manilla de acero pulido",
                price: 85000,
                image: "./asset/images/manilla1 (4).jpg",
                description: "Manilla de acero quirúrgico con acabado pulido espejo. Duradera, hipoalergénica y perfecta para el día a día.",
                stock: "En stock",
                features: [
                    "Acero quirúrgico",
                    "Acabado pulido espejo",
                    "Resistente al agua",
                    "Duradera"
                ],
                variants: ["Plateado", "Dorado"],
                category: "manillas"
            },
            // Additional products (12 more)
            ...Array(12).fill().map((_, index) => ({
                id: index + 5,
                name: `Manilla Premium ${index + 1}`,
                price: 90000 + Math.floor(Math.random() * 40000),
                image: `./asset/images/manilla5.jpg?${['DEC9F0', 'D8BEE5', 'F2CAEA'][Math.floor(Math.random() * 3)]}/2a2a2d?text=Manilla+${index + 1}`,
                description: "Manilla de diseño exclusivo con acabado premium. Perfecta para realzar tu estilo personal.",
                stock: Math.random() > 0.3 ? "En stock" : "Últimas unidades",
                features: [
                    "Diseño exclusivo",
                    "Acabado premium",
                    "Hecha a mano",
                    "Estilo único"
                ],
                variants: ["Oro", "Plata", "Cobre"],
                category: "manillas"
            }))
        ],
        collares: [
            {
                id: 17,
                name: "Collar de amatista natural",
                price: 180000,
                originalPrice: 220000,
                image: "https://placehold.co/400x400/DEC9F0/2a2a2d?text=Collar+Amatista",
                description: "Collar con piedra de amatista natural y cadena de oro de 18k. La piedra se cree que trae calma y equilibrio.",
                stock: "En stock",
                features: [
                    "Piedra de amatista natural",
                    "Cadena de oro de 18k",
                    "Colgante ajustable",
                    "Energía positiva"
                ],
                variants: ["Amatista", "Ágata", "Ónix"],
                category: "collares"
            },
            {
                id: 18,
                name: "Collar minimalista de oro",
                price: 150000,
                image: "https://placehold.co/400x400/D8BEE5/2a2a2d?text=Collar+Elegante",
                description: "Collar delicado con cadena fina de oro y colgante minimalista. Diseño atemporal que complementa cualquier outfit.",
                stock: "En stock",
                features: [
                    "Cadena fina de oro",
                    "Colgante minimalista",
                    "Diseño atemporal",
                    "Versátil"
                ],
                variants: ["Oro", "Plata", "Cobre"],
                category: "collares"
            },
            {
                id: 19,
                name: "Collar de doble cadena",
                price: 165000,
                originalPrice: 200000,
                image: "https://placehold.co/400x400/F2CAEA/2a2a2d?text=Collar+Doble",
                description: "Collar con doble cadena de oro y colgante circular. Diseño moderno que combina perfectamente con looks urbanos.",
                stock: "Últimas 5 unidades",
                features: [
                    "Doble cadena de oro",
                    "Colgante circular",
                    "Diseño moderno",
                    "Ajustable"
                ],
                variants: ["Oro", "Plata"],
                category: "collares"
            },
            {
                id: 20,
                name: "Collar de perlas clásico",
                price: 175000,
                image: "https://placehold.co/400x400/DEC9F0/2a2a2d?text=Collar+Perlas",
                description: "Collar clásico con perlas naturales y cierre de oro. Elegancia atemporal para ocasiones especiales.",
                stock: "En stock",
                features: [
                    "Perlas naturales AAA",
                    "Cierre de oro",
                    "Clásico y elegante",
                    "Hecho a mano"
                ],
                variants: ["Blanco", "Rosa", "Negro"],
                category: "collares"
            },
            // Additional products (12 more)
            ...Array(12).fill().map((_, index) => ({
                id: index + 21,
                name: `Collar Premium ${index + 1}`,
                price: 120000 + Math.floor(Math.random() * 80000),
                image: `https://placehold.co/400x400/${['DEC9F0', 'D8BEE5', 'F2CAEA'][Math.floor(Math.random() * 3)]}/2a2a2d?text=Collar+${index + 1}`,
                description: "Collar de diseño exclusivo con acabado premium. Perfecto para realzar tu estilo personal.",
                stock: Math.random() > 0.3 ? "En stock" : "Últimas unidades",
                features: [
                    "Diseño exclusivo",
                    "Acabado premium",
                    "Hecho a mano",
                    "Estilo único"
                ],
                variants: ["Oro", "Plata", "Cobre"],
                category: "collares"
            }))
        ],
        anillos: [
            {
                id: 33,
                name: "Anillo de circonia negra",
                price: 85000,
                originalPrice: 110000,
                image: "https://placehold.co/400x400/DEC9F0/2a2a2d?text=Anillo+Moderno",
                description: "Anillo moderno con circonia cúbica negra y montura en plata. Pieza audaz que combina perfectamente con looks urbanos.",
                stock: "En stock",
                features: [
                    "Circonia cúbica negra",
                    "Montura en plata",
                    "Tallas disponibles: 4-10",
                    "Hipoalergénico"
                ],
                variants: ["Negro", "Blanco", "Azul"],
                category: "anillos"
            },
            {
                id: 34,
                name: "Anillo minimalista de oro",
                price: 95000,
                image: "https://placehold.co/400x400/D8BEE5/2a2a2d?text=Anillo+Minimalista",
                description: "Anillo delicado con diseño minimalista y acabado en oro. Diseño atemporal que complementa cualquier outfit.",
                stock: "En stock",
                features: [
                    "Diseño minimalista",
                    "Acabado en oro de 18k",
                    "Tallas disponibles: 3-9",
                    "Versátil"
                ],
                variants: ["Oro", "Plata", "Cobre"],
                category: "anillos"
            },
            {
                id: 35,
                name: "Anillo de doble banda",
                price: 110000,
                originalPrice: 140000,
                image: "https://placehold.co/400x400/F2CAEA/2a2a2d?text=Anillo+Doble",
                description: "Anillo con doble banda de oro entrelazada. Diseño moderno que combina perfectamente con looks urbanos.",
                stock: "Últimas 4 unidades",
                features: [
                    "Doble banda de oro",
                    "Diseño entrelazado",
                    "Tallas disponibles: 4-10",
                    "Ajustable"
                ],
                variants: ["Oro", "Plata"],
                category: "anillos"
            },
            {
                id: 36,
                name: "Anillo de perlas",
                price: 120000,
                image: "https://placehold.co/400x400/DEC9F0/2a2a2d?text=Anillo+Perlas",
                description: "Anillo clásico con perla natural y montura de oro. Elegancia atemporal para ocasiones especiales.",
                stock: "En stock",
                features: [
                    "Perla natural AAA",
                    "Montura de oro",
                    "Tallas disponibles: 3-9",
                    "Hecho a mano"
                ],
                variants: ["Blanco", "Rosa", "Negro"],
                category: "anillos"
            },
            // Additional products (12 more)
            ...Array(12).fill().map((_, index) => ({
                id: index + 37,
                name: `Anillo Premium ${index + 1}`,
                price: 70000 + Math.floor(Math.random() * 60000),
                image: `https://placehold.co/400x400/${['DEC9F0', 'D8BEE5', 'F2CAEA'][Math.floor(Math.random() * 3)]}/2a2a2d?text=Anillo+${index + 1}`,
                description: "Anillo de diseño exclusivo con acabado premium. Perfecto para realzar tu estilo personal.",
                stock: Math.random() > 0.3 ? "En stock" : "Últimas unidades",
                features: [
                    "Diseño exclusivo",
                    "Acabado premium",
                    "Hecho a mano",
                    "Estilo único"
                ],
                variants: ["Oro", "Plata", "Cobre"],
                category: "anillos"
            }))
        ],
        cadenas: [
            {
                id: 49,
                name: "Cadena larga eslabón fino",
                price: 110000,
                originalPrice: 140000,
                image: "https://placehold.co/400x400/DEC9F0/2a2a2d?text=Cadena+Fina",
                description: "Cadena larga con eslabones finos de oro. Versátil y elegante, ideal para capas o uso individual.",
                stock: "En stock",
                features: [
                    "Eslabones finos de oro",
                    "Longitud ajustable",
                    "Versátil",
                    "Diseño elegante"
                ],
                variants: ["Oro", "Plata", "Cobre"],
                category: "cadenas"
            },
            {
                id: 50,
                name: "Cadena de doble eslabón",
                price: 130000,
                image: "https://placehold.co/400x400/D8BEE5/2a2a2d?text=Cadena+Doble",
                description: "Cadena con doble eslabón entrelazado de oro. Diseño moderno que combina perfectamente con looks urbanos.",
                stock: "En stock",
                features: [
                    "Doble eslabón entrelazado",
                    "Acabado en oro",
                    "Resistente",
                    "Ajustable"
                ],
                variants: ["Oro", "Plata"],
                category: "cadenas"
            },
            {
                id: 51,
                name: "Cadena minimalista corta",
                price: 95000,
                originalPrice: 120000,
                image: "https://placehold.co/400x400/F2CAEA/2a2a2d?text=Cadena+Minimalista",
                description: "Cadena corta con diseño minimalista y acabado en oro. Diseño atemporal que complementa cualquier outfit.",
                stock: "Últimas 6 unidades",
                features: [
                    "Diseño minimalista",
                    "Acabado en oro",
                    "Longitud corta",
                    "Versátil"
                ],
                variants: ["Oro", "Plata", "Cobre"],
                category: "cadenas"
            },
            {
                id: 52,
                name: "Cadena de acero pulido",
                price: 85000,
                image: "https://placehold.co/400x400/DEC9F0/2a2a2d?text=Cadena+Acero",
                description: "Cadena de acero quirúrgico con acabado pulido espejo. Duradera, hipoalergénica y perfecta para el día a día.",
                stock: "En stock",
                features: [
                    "Acero quirúrgico",
                    "Acabado pulido espejo",
                    "Resistente al agua",
                    "Duradera"
                ],
                variants: ["Plateado", "Dorado"],
                category: "cadenas"
            },
            // Additional products (12 more)
            ...Array(12).fill().map((_, index) => ({
                id: index + 53,
                name: `Cadena Premium ${index + 1}`,
                price: 80000 + Math.floor(Math.random() * 60000),
                image: `https://placehold.co/400x400/${['DEC9F0', 'D8BEE5', 'F2CAEA'][Math.floor(Math.random() * 3)]}/2a2a2d?text=Cadena+${index + 1}`,
                description: "Cadena de diseño exclusivo con acabado premium. Perfecta para realzar tu estilo personal.",
                stock: Math.random() > 0.3 ? "En stock" : "Últimas unidades",
                features: [
                    "Diseño exclusivo",
                    "Acabado premium",
                    "Hecha a mano",
                    "Estilo único"
                ],
                variants: ["Oro", "Plata", "Cobre"],
                category: "cadenas"
            }))
        ],
        pulseras: [
            {
                id: 65,
                name: "Pulsera de acero pulido",
                price: 95000,
                originalPrice: 120000,
                image: "https://placehold.co/400x400/DEC9F0/2a2a2d?text=Pulsera+Brillante",
                description: "Pulsera de acero quirúrgico con acabado pulido espejo. Duradera, hipoalergénica y perfecta para el día a día.",
                stock: "En stock",
                features: [
                    "Acero quirúrgico",
                    "Acabado pulido espejo",
                    "Resistente al agua",
                    "Duradera"
                ],
                variants: ["Plateado", "Dorado"],
                category: "pulseras"
            },
            {
                id: 66,
                name: "Pulsera de perlas",
                price: 110000,
                image: "https://placehold.co/400x400/D8BEE5/2a2a2d?text=Pulsera+Perlas",
                description: "Pulsera clásica con perlas naturales y cierre de oro. Elegancia atemporal para ocasiones especiales.",
                stock: "En stock",
                features: [
                    "Perlas naturales AAA",
                    "Cierre de oro",
                    "Clásica y elegante",
                    "Hecha a mano"
                ],
                variants: ["Blanco", "Rosa", "Negro"],
                category: "pulseras"
            },
            {
                id: 67,
                name: "Pulsera de doble cadena",
                price: 125000,
                originalPrice: 150000,
                image: "https://placehold.co/400x400/F2CAEA/2a2a2d?text=Pulsera+Doble",
                description: "Pulsera con doble cadena de oro entrelazada. Diseño moderno que combina perfectamente con looks urbanos.",
                stock: "Últimas 3 unidades",
                features: [
                    "Doble cadena de oro",
                    "Diseño entrelazado",
                    "Ajustable",
                    "Elegante"
                ],
                variants: ["Oro", "Plata"],
                category: "pulseras"
            },
            {
                id: 68,
                name: "Pulsera minimalista",
                price: 85000,
                image: "https://placehold.co/400x400/DEC9F0/2a2a2d?text=Pulsera+Minimalista",
                description: "Pulsera delicada con diseño minimalista y acabado en oro. Diseño atemporal que complementa cualquier outfit.",
                stock: "En stock",
                features: [
                    "Diseño minimalista",
                    "Acabado en oro",
                    "Peso ligero",
                    "Versátil"
                ],
                variants: ["Oro", "Plata", "Cobre"],
                category: "pulseras"
            },
            // Additional products (12 more)
            ...Array(12).fill().map((_, index) => ({
                id: index + 69,
                name: `Pulsera Premium ${index + 1}`,
                price: 70000 + Math.floor(Math.random() * 60000),
                image: `https://placehold.co/400x400/${['DEC9F0', 'D8BEE5', 'F2CAEA'][Math.floor(Math.random() * 3)]}/2a2a2d?text=Pulsera+${index + 1}`,
                description: "Pulsera de diseño exclusivo con acabado premium. Perfecta para realzar tu estilo personal.",
                stock: Math.random() > 0.3 ? "En stock" : "Últimas unidades",
                features: [
                    "Diseño exclusivo",
                    "Acabado premium",
                    "Hecha a mano",
                    "Estilo único"
                ],
                variants: ["Oro", "Plata", "Cobre"],
                category: "pulseras"
            }))
        ],
        aretes: [
            {
                id: 81,
                name: "Aros geométricos dorados",
                price: 75000,
                originalPrice: 95000,
                image: "https://placehold.co/400x400/F2CAEA/2a2a2d?text=Aros+Dorados",
                description: "Aros circulares con diseño geométrico en oro. Modernos y sofisticados, realzan la belleza de tu rostro.",
                stock: "En stock",
                features: [
                    "Diseño geométrico",
                    "Acabado en oro",
                    "Tamaño: 4cm diámetro",
                    "Hipoalergénicos"
                ],
                variants: ["Oro", "Plata", "Cobre"],
                category: "aretes"
            },
            {
                id: 82,
                name: "Aros de perlas",
                price: 85000,
                image: "https://placehold.co/400x400/DEC9F0/2a2a2d?text=Aros+Perlas",
                description: "Aros clásicos con perlas naturales y montura de oro. Elegancia atemporal para ocasiones especiales.",
                stock: "En stock",
                features: [
                    "Perlas naturales AAA",
                    "Montura de oro",
                    "Clásicos y elegantes",
                    "Hechos a mano"
                ],
                variants: ["Blanco", "Rosa", "Negro"],
                category: "aretes"
            },
            {
                id: 83,
                name: "Aros de circonia",
                price: 95000,
                originalPrice: 120000,
                image: "https://placehold.co/400x400/D8BEE5/2a2a2d?text=Aros+Circonia",
                description: "Aros con circonia cúbica y montura en plata. Brillantes y elegantes, perfectos para cualquier ocasión.",
                stock: "Últimas 4 unidades",
                features: [
                    "Circonia cúbica",
                    "Montura en plata",
                    "Tamaño: 3.5cm diámetro",
                    "Brillantes"
                ],
                variants: ["Transparente", "Negro", "Azul"],
                category: "aretes"
            },
            {
                id: 84,
                name: "Aros minimalistas",
                price: 65000,
                image: "https://placehold.co/400x400/F2CAEA/2a2a2d?text=Aros+Minimalistas",
                description: "Aros delicados con diseño minimalista y acabado en oro. Diseño atemporal que complementa cualquier outfit.",
                stock: "En stock",
                features: [
                    "Diseño minimalista",
                    "Acabado en oro",
                    "Tamaño pequeño",
                    "Versátiles"
                ],
                variants: ["Oro", "Plata", "Cobre"],
                category: "aretes"
            },
            // Additional products (12 more)
            ...Array(12).fill().map((_, index) => ({
                id: index + 85,
                name: `Aros Premium ${index + 1}`,
                price: 60000 + Math.floor(Math.random() * 50000),
                image: `https://placehold.co/400x400/${['DEC9F0', 'D8BEE5', 'F2CAEA'][Math.floor(Math.random() * 3)]}/2a2a2d?text=Aros+${index + 1}`,
                description: "Aros de diseño exclusivo con acabado premium. Perfectos para realzar tu estilo personal.",
                stock: Math.random() > 0.3 ? "En stock" : "Últimas unidades",
                features: [
                    "Diseño exclusivo",
                    "Acabado premium",
                    "Hechos a mano",
                    "Estilo único"
                ],
                variants: ["Oro", "Plata", "Cobre"],
                category: "aretes"
            }))
        ]
    };

    // Generate product cards for each category
    Object.keys(products).forEach(category => {
        const container = document.getElementById(`${category}-container`);
        if (container) {
            products[category].forEach(product => {
                const productCard = document.createElement('div');
                productCard.className = 'col-12 col-sm-6 col-lg-4 col-xl-3';
                productCard.innerHTML = `
                    <div class="product-card h-100" onclick="openProductModal(${product.id}, '${category}')">
                        <div class="position-relative">
                            <img src="${product.image}" alt="${product.name}" class="img-fluid w-100" style="border-radius: ${getComputedStyle(document.documentElement).getPropertyValue('--radius-lg')}">
                            <div class="position-absolute top-0 start-0 w-100 h-100 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-3"></div>
                            ${product.originalPrice ? `<span class="position-absolute top-2 start-2 badge bg-danger">-${Math.round((1 - product.price/product.originalPrice) * 100)}%</span>` : ''}
                        </div>
                        <div class="p-4">
                            <h3 class="h5 mb-2">${product.name}</h3>
                            <div class="d-flex align-items-center">
                                <span class="price fw-bold" style="font-size: 1.5rem;">$${product.price.toLocaleString()}</span>
                                ${product.originalPrice ? `<span class="text-muted ms-2 text-decoration-line-through">$${product.originalPrice.toLocaleString()}</span>` : ''}
                            </div>
                            <div class="d-flex align-items-center mt-2">
                                <i class="fas fa-check-circle text-success me-1"></i>
                                <small class="text-success">${product.stock}</small>
                            </div>
                            <div class="rating mt-2">
                                <div class="stars">
                                    <i class="fas fa-star text-warning"></i>
                                    <i class="fas fa-star text-warning"></i>
                                    <i class="fas fa-star text-warning"></i>
                                    <i class="fas fa-star text-warning"></i>
                                    <i class="fas fa-star-half-alt text-warning"></i>
                                </div>
                                <span class="text-muted small">(4.5)</span>
                            </div>
                            <button class="btn btn-dark btn-sm w-100 py-2 mt-3">
                                <i class="fas fa-info-circle me-2"></i>Ver más
                            </button>
                        </div>
                    </div>
                `;
                container.appendChild(productCard);
            });
        }
    });

    // Initialize first tab
    const triggerFirstTab = document.querySelector('#productTabs button[data-bs-target="#manillas"]');
    bootstrap.Tab.getInstance(triggerFirstTab).show();
});

function openProductModal(productId, category) {
    const products = {
        manillas: [
            {
                id: 1,
                name: "Manilla de perlas doradas",
                price: 120000,
                originalPrice: 150000,
                image: "https://placehold.co/400x400/DEC9F0/2a2a2d?text=Manilla+Premium",
                description: "Elegante manilla con perlas naturales y acabado en oro de 18k. Perfecta para ocasiones especiales y uso diario.",
                stock: "En stock",
                features: [
                    "Perlas naturales AAA",
                    "Acabado en oro de 18k",
                    "Cierre de seguridad",
                    "Hecha a mano en Cali"
                ],
                variants: ["Oro", "Plata", "Cobre"],
                category: "manillas"
            },
            {
                id: 2,
                name: "Manilla de circonia negra",
                price: 95000,
                image: "https://placehold.co/400x400/D8BEE5/2a2a2d?text=Manilla+Circonia",
                description: "Manilla moderna con circonia cúbica negra y montura en plata. Diseño audaz que combina perfectamente con looks urbanos.",
                stock: "En stock",
                features: [
                    "Circonia cúbica negra",
                    "Montura en plata",
                    "Ajustable",
                    "Hipoalergénica"
                ],
                variants: ["Negro", "Blanco", "Azul"],
                category: "manillas"
            },
            {
                id: 3,
                name: "Manilla minimalista de oro",
                price: 110000,
                originalPrice: 140000,
                image: "https://placehold.co/400x400/F2CAEA/2a2a2d?text=Manilla+Minimalista",
                description: "Manilla delicada con diseño minimalista y acabado en oro. Diseño atemporal que complementa cualquier outfit.",
                stock: "Últimas 3 unidades",
                features: [
                    "Diseño minimalista",
                    "Acabado en oro de 18k",
                    "Peso ligero",
                    "Versátil"
                ],
                variants: ["Oro", "Plata"],
                category: "manillas"
            },
            {
                id: 4,
                name: "Manilla de acero pulido",
                price: 85000,
                image: "https://placehold.co/400x400/DEC9F0/2a2a2d?text=Manilla+Acero",
                description: "Manilla de acero quirúrgico con acabado pulido espejo. Duradera, hipoalergénica y perfecta para el día a día.",
                stock: "En stock",
                features: [
                    "Acero quirúrgico",
                    "Acabado pulido espejo",
                    "Resistente al agua",
                    "Duradera"
                ],
                variants: ["Plateado", "Dorado"],
                category: "manillas"
            },
            // Additional products (12 more)
            ...Array(12).fill().map((_, index) => ({
                id: index + 5,
                name: `Manilla Premium ${index + 1}`,
                price: 90000 + Math.floor(Math.random() * 40000),
                image: `https://placehold.co/400x400/${['DEC9F0', 'D8BEE5', 'F2CAEA'][Math.floor(Math.random() * 3)]}/2a2a2d?text=Manilla+${index + 1}`,
                description: "Manilla de diseño exclusivo con acabado premium. Perfecta para realzar tu estilo personal.",
                stock: Math.random() > 0.3 ? "En stock" : "Últimas unidades",
                features: [
                    "Diseño exclusivo",
                    "Acabado premium",
                    "Hecha a mano",
                    "Estilo único"
                ],
                variants: ["Oro", "Plata", "Cobre"],
                category: "manillas"
            }))
        ],
        collares: [
            {
                id: 17,
                name: "Collar de amatista natural",
                price: 180000,
                originalPrice: 220000,
                image: "https://placehold.co/400x400/DEC9F0/2a2a2d?text=Collar+Amatista",
                description: "Collar con piedra de amatista natural y cadena de oro de 18k. La piedra se cree que trae calma y equilibrio.",
                stock: "En stock",
                features: [
                    "Piedra de amatista natural",
                    "Cadena de oro de 18k",
                    "Colgante ajustable",
                    "Energía positiva"
                ],
                variants: ["Amatista", "Ágata", "Ónix"],
                category: "collares"
            },
            {
                id: 18,
                name: "Collar minimalista de oro",
                price: 150000,
                image: "https://placehold.co/400x400/D8BEE5/2a2a2d?text=Collar+Elegante",
                description: "Collar delicado con cadena fina de oro y colgante minimalista. Diseño atemporal que complementa cualquier outfit.",
                stock: "En stock",
                features: [
                    "Cadena fina de oro",
                    "Colgante minimalista",
                    "Diseño atemporal",
                    "Versátil"
                ],
                variants: ["Oro", "Plata", "Cobre"],
                category: "collares"
            },
            {
                id: 19,
                name: "Collar de doble cadena",
                price: 165000,
                originalPrice: 200000,
                image: "https://placehold.co/400x400/F2CAEA/2a2a2d?text=Collar+Doble",
                description: "Collar con doble cadena de oro y colgante circular. Diseño moderno que combina perfectamente con looks urbanos.",
                stock: "Últimas 5 unidades",
                features: [
                    "Doble cadena de oro",
                    "Colgante circular",
                    "Diseño moderno",
                    "Ajustable"
                ],
                variants: ["Oro", "Plata"],
                category: "collares"
            },
            {
                id: 20,
                name: "Collar de perlas clásico",
                price: 175000,
                image: "https://placehold.co/400x400/DEC9F0/2a2a2d?text=Collar+Perlas",
                description: "Collar clásico con perlas naturales y cierre de oro. Elegancia atemporal para ocasiones especiales.",
                stock: "En stock",
                features: [
                    "Perlas naturales AAA",
                    "Cierre de oro",
                    "Clásico y elegante",
                    "Hecho a mano"
                ],
                variants: ["Blanco", "Rosa", "Negro"],
                category: "collares"
            },
            // Additional products (12 more)
            ...Array(12).fill().map((_, index) => ({
                id: index + 21,
                name: `Collar Premium ${index + 1}`,
                price: 120000 + Math.floor(Math.random() * 80000),
                image: `https://placehold.co/400x400/${['DEC9F0', 'D8BEE5', 'F2CAEA'][Math.floor(Math.random() * 3)]}/2a2a2d?text=Collar+${index + 1}`,
                description: "Collar de diseño exclusivo con acabado premium. Perfecto para realzar tu estilo personal.",
                stock: Math.random() > 0.3 ? "En stock" : "Últimas unidades",
                features: [
                    "Diseño exclusivo",
                    "Acabado premium",
                    "Hecho a mano",
                    "Estilo único"
                ],
                variants: ["Oro", "Plata", "Cobre"],
                category: "collares"
            }))
        ],
        anillos: [
            {
                id: 33,
                name: "Anillo de circonia negra",
                price: 85000,
                originalPrice: 110000,
                image: "https://placehold.co/400x400/DEC9F0/2a2a2d?text=Anillo+Moderno",
                description: "Anillo moderno con circonia cúbica negra y montura en plata. Pieza audaz que combina perfectamente con looks urbanos.",
                stock: "En stock",
                features: [
                    "Circonia cúbica negra",
                    "Montura en plata",
                    "Tallas disponibles: 4-10",
                    "Hipoalergénico"
                ],
                variants: ["Negro", "Blanco", "Azul"],
                category: "anillos"
            },
            {
                id: 34,
                name: "Anillo minimalista de oro",
                price: 95000,
                image: "https://placehold.co/400x400/D8BEE5/2a2a2d?text=Anillo+Minimalista",
                description: "Anillo delicado con diseño minimalista y acabado en oro. Diseño atemporal que complementa cualquier outfit.",
                stock: "En stock",
                features: [
                    "Diseño minimalista",
                    "Acabado en oro de 18k",
                    "Tallas disponibles: 3-9",
                    "Versátil"
                ],
                variants: ["Oro", "Plata", "Cobre"],
                category: "anillos"
            },
            {
                id: 35,
                name: "Anillo de doble banda",
                price: 110000,
                originalPrice: 140000,
                image: "https://placehold.co/400x400/F2CAEA/2a2a2d?text=Anillo+Doble",
                description: "Anillo con doble banda de oro entrelazada. Diseño moderno que combina perfectamente con looks urbanos.",
                stock: "Últimas 4 unidades",
                features: [
                    "Doble banda de oro",
                    "Diseño entrelazado",
                    "Tallas disponibles: 4-10",
                    "Ajustable"
                ],
                variants: ["Oro", "Plata"],
                category: "anillos"
            },
            {
                id: 36,
                name: "Anillo de perlas",
                price: 120000,
                image: "https://placehold.co/400x400/DEC9F0/2a2a2d?text=Anillo+Perlas",
                description: "Anillo clásico con perla natural y montura de oro. Elegancia atemporal para ocasiones especiales.",
                stock: "En stock",
                features: [
                    "Perla natural AAA",
                    "Montura de oro",
                    "Tallas disponibles: 3-9",
                    "Hecho a mano"
                ],
                variants: ["Blanco", "Rosa", "Negro"],
                category: "anillos"
            },
            // Additional products (12 more)
            ...Array(12).fill().map((_, index) => ({
                id: index + 37,
                name: `Anillo Premium ${index + 1}`,
                price: 70000 + Math.floor(Math.random() * 60000),
                image: `https://placehold.co/400x400/${['DEC9F0', 'D8BEE5', 'F2CAEA'][Math.floor(Math.random() * 3)]}/2a2a2d?text=Anillo+${index + 1}`,
                description: "Anillo de diseño exclusivo con acabado premium. Perfecto para realzar tu estilo personal.",
                stock: Math.random() > 0.3 ? "En stock" : "Últimas unidades",
                features: [
                    "Diseño exclusivo",
                    "Acabado premium",
                    "Hecho a mano",
                    "Estilo único"
                ],
                variants: ["Oro", "Plata", "Cobre"],
                category: "anillos"
            }))
        ],
        cadenas: [
            {
                id: 49,
                name: "Cadena larga eslabón delgado",
                price: 110000,
                originalPrice: 140000,
                image: "https://placehold.co/400x400/DEC9F0/2a2a2d?text=Cadena+Fina",
                description: "Cadena larga con eslabones finos de oro. Versátil y elegante, ideal para capas o uso individual.",
                stock: "En stock",
                features: [
                    "Eslabones finos de oro",
                    "Longitud ajustable",
                    "Versátil",
                    "Diseño elegante"
                ],
                variants: ["Oro", "Plata", "Cobre"],
                category: "cadenas"
            },
            {
                id: 50,
                name: "Cadena de doble eslabón",
                price: 130000,
                image: "https://placehold.co/400x400/D8BEE5/2a2a2d?text=Cadena+Doble",
                description: "Cadena con doble eslabón entrelazado de oro. Diseño moderno que combina perfectamente con looks urbanos.",
                stock: "En stock",
                features: [
                    "Doble eslabón entrelazado",
                    "Acabado en oro",
                    "Resistente",
                    "Ajustable"
                ],
                variants: ["Oro", "Plata"],
                category: "cadenas"
            },
            {
                id: 51,
                name: "Cadena minimalista corta",
                price: 95000,
                originalPrice: 120000,
                image: "https://placehold.co/400x400/F2CAEA/2a2a2d?text=Cadena+Minimalista",
                description: "Cadena corta con diseño minimalista y acabado en oro. Diseño atemporal que complementa cualquier outfit.",
                stock: "Últimas 6 unidades",
                features: [
                    "Diseño minimalista",
                    "Acabado en oro",
                    "Longitud corta",
                    "Versátil"
                ],
                variants: ["Oro", "Plata", "Cobre"],
                category: "cadenas"
            },
            {
                id: 52,
                name: "Cadena de acero pulido",
                price: 85000,
                image: "https://placehold.co/400x400/DEC9F0/2a2a2d?text=Cadena+Acero",
                description: "Cadena de acero quirúrgico con acabado pulido espejo. Duradera, hipoalergénica y perfecta para el día a día.",
                stock: "En stock",
                features: [
                    "Acero quirúrgico",
                    "Acabado pulido espejo",
                    "Resistente al agua",
                    "Duradera"
                ],
                variants: ["Plateado", "Dorado"],
                category: "cadenas"
            },
            // Additional products (12 more)
            ...Array(12).fill().map((_, index) => ({
                id: index + 53,
                name: `Cadena Premium ${index + 1}`,
                price: 80000 + Math.floor(Math.random() * 60000),
                image: `https://placehold.co/400x400/${['DEC9F0', 'D8BEE5', 'F2CAEA'][Math.floor(Math.random() * 3)]}/2a2a2d?text=Cadena+${index + 1}`,
                description: "Cadena de diseño exclusivo con acabado premium. Perfecta para realzar tu estilo personal.",
                stock: Math.random() > 0.3 ? "En stock" : "Últimas unidades",
                features: [
                    "Diseño exclusivo",
                    "Acabado premium",
                    "Hecha a mano",
                    "Estilo único"
                ],
                variants: ["Oro", "Plata", "Cobre"],
                category: "cadenas"
            }))
        ],
        pulseras: [
            {
                id: 65,
                name: "Pulsera de acero pulido",
                price: 95000,
                originalPrice: 120000,
                image: "https://placehold.co/400x400/DEC9F0/2a2a2d?text=Pulsera+Brillante",
                description: "Pulsera de acero quirúrgico con acabado pulido espejo. Duradera, hipoalergénica y perfecta para el día a día.",
                stock: "En stock",
                features: [
                    "Acero quirúrgico",
                    "Acabado pulido espejo",
                    "Resistente al agua",
                    "Duradera"
                ],
                variants: ["Plateado", "Dorado"],
                category: "pulseras"
            },
            {
                id: 66,
                name: "Pulsera de perlas",
                price: 110000,
                image: "https://placehold.co/400x400/D8BEE5/2a2a2d?text=Pulsera+Perlas",
                description: "Pulsera clásica con perlas naturales y cierre de oro. Elegancia atemporal para ocasiones especiales.",
                stock: "En stock",
                features: [
                    "Perlas naturales AAA",
                    "Cierre de oro",
                    "Clásica y elegante",
                    "Hecha a mano"
                ],
                variants: ["Blanco", "Rosa", "Negro"],
                category: "pulseras"
            },
            {
                id: 67,
                name: "Pulsera de doble cadena",
                price: 125000,
                originalPrice: 150000,
                image: "https://placehold.co/400x400/F2CAEA/2a2a2d?text=Pulsera+Doble",
                description: "Pulsera con doble cadena de oro entrelazada. Diseño moderno que combina perfectamente con looks urbanos.",
                stock: "Últimas 3 unidades",
                features: [
                    "Doble cadena de oro",
                    "Diseño entrelazado",
                    "Ajustable",
                    "Elegante"
                ],
                variants: ["Oro", "Plata"],
                category: "pulseras"
            },
            {
                id: 68,
                name: "Pulsera minimalista",
                price: 85000,
                image: "https://placehold.co/400x400/DEC9F0/2a2a2d?text=Pulsera+Minimalista",
                description: "Pulsera delicada con diseño minimalista y acabado en oro. Diseño atemporal que complementa cualquier outfit.",
                stock: "En stock",
                features: [
                    "Diseño minimalista",
                    "Acabado en oro",
                    "Peso ligero",
                    "Versátil"
                ],
                variants: ["Oro", "Plata", "Cobre"],
                category: "pulseras"
            },
            // Additional products (12 more)
            ...Array(12).fill().map((_, index) => ({
                id: index + 69,
                name: `Pulsera Premium ${index + 1}`,
                price: 70000 + Math.floor(Math.random() * 60000),
                image: `https://placehold.co/400x400/${['DEC9F0', 'D8BEE5', 'F2CAEA'][Math.floor(Math.random() * 3)]}/2a2a2d?text=Pulsera+${index + 1}`,
                description: "Pulsera de diseño exclusivo con acabado premium. Perfecta para realzar tu estilo personal.",
                stock: Math.random() > 0.3 ? "En stock" : "Últimas unidades",
                features: [
                    "Diseño exclusivo",
                    "Acabado premium",
                    "Hecha a mano",
                    "Estilo único"
                ],
                variants: ["Oro", "Plata", "Cobre"],
                category: "pulseras"
            }))
        ],
        aretes: [
            {
                id: 81,
                name: "Aros geométricos dorados",
                price: 75000,
                originalPrice: 95000,
                image: "https://placehold.co/400x400/F2CAEA/2a2a2d?text=Aros+Dorados",
                description: "Aros circulares con diseño geométrico en oro. Modernos y sofisticados, realzan la belleza de tu rostro.",
                stock: "En stock",
                features: [
                    "Diseño geométrico",
                    "Acabado en oro",
                    "Tamaño: 4cm diámetro",
                    "Hipoalergénicos"
                ],
                variants: ["Oro", "Plata", "Cobre"],
                category: "aretes"
            },
            {
                id: 82,
                name: "Aros de perlas",
                price: 85000,
                image: "https://placehold.co/400x400/DEC9F0/2a2a2d?text=Aros+Perlas",
                description: "Aros clásicos con perlas naturales y montura de oro. Elegancia atemporal para ocasiones especiales.",
                stock: "En stock",
                features: [
                    "Perlas naturales AAA",
                    "Montura de oro",
                    "Clásicos y elegantes",
                    "Hechos a mano"
                ],
                variants: ["Blanco", "Rosa", "Negro"],
                category: "aretes"
            },
            {
                id: 83,
                name: "Aros de circonia",
                price: 95000,
                originalPrice: 120000,
                image: "https://placehold.co/400x400/D8BEE5/2a2a2d?text=Aros+Circonia",
                description: "Aros con circonia cúbica y montura en plata. Brillantes y elegantes, perfectos para cualquier ocasión.",
                stock: "Últimas 4 unidades",
                features: [
                    "Circonia cúbica",
                    "Montura en plata",
                    "Tamaño: 3.5cm diámetro",
                    "Brillantes"
                ],
                variants: ["Transparente", "Negro", "Azul"],
                category: "aretes"
            },
            {
                id: 84,
                name: "Aros minimalistas",
                price: 65000,
                image: "https://placehold.co/400x400/F2CAEA/2a2a2d?text=Aros+Minimalistas",
                description: "Aros delicados con diseño minimalista y acabado en oro. Diseño atemporal que complementa cualquier outfit.",
                stock: "En stock",
                features: [
                    "Diseño minimalista",
                    "Acabado en oro",
                    "Tamaño pequeño",
                    "Versátiles"
                ],
                variants: ["Oro", "Plata", "Cobre"],
                category: "aretes"
            },
            // Additional products (12 more)
            ...Array(12).fill().map((_, index) => ({
                id: index + 85,
                name: `Aros Premium ${index + 1}`,
                price: 60000 + Math.floor(Math.random() * 50000),
                image: `https://placehold.co/400x400/${['DEC9F0', 'D8BEE5', 'F2CAEA'][Math.floor(Math.random() * 3)]}/2a2a2d?text=Aros+${index + 1}`,
                description: "Aros de diseño exclusivo con acabado premium. Perfectos para realzar tu estilo personal.",
                stock: Math.random() > 0.3 ? "En stock" : "Últimas unidades",
                features: [
                    "Diseño exclusivo",
                    "Acabado premium",
                    "Hechos a mano",
                    "Estilo único"
                ],
                variants: ["Oro", "Plata", "Cobre"],
                category: "aretes"
            }))
        ]
    };

    const product = products[category].find(p => p.id === productId);
    if (product) {
        document.getElementById('productModalLabel').textContent = product.name;
        document.getElementById('modal-product-name').textContent = product.name;
        document.getElementById('modal-product-description').textContent = product.description;
        document.getElementById('modal-product-price').textContent = `$${product.price.toLocaleString()}`;
        document.getElementById('modal-product-image').src = product.image;
        document.getElementById('modal-product-stock').textContent = product.stock;
        
        // Handle discount
        const discountElement = document.getElementById('modal-product-discount');
        if (product.originalPrice) {
            const discount = Math.round((1 - product.price/product.originalPrice) * 100);
            discountElement.textContent = `-${discount}%`;
            discountElement.style.display = 'block';
        } else {
            discountElement.style.display = 'none';
        }
        
        // Update features
        const featuresList = document.getElementById('modal-product-features');
        featuresList.innerHTML = '';
        product.features.forEach(feature => {
            const li = document.createElement('li');
            li.className = 'mb-2';
            li.innerHTML = `<i class="fas fa-check text-primary me-2"></i>${feature}`;
            featuresList.appendChild(li);
        });
        
        // Update variants
        const variantsContainer = document.getElementById('modal-product-variants');
        variantsContainer.innerHTML = '';
        product.variants.forEach((variant, index) => {
            const button = document.createElement('button');
            button.className = `btn btn-outline-primary btn-sm ${index === 0 ? 'active' : ''}`;
            button.textContent = variant;
            button.onclick = function() {
                document.querySelectorAll('#modal-product-variants .btn').forEach(btn => {
                    btn.classList.remove('active');
                });
                this.classList.add('active');
            };
            variantsContainer.appendChild(button);
        });
        
        // Update related products (show 4 from same category)
        const relatedContainer = document.getElementById('related-products');
        relatedContainer.innerHTML = '';
        const relatedProducts = products[category].filter(p => p.id !== productId).slice(0, 4);
        relatedProducts.forEach(related => {
            const col = document.createElement('div');
            col.className = 'col-6 col-md-3';
            col.innerHTML = `
                <div class="card h-100 border-0" style="cursor: pointer;" onclick="openProductModal(${related.id}, '${category}')">
                    <img src="${related.image}" class="card-img-top" alt="${related.name}" style="border-radius: 8px; height: 120px; object-fit: cover;">
                    <div class="card-body p-2">
                        <h6 class="card-title text-center" style="font-size: 0.9rem;">${related.name}</h6>
                        <p class="card-text text-center text-primary fw-bold" style="font-size: 1rem;">$${related.price.toLocaleString()}</p>
                    </div>
                </div>
            `;
            relatedContainer.appendChild(col);
        });
        
        // Reset quantity
        document.getElementById('quantity-input').value = '1';
        
        const modal = new bootstrap.Modal(document.getElementById('productModal'));
        modal.show();
    }
}

// Quantity functions
function increaseQuantity() {
    const input = document.getElementById('quantity-input');
    let value = parseInt(input.value);
    input.value = value + 1;
}

function decreaseQuantity() {
    const input = document.getElementById('quantity-input');
    let value = parseInt(input.value);
    if (value > 1) {
        input.value = value - 1;
    }
}

// Buy now function
function buyNow() {
    const product = document.getElementById('modal-product-name').textContent;
    const price = document.getElementById('modal-product-price').textContent;
    const quantity = document.getElementById('quantity-input').value;
    const variant = document.querySelector('#modal-product-variants .btn.active').textContent;
    
    const message = `Hola, quiero comprar:\n\nProducto: ${product}\nVariante: ${variant}\nCantidad: ${quantity}\nPrecio: ${price}\n\n¿Está disponible?`;
    
    window.open(`https://wa.me/573136649642?text=${encodeURIComponent(message)}`, '_blank');
}