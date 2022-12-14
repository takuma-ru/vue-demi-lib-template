import { VNode, VNodeArrayChildren, VNodeRef } from 'vue-demi';
import { StyleValueType } from '~/types/StyleValueType';
import { HtmlTagType } from '~/types/htmlTag';
declare type VNodeMountHook = (vnode: VNode) => void;
declare type VNodeUpdateHook = (vnode: VNode, oldVNode: VNode) => void;
export declare type VNodeProps = {
    key?: string | number | symbol;
    ref?: VNodeRef;
    ref_for?: boolean;
    ref_key?: string;
    onVnodeBeforeMount?: VNodeMountHook | VNodeMountHook[];
    onVnodeMounted?: VNodeMountHook | VNodeMountHook[];
    onVnodeBeforeUpdate?: VNodeUpdateHook | VNodeUpdateHook[];
    onVnodeUpdated?: VNodeUpdateHook | VNodeUpdateHook[];
    onVnodeBeforeUnmount?: VNodeMountHook | VNodeMountHook[];
    onVnodeUnmounted?: VNodeMountHook | VNodeMountHook[];
    class?: string | number;
    onClick?: () => void;
    onChange?: () => void;
    onInput?: () => void;
    onSubmit?: () => void;
    onKeydown?: () => void;
    onKeyup?: () => void;
    onKeypress?: () => void;
    onFocus?: () => void;
    onBlur?: () => void;
    onError?: () => void;
    onDblclick?: () => void;
    onContextmenu?: () => void;
    onReset?: () => void;
    onMousedown?: () => void;
    onMouseup?: () => void;
    onMouseover?: () => void;
    onMouseleave?: () => void;
    onMouseenter?: () => void;
    onMouseout?: () => void;
    onMousemove?: () => void;
    onWheel?: () => void;
    onScroll?: () => void;
    onSelect?: () => void;
    style?: StyleValueType;
};
declare type RawProps = VNodeProps & {
    __v_isVNode?: never;
    [Symbol.iterator]?: never;
} & Record<string, unknown>;
declare type RawChildren = string | number | boolean | VNode | VNodeArrayChildren | (() => unknown);
declare type RawSlots = {
    [name: string]: unknown;
    $stable?: boolean;
};
declare const H: (type: HtmlTagType, props?: RawProps | null, children?: RawChildren | RawSlots) => VNode;
export { H as h };
