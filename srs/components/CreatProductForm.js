class CreatProductForm {
    constructor(form, createProductRequest, getProductsRequest, formName, formPrice) {
        this._form = document.querySelector(form);
        this._name = document.querySelector(formName);
        this._price = document.querySelector(formPrice);
        this._addEventListener(createProductRequest, getProductsRequest);
    }

    _addEventListener(createProductRequest, getProductsRequest){
        this._form.addEventListener('submit',(evt)=>{
            evt.preventDefault();
            if ((this._name.value != '') && (Number(this._price.value)>0)) {
                createProductRequest(this._name.value, Number(this._price.value)).then(() => {
                    getProductsRequest();
                    this._form.reset();
                }).catch((error) => {
                    console.log(error)
                });
            }else console.log('Ошибка');
        })
    }
}



