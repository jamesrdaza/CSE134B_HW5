let count = 0;
class ButtonCount extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: "open" });
        const template = document.createElement("template");
        template.innerHTML = `
            <button>Times Clicked ${count}</button> 
        `;
        let clone = template.content.cloneNode(true);
        shadowRoot.appendChild(clone);
        console.log(shadowRoot.firstElementChild);
        shadowRoot.firstElementChild.addEventListener("click", () => {
            count++;
            shadowRoot.firstChild.nextSibling.innerHTML = `
                Times Clicked ${count} 
            `
        })
    }
};
customElements.define("button-count", ButtonCount);