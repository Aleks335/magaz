import {NewProduct} from "./srs/components/NewProduct.js";
import {OldProduct} from "./srs/components/OldProduct.js";
import {CreatProductForm} from "./srs/components/CreatProductForm.js";
import {
    getProductsRequest,createProductRequest,deleteProductRequest
} from "./srs/components/API.js";

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
const tovUl = document.querySelector('.tovUl');

new CreatProductForm('.form', createProductRequest, getProductsRequestHandler, '.formName','.formPrice');

function renderNewProducts(newProducts) {
    let sum = 0;
    newProducts.forEach((i, index) => {
        const Prod = new NewProduct(selector, i.name, i.price, index, i.product_id, deleteProductRequestHandler);
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
}

getProductsRequestHandler();
function getProductsRequestHandler() {
    getProductsRequest().then((js)=>{
        rest('.tr');
        rest('.tovLi');

        if(js.newProducts !== null){
            renderNewProducts(js.newProducts);
        }else alert('Список пуст!')

        if(js.oldProducts !== null){
            renderOldProducts(js.oldProducts);
        }else alert('Список пуст!');
    });
}

function deleteProductRequestHandler(ID) {
    deleteProductRequest(ID).then(()=>{getProductsRequestHandler()})
}

function rest(priz) {
    const ters = document.querySelectorAll(priz);
    const len = ters.length;
    for (let i=0; i < len; i++){
        if ( i  > 0) {
            ters[i].remove();
        }
    }
}

