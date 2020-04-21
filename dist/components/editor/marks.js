// :: Object [Specs](#model.MarkSpec) for the marks in the schema.
let counter = 0;
// const getAttrs = (dom: HTMLElement): { [attr: string]: string } => {
//     return {
//         'reflected-attribute': dom.getAttribute('reflected-attribute') || 'default',
//     };
// };
// const myCustomMark: MarkSpec = {
//     parseDOM: [
//         {
//             tag: 'my-custom-mark',
//             getAttrs,
//             preserveWhitespace: true
//         },
//     ],
//     attrs: {
//         'reflected-attribute': { default: 'default' },
//     },
//     getAttrs,
//     toDOM(mark: MarkSpec): DOMOutputSpec {
//         console.log('ProseMirror:', 'toDOM(mark: MarkSpec)', ' mark: ', mark);
//         counter++;
//          if (counter > 100){throw new Error('oups'); }
//          const attrs: { [attr: string]: string } = {}
//         if(mark.attrs['reflected-attribute']) {
//             //@ts-ignore
//             attrs['reflected-attribute'] = mark.attrs['reflected-attribute'];
//         }
//         return ['my-custom-mark', attrs];
//     }
// }
const myCustomMark = {
    attrs: {
        'reflected-attribute': { default: 'default' },
    },
    parseDOM: [
        {
            tag: 'my-custom-mark[reflected-attribute]',
            getAttrs(dom) {
                return { 'reflected-attribute': dom.getAttribute('reflected-attribute') };
            },
        },
    ],
    toDOM(node) {
        console.log('ProseMirror:', 'toDOM(mark: MarkSpec)', ' mark: ', node);
        counter++;
        if (counter > 100) {
            throw new Error('oups');
        }
        return ['my-custom-mark', node.attrs, 0];
    },
};
export const marks = {
    // :: MarkSpec A link. Has `href` and `title` attributes. `title`
    // defaults to the empty string. Rendered and parsed as an `<a>`
    // element.
    myCustomMark,
};
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
//# sourceMappingURL=marks.js.map