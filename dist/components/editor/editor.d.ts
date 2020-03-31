import { LitElement } from 'lit-element';
import { TemplateResult } from 'lit-html';
import { EditorView } from "prosemirror-view";
export default class CustomMark extends LitElement {
    editorView: EditorView;
    constructor();
    protected firstUpdated(): void;
    private initEditor;
    protected render(): TemplateResult;
}
