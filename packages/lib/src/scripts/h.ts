import {
  h,
  VNode,
  VNodeArrayChildren,
  VNodeRef,
} from 'vue-demi'

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
}
;declare type RawProps = VNodeProps & {
  __v_isVNode?: never;
  [Symbol.iterator]?: never;
} & Record<string, unknown>;

declare type RawChildren = string | number | boolean | VNode | VNodeArrayChildren | (() => unknown);

declare type RawSlots = {
  [name: string]: unknown;
  $stable?: boolean;
};

const H = (type: string, props?: RawProps | null, children?: RawChildren | RawSlots): VNode =>  {
  return h(type, props, children)
}

export { H as h }
