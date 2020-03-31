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
const tag = '<my-custom-mark>';
let CustomMark = class CustomMark extends LitElement {
    constructor() {
        super();
        // Issue only appears when reflect=true
        this.reflectedAttribute = 'reflected'; // default value to show how when prosemirror changes value, infitite loop is created.
    }
    render() {
        return html `
            <slot></slot>
        `;
    }
};
__decorate([
    property({
        type: String,
        attribute: 'reflected-attribute',
        reflect: true,
        converter: {
            toAttribute: (value, type) => {
                console.log(tag, ': ', 'property converter toAttribute value: ', value);
                return value;
            },
            fromAttribute: (value, type) => {
                console.log(tag, ': ', 'property converter fromAttribute: ', value);
                return value;
            }
        }
    }),
    __metadata("design:type", String)
], CustomMark.prototype, "reflectedAttribute", void 0);
CustomMark = __decorate([
    customElement('my-custom-mark'),
    __metadata("design:paramtypes", [])
], CustomMark);
export default CustomMark;
//# sourceMappingURL=custom-mark.js.map