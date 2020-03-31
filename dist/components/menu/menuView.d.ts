declare class MenuView {
    items: any;
    editorView: any;
    dom: any;
    constructor(items: any, editorView: any);
    update(): void;
    destroy(): void;
}
