import { LitElement, customElement, property } from 'lit-element';
import { html, TemplateResult } from 'lit-html';

// prosemirror modules
import {EditorState} from "prosemirror-state"
import {EditorView} from "prosemirror-view"
import {Schema, DOMParser} from "prosemirror-model"
import {schema} from "prosemirror-schema-basic"
import {addListNodes} from "prosemirror-schema-list"
import {exampleSetup} from "prosemirror-example-setup"

import { marks } from './marks';

// Mix the nodes from prosemirror-schema-list into the basic schema to
// create a schema with list support.

const mySchema = new Schema({
  nodes: addListNodes(schema.spec.nodes, "paragraph block*", "block"),
  marks: marks
});


@customElement('prosemirror-editor')
export default class CustomMark extends LitElement {
    private editorView: EditorView;

    constructor(){
        super();
    }

    protected firstUpdated(): void {
        this.initEditor();
    }

    private initEditor(): void {
        const container = document.createElement('div');
        container.innerHTML = this.innerHTML;
        this.innerHTML = '';

        this.editorView = new EditorView(this, {
            state: EditorState.create({
                doc: DOMParser.fromSchema(mySchema).parse(container),
                plugins: exampleSetup({ schema: mySchema })
            })
        })
    }

    protected render(): TemplateResult {
        return html`
            <div id="editor"></div>
            <slot></slot>
        `;
    }
}