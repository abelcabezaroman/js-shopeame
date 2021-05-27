const form$$ = document.querySelector('form');


form$$.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form$$.querySelector('#name').value;
    const price = form$$.querySelector('#price').value;
    const description = form$$.querySelector('#description').value;
    const image = form$$.querySelector('#image').value;
    const rating = form$$.querySelector('#rating').value;

    // const newProduct = {
    //     name: name,
    //     price: price,
    //     description: description,
    //     image: image,
    //     rating: rating
    // }
    // IGUAL

    const newProduct = {
        name,
        price,
        description,
        image,
        rating
    }

    console.log(name);
    addProduct(newProduct);
});


// function addProduct(newProduct) {
//     fetch('http://localhost:3000/products', {
//         method: 'POST',
//         headers: {
//             "Content-type": "application/json; charset=UTF-8"
//         },
//         body: JSON.stringify(newProduct)
//     }).then(res => res.json()).then(resData => {
//         console.log(resData);
//     })
// }



async function addProduct(newProduct) {
    const res = await fetch('http://localhost:3000/products', {
        method: 'POST',
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify(newProduct)
    });
    // const resProduct = await res.json();  Solo si quieres estos datos para algo
}

