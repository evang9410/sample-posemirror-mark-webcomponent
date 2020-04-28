import { MarkSpec } from 'prosemirror-model';

const myCustomMark: MarkSpec = {
    attrs: {
        'reflected-attribute': { default: 'default' },
    },
    parseDOM: [
        {
            tag: 'my-custom-mark[reflected-attribute]',
        },
    ],
};

export const marks: { [key: string]: MarkSpec } = {
    myCustomMark,
};
