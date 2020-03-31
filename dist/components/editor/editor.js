var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { LitElement, customElement } from 'lit-element';
import { html } from 'lit-html';
// prosemirror modules
import { EditorState } from "prosemirror-state";
import { EditorView } from "prosemirror-view";
import { Schema, DOMParser } from "prosemirror-model";
import { schema } from "prosemirror-schema-basic";
import { addListNodes } from "prosemirror-schema-list";
import { exampleSetup } from "prosemirror-example-setup";
import { marks } from './marks';
// Mix the nodes from prosemirror-schema-list into the basic schema to
// create a schema with list support.
const mySchema = new Schema({
    nodes: addListNodes(schema.spec.nodes, "paragraph block*", "block"),
    marks: marks
});
let CustomMark = class CustomMark extends LitElement {
    constructor() {
        super();
    }
    firstUpdated() {
        this.initEditor();
    }
    initEditor() {
        const container = document.createElement('div');
        container.innerHTML = this.innerHTML;
        this.innerHTML = '';
        this.editorView = new EditorView(this, {
            state: EditorState.create({
                doc: DOMParser.fromSchema(mySchema).parse(container),
                plugins: exampleSetup({ schema: mySchema })
            })
        });
    }
    render() {
        return html `
            <div id="editor"></div>
            <slot></slot>
        `;
    }
};
CustomMark = __decorate([
    customElement('prosemirror-editor'),
    __metadata("design:paramtypes", [])
], CustomMark);
export default CustomMark;
//# sourceMappingURL=editor.js.map