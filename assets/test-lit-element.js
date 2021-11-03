import {html, css, LitElement} from 'https://unpkg.com/lit?module';

class TestLitElement extends LitElement {
    constructor() {
        super();
        this.version = 'PACO!';
    }

    render() {
        return html`
            <p>Welcome to the Lit tutorial!</p>
            <p>This is the ${this.version} code.</p>
        `;
    }
}

TestLitElement.properties = {
    version: {},
};

customElements.define('test-lit-element', TestLitElement);
