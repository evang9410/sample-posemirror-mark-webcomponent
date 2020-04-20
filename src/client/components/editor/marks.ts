import { DOMOutputSpec, MarkSpec } from 'prosemirror-model';
// :: Object [Specs](#model.MarkSpec) for the marks in the schema.

export const marks: MarkSpec = {
        // :: MarkSpec A link. Has `href` and `title` attributes. `title`
    // defaults to the empty string. Rendered and parsed as an `<a>`
    // element.
    myCustomMark: {
        parseDOM: [
            {
                tag: 'my-custom-mark',
                getAttrs(dom: HTMLElement): { [attr: string]: string } {
                    return {
                        'reflected-attribute': dom.getAttribute('reflected-attribute'),
                    };
                },
            },
        ],
        attrs: {
            'reflected-attribute': { default: 'reflected' },
        },
        toDOM(mark: MarkSpec): DOMOutputSpec {
            // console.log('ProseMirror:', 'toDOM(mark: MarkSpec)', ' mark: ', mark);
            // const attrs: { [attr: string]: string } = {};

            // if(mark.attrs['reflected-attribute']) {
            //     //@ts-ignore
            //     attrs['reflected-attribute'] = mark.attrs['reflected-attribute'];
            // }
            return ['my-custom-mark', 0];
        },
    },
}


/*


const getAttrs = (dom: HTMLElement): { [attr: string]: string } => {
    return {
        'view-mode': dom.getAttribute('view-mode') || 'editing',
    };
};

const toDOM = (): DOMOutputSpec => {
    return ['xray-trigger', 0];
};

export const xrayTrigger: MarkSpec = {
    attrs: {
        'view-mode': { default: 'editing' },
    },
    parseDOM: [
        {
            tag: 'xray-trigger',
            getAttrs,
        },
    ],
    toDOM,
};

*/