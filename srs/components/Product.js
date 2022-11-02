class Product {
    constructor(selector, name, price) {
        this._setDomPrefs(selector);
        this._name = name;
        this._price = price;
    }

    _setDomPrefs(selector) {
        this._template = document.querySelector(selector.template);
        this._container = this._template.content.querySelector(selector.container).cloneNode(true);
    }

    getContainer() {
        return this._container;
    }
}