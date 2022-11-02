const selector = {
    template:'.template',
    tbody:'.tbody',
    index:'.index',
    name:'.name',
    price:'.price',
    container : '.tr',
    button:'.button',
}
const selector2 = {
    template:'.tovTemplate',
    container:'.tovLi',
}

const tbody = document.querySelector('.tbody');
let table = document.querySelector('.table');
const tovUl = document.querySelector('.tovUl');

new CreatProductForm('.form', createProductRequest, getProductsRequest, '.formName','.formPrice');


function renderNewProducts(newProducts) {
    let sum = 0;
    newProducts.forEach((i, index) => {
        const Prod = new NewProduct(selector, i.name, i.price, index, i.product_id, deleteProductRequest);
        tbody.append(Prod.getContainer());
        sum += i.price;
    });
    document.querySelector('.total').innerHTML = sum;
}

function renderOldProducts(oldProducts) {
    let sumUl=0;
    oldProducts.forEach((a)=>{
        const OldProd = new OldProduct(selector2, a.name, a.price);
        tovUl.append(OldProd.getContainer());
        sumUl += a.price;
    })
    document.querySelector('.ulItogo').innerHTML = sumUl;
}


getProductsRequest();
async function getProductsRequest() {
    table = document.querySelector('.table');
    const rezFetc = await fetch(`http://f0428517.xsph.ru/a_shop2/get_products.php`);
    const js = await rezFetc.json();
    let len= document.querySelectorAll('.tr').length;
    let len2= document.querySelectorAll('.tovLi').length;
    rest(len, '.tr');
    rest(len2, '.tovLi');

    if(js.newProducts !== null){
        renderNewProducts(js.newProducts);
    }else alert('Список пуст!')

    if(js.oldProducts !== null){
        renderOldProducts(js.oldProducts);
    }else alert('Список пуст!');

}


function rest(len, priz) {
  const ters = document.querySelectorAll(priz);
    for (let i=0; i < len; i++){
        if ( i  > 0) {
          ters[i].remove();
        }
    }
}

async function deleteProductRequest(ID) {
    const ttt = await fetch('http://f0428517.xsph.ru/a_shop2/delete_product.php', {
        method: 'DELETE',// метод
        body: JSON.stringify({product_id: ID}),
        headers: {// тип шапки
            'Content-Type': 'application/json'
        }
    })
    const dell = await ttt.json();
    getProductsRequest();
}

async function createProductRequest(name, price) {
    const ttt = await fetch('http://f0428517.xsph.ru/a_shop2/insert_product.php',{
        method:'POST',// метод
        body:JSON.stringify({name:name, price:price}),
        headers: {// тип шапки
            'Content-Type': 'application/json'
        }
    })
    const rez = await ttt.json();
    // console.log(rez);
}

