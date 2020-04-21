var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { LitElement, customElement, property } from 'lit-element';
import { html } from 'lit-html';
// const tag: string = '<my-custom-mark>'
let CustomMark = class CustomMark extends LitElement {
    constructor() {
        super(...arguments);
        // Issue only appears when reflect=true
        this.reflectedAttribute = 'default'; // default value to show how when prosemirror changes value, infitite loop is created.
    }
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
    render() {
        return html ` <slot> </slot> `;
    }
};
__decorate([
    property({
        type: String,
        attribute: 'reflected-attribute',
        reflect: true,
    }),
    __metadata("design:type", String)
], CustomMark.prototype, "reflectedAttribute", void 0);
CustomMark = __decorate([
    customElement('my-custom-mark')
], CustomMark);
export default CustomMark;
//# sourceMappingURL=custom-mark.js.map