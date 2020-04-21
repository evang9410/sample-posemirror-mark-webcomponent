import { Plugin } from 'prosemirror-state';
export class CustomMarkView {
    constructor(node, view, getPos, decorations) {
        this.node = node;
        this.view = view;
        this.getPos = getPos;
        this.decorations = decorations;
        const container = document.createElement('div');
        container.innerHTML = `<my-custom-mark 
            ${node.attrs['reflected-attribute'] ? `reflected-attribute="${node.attrs['reflected-attribute']}"` : ''}
        >
            ${node.attrs.inner}
        </my-custom-mark>`;
        this.dom = container.firstElementChild;
        this.observeMutations();
    }
    observeMutations() {
        const observer = new MutationObserver((mutations) => {
            this.updateProseNodeAttributes(mutations);
            //this.view.state.tr.setNodeMarkup(this.getPos(), undefined, this.node.attrs);
        });
        observer.observe(this.dom, { attributes: true, attributeOldValue: true, childList: true });
    }
    updateProseNodeAttributes(mutations) {
        mutations.forEach((mutation) => {
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
    stopEvent() {
        return true;
    }
    static getPlugin() {
        return new Plugin({
            props: {
                nodeViews: {
                    myCustomMark(node, view, getPos, decorations) {
                        return new CustomMarkView(node, view, getPos, decorations);
                    },
                },
            },
        });
    }
}
//# sourceMappingURL=CustomMarkView.js.map