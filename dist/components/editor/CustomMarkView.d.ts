import { Decoration, EditorView, NodeView } from 'prosemirror-view';
import { Node as ProseNode } from 'prosemirror-model';
import { Plugin } from 'prosemirror-state';
export declare class CustomMarkView implements NodeView {
    dom: HTMLElement;
    node: ProseNode;
    view: EditorView;
    getPos: () => number;
    decorations: Decoration[];
    constructor(node: ProseNode, view: EditorView, getPos: () => number, decorations: Decoration[]);
    protected observeMutations(): void;
    updateProseNodeAttributes(mutations: MutationRecord[]): void;
    stopEvent(): boolean;
    static getPlugin(): Plugin;
}
