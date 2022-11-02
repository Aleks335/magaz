class Product {
    constructor(selector, name, price, index, product_id, deleteProductRequest) {
        this._setDomPrefs(selector);
        this._addHtml(index, name, price);
        this._addEventListners(product_id, deleteProductRequest);
    }

    _setDomPrefs(selector){
        this._template = document.querySelector(selector.template);
        this._tr = this._template.content.querySelector(selector.tr).cloneNode(true);
        this._index =  this._tr.querySelector(selector.index);
        this._name =  this._tr.querySelector(selector.name);
        this._price =  this._tr.querySelector(selector.price);
        this._clos = this._tr.querySelector(selector.button);
    }
    _addEventListners(product_id, deleteProductRequest){
        this._clos.addEventListener('click', ()=>{
            deleteProductRequest(product_id);

        })
    }

    _addHtml(index, name, price){
        this._index.innerHTML= index + 1;
        this._name.innerHTML= name;
        this._price.innerHTML= price;
    }

    gettr(){
        return this._tr;
    }
}