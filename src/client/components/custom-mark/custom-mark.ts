import { LitElement, customElement, property } from "lit-element";
import { html, TemplateResult } from "lit-html";

const tag: string = "<my-custom-mark>";
@customElement("my-custom-mark")
export default class CustomMark extends LitElement {
    // Issue only appears when reflect=true
    @property({
        type: String,
        attribute: "reflected-attribute",
        reflect: true,
        converter: {
            toAttribute: (value: string, type: String) => {
                console.log(tag, ": ", "property converter toAttribute value: ", value);
                return value;
            },
            fromAttribute: (value: string, type: String) => {
                console.log(tag, ": ", "property converter fromAttribute: ", value);
                return value;
            }
        }
    })
    public reflectedAttribute: string = "default"; // default value to show how when prosemirror changes value, infitite loop is created.

    constructor() {
        super();
        /**
         * Chaging the attribute directly through webcomponent does not seem to casue an issue.
         */
        this.onclick = () => {
            const value = Math.floor(Math.random() * Math.floor(10));
            this.reflectedAttribute = String(value);
        };
    }

    protected render(): TemplateResult {
        return html`
            <slot> </slot>
        `;
    }
}
