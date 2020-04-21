import { LitElement, customElement, property } from 'lit-element';
import { html, TemplateResult } from 'lit-html';

// const tag: string = '<my-custom-mark>'
@customElement('my-custom-mark')
export default class CustomMark extends LitElement {
    // Issue only appears when reflect=true
    @property({
        type: String,
        attribute: 'reflected-attribute',
        reflect: true,
    })
    public reflectedAttribute: string = 'default'; // default value to show how when prosemirror changes value, infitite loop is created.

    protected render(): TemplateResult {
        return html` <slot> </slot> `;
    }
}
