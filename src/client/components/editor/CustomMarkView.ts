import { Decoration, EditorView, NodeView } from "prosemirror-view";
import { Node as ProseNode } from "prosemirror-model";
import { Plugin } from "prosemirror-state";

export class CustomMarkView implements NodeView {
    public dom: HTMLElement;
    public node: ProseNode;
    public view: EditorView;
    public getPos: () => number;
    public decorations: Decoration[];

    constructor(node: ProseNode, view: EditorView, getPos: () => number, decorations: Decoration[]) {
        this.node = node;
        this.view = view;
        this.getPos = getPos;
        this.decorations = decorations;

        const container = document.createElement("div");
        container.innerHTML = `<my-custom-mark 
            ${node.attrs["reflected-attribute"] ? `reflected-attribute="${node.attrs["reflected-attribute"]}"` : ""}
        >
            ${node.attrs.inner}
        </my-custom-mark>`;
        this.dom = container.firstElementChild as HTMLElement;

        this.observeMutations();
    }

    protected observeMutations(): void {
        const observer: MutationObserver = new MutationObserver((mutations: MutationRecord[]) => {
            this.updateProseNodeAttributes(mutations);
            //this.view.state.tr.setNodeMarkup(this.getPos(), undefined, this.node.attrs);
        });
        observer.observe(this.dom, { attributes: true, attributeOldValue: true, childList: true });
    }

    public updateProseNodeAttributes(mutations: MutationRecord[]): void {
        mutations.forEach((mutation: MutationRecord) => {
            this.node.attrs[mutation.attributeName] = this.dom.getAttribute(mutation.attributeName);
        });

        // if (
        //     mutations.filter((mutation: MutationRecord) => {
        //         return mutation.type === "childList";
        //     })
        // ) {
        //     this.node.attrs["inner"] = this.dom.innerHTML;
        // }
    }

    stopEvent(): boolean {
        return true;
    }

    static getPlugin(): Plugin {
        return new Plugin({
            props: {
                nodeViews: {
                    myCustomMark(
                        node: ProseNode,
                        view: EditorView,
                        getPos: () => number,
                        decorations: Decoration[]
                    ): NodeView {
                        return new CustomMarkView(node, view, getPos, decorations);
                    }
                }
            }
        });
    }
}
