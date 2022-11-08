import {Product} from "./Product.js";
export class OldProduct extends Product{
    constructor(selector, name, price) {
        super(selector,name, price)
        this._addHtml();
    }

    _addHtml(){
        this._container.innerHTML=`${this._name} ; ${this._price}`;
    }

}