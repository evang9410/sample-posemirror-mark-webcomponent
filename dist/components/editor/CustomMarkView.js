import { Plugin } from 'prosemirror-state';
export class CustomMarkView {
    constructor(node, view, getPos, decorations) {
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
    observeMutations() {
        const observer = new MutationObserver((mutations) => {
            this.updateProseNodeAttributes(mutations);
        });
        observer.observe(this.dom, { attributes: true, attributeOldValue: true, childList: true });
    }
    updateProseNodeAttributes(mutations) {
        mutations.forEach((mutation) => {
            this.node.attrs[mutation.attributeName] = this.dom.getAttribute(mutation.attributeName);
        });
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