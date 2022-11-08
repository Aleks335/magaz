async function deleteProductRequest(ID) {
    const ttt = await fetch('http://f0428517.xsph.ru/a_shop2/delete_product.php', {
        method: 'DELETE',// метод
        body: JSON.stringify({product_id: ID}),
        headers: {// тип шапки
            'Content-Type': 'application/json'
        }
    })
    const dell = await ttt.json();
}

async function createProductRequest(name, price) {
   await fetch('http://f0428517.xsph.ru/a_shop2/insert_product.php',{
        method:'POST',// метод
        body:JSON.stringify({name:name, price:price}),
        headers: {// тип шапки
            'Content-Type': 'application/json'
        }
    })
}

async function getProductsRequest() {
    const rezFetc = await fetch(`http://f0428517.xsph.ru/a_shop2/get_products.php`);
    return await rezFetc.json();
}

export {
    createProductRequest,
    deleteProductRequest,
    getProductsRequest,
}