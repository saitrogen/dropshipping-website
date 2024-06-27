document.addEventListener('DOMContentLoaded', function() {
    const products = [
        {
            id: 1,
            name: 'Product 1',
            price: '$10',
            description: 'This is the description for product 1.'
        },
        {
            id: 2,
            name: 'Product 2',
            price: '$20',
            description: 'This is the description for product 2.'
        },
        // Add more products as needed
    ];

    const productContainer = document.getElementById('products');

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product';
        productElement.innerHTML = `
            <h2>${product.name}</h2>
            <p>${product.price}</p>
            <p>${product.description}</p>
            <button>Add to Cart</button>
        `;
        productContainer.appendChild(productElement);
    });
});
