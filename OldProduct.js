class OldProduct {
    constructor(name, price) {
        this.setDomPrefs();
        this.name = name;
        this.price = price;
        this.addHtml();
    }
    setDomPrefs(){
        this.template = document.querySelector('.tovTemplate');
        this.li = this.template.content.querySelector('.tovLi').cloneNode(true);
    }
    addHtml(){
        this.li.innerHTML=`${this.name} ; ${this.price}`;
    }

    getLi(){
        return this.li;
    }

}