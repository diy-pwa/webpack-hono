class Year extends HTMLElement{
    connectedCallback(){
        this.innerHTML = new Date().getFullYear().toString();
    }
}

customElements.define('x-year', Year);