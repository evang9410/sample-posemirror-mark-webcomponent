import { Decoration, EditorView, NodeView } from 'prosemirror-view';
import { Node as ProseNode } from 'prosemirror-model';
import { Plugin } from 'prosemirror-state';

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

        const el = document.createElement('my-custom-mark');
        el.setAttribute('reflected-attribute', node.attrs['reflected-attribute']);
        el.innerHTML = node.attrs.inner;
        this.dom = el;
        this.observeMutations();
    }

    protected observeMutations(): void {
        const observer: MutationObserver = new MutationObserver((mutations: MutationRecord[]) => {
            this.updateProseNodeAttributes(mutations);
        });
        observer.observe(this.dom, { attributes: true, attributeOldValue: true, childList: true });
    }

    public updateProseNodeAttributes(mutations: MutationRecord[]): void {
        mutations.forEach((mutation: MutationRecord) => {
            this.node.attrs[mutation.attributeName] = this.dom.getAttribute(mutation.attributeName);
        });
    }

    stopEvent(): boolean {
        return true;
    }

    static getPlugin(): Plugin {
        return new Plugin({
            props: {
                nodeViews: {
                    myCustomMark(node: ProseNode, view: EditorView, getPos: () => number, decorations: Decoration[]): NodeView {
                        return new CustomMarkView(node, view, getPos, decorations);
                    },
                },
            },
        });
    }
}
