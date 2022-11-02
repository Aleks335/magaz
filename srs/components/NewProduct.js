class NewProduct  extends Product{
    constructor(selector, name, price, index, product_id, deleteProductRequest) {
        super(selector, name, price);
        this._addHtml(index, name, price);
        this._addEventListners(product_id, deleteProductRequest);
    }

    _setDomPrefs(selector){
        super._setDomPrefs(selector);
       this._index =  this._container.querySelector(selector.index);
        this._nameField =  this._container.querySelector(selector.name);
        this._priceField =  this._container.querySelector(selector.price);
        this._clos = this._container.querySelector(selector.button);
    }
    _addEventListners(product_id, deleteProductRequest){
        this._clos.addEventListener('click', ()=>{
            deleteProductRequest(product_id);
        })
    }

    _addHtml(index, name, price){
        this._index.innerHTML= index + 1;
        this._nameField.innerHTML= name;
        this._priceField.innerHTML= price;
    }

}