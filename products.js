// fetch('http://localhost:3000/products').then(res => res.json()).then(products => {
//     console.log(products);
//     printProducts(products);
// })

// async function api(url){
//     const res = await fetch(url);
//     return res.json();
// }

const productsContainer$$ = document.querySelector('[data-function="products"]')


async function getProducts() {
    const res = await fetch('http://localhost:3000/products');
    const products = await res.json();

    console.log(products);
    printProducts(products);
}


function printProducts(products){
    for (const product of products) {
        const product$$ = createProduct(product);
        productsContainer$$.appendChild(product$$);
    }
};

function createProduct(product){
    const div$$ = document.createElement('div');
    div$$.className = 'col-12 col-lg-4';
    div$$.innerHTML = `
    <img src="${product.image}">
    <h2>${product.name}</h2>
    <span>${product.price}</span>
    <p>${product.description}</p>
    `
    return div$$;
}

getProducts();