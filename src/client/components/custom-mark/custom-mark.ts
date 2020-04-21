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
        // converter: {
        //     toAttribute: (value: string, type: String) => {
        //         console.log(tag, ': ', 'property converter toAttribute value: ', value);
        //         return value;
        //     },
        //     fromAttribute: (value: string, type: String) => {
        //         console.log(tag, ': ', 'property converter fromAttribute: ', value);
        //         return value;
        //     }
        // }
    })
    public reflectedAttribute: string = 'default'; // default value to show how when prosemirror changes value, infitite loop is created.

    // public counter: number = 0;
    // public maxCounter: number = 5;

    // constructor(){
    //     super();
    //     /**
    //      * Chaging the attribute directly through webcomponent does not seem to casue an issue.
    //      */
    //     this.onclick = () => {
    //         const value = Math.floor(Math.random() * Math.floor(10));
    //         this.reflectedAttribute = String(value);
    //     };
    // }

    // protected shouldUpdate(changedProperties: Map<string, any>) {
    //     // const shouldUpdateComponent = false;
    //     // if (changedProperties.has('reflectedAttribute')){
    //     //     console.log(changedProperties.get('reflectedAttribute'), this.reflectedAttribute);
    //     // }
    //     // return shouldUpdateComponent;
    //     console.log('SHOULD UPDATE', changedProperties, this.getAttribute('reflected-attribute'), this.reflectedAttribute);

    //     // if (changedProperties.has('reflectedAttribute')) {
    //     //     return this.getAttribute('reflected-attribute') !== changedProperties.get('reflectedAttribute');
    //     // }

    //     return true;

    //     //     this.counter++;
    //     //     return this.counter < this.maxCounter;
    // }
    protected render(): TemplateResult {
        return html` <slot> </slot> `;
    }
}
