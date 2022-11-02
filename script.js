const selector = {
    template:'.template',
    tbody:'.tbody',
    index:'.index',
    name:'.name',
    price:'.price',
    tr : '.tr',
    button:'.button',
}

const tbody = document.querySelector('.tbody');
let table = document.querySelector('.table');
const tovUl = document.querySelector('.tovUl');

new CreatProductForm('.form', createProductRequest, getProductsRequest, '.formName','.formPrice');

getProductsRequest();
async function getProductsRequest() {
    table = document.querySelector('.table');
    const rezFetc = await fetch(`http://f0428517.xsph.ru/a_shop2/get_products.php`);
    const js = await rezFetc.json();
    let sum = 0;
    let len= document.querySelectorAll('.tr').length;
    let len2= document.querySelectorAll('.tovLi').length;
    rest(len, '.tr');
    rest(len2, '.tovLi');
    if(js.newProducts !== null){
        js.newProducts.forEach((i, index)=>{
        const Prod = new Product(selector, i.name, i.price, index, i.product_id, deleteProductRequest);
        tbody.append(Prod.gettr());
        sum +=i.price;
    })
    }else alert('Список пуст!')
    let sumUl=0;
    if(js.oldProducts !== null){
        js.oldProducts.forEach((a)=>{
            if (a.quantity === 1) {
                const OldProd = new OldProduct(a.name, a.price);
                tovUl.append(OldProd.getLi());
                sumUl += a.price;
            }
        })
    }else alert('Список пуст!');
    document.querySelector('.total').innerHTML = sum;
    document.querySelector('.ulItogo').innerHTML = sumUl;
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

