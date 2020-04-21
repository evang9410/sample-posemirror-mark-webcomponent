import { LitElement } from 'lit-element';
import { TemplateResult } from 'lit-html';
export default class CustomMark extends LitElement {
    reflectedAttribute: string;
    protected render(): TemplateResult;
}
