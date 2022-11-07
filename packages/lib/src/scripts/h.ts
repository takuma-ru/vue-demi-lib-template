import {
  h,
  VNode,
  VNodeArrayChildren,
  VNodeRef,
} from 'vue-demi'

import { StyleValueType } from '~/types/StyleValueType'
import { HtmlTagType } from '~/types/htmlTag'

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
  onClick?: (e: MouseEvent) => void;
  onChange?: (e: Event) => void;
  onInput?: (e: Event) => void;
  onSubmit?: (e: Event) => void;
  onKeydown?: (e: KeyboardEvent) => void;
  onKeyup?: (e: KeyboardEvent) => void;
  onKeypress?: (e: KeyboardEvent) => void;
  onFocus?: (e: FocusEvent) => void;
  onBlur?: (e: FocusEvent) => void;
  onError?: (e: Event) => void;
  onDblclick?: (e: MouseEvent) => void;
  onContextmenu?: (e: MouseEvent) => void;
  onReset?: (e: Event) => void;
  onMousedown?: (e: MouseEvent) => void;
  onMouseup?: (e: MouseEvent) => void;
  onMouseover?: (e: MouseEvent) => void;
  onMouseleave?: (e: MouseEvent) => void;
  onMouseenter?: (e: MouseEvent) => void;
  onMouseout?: (e: MouseEvent) => void;
  onMousemove?: (e: MouseEvent) => void;
  onWheel?: (e: WheelEvent) => void;
  onScroll?: (e: UIEvent) => void;
  onSelect?: (e: Event) => void;
  style?: StyleValueType;
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

  const H = (type: HtmlTagType, props?: RawProps | null, children?: RawChildren | RawSlots): VNode =>  {
  return h(
    type,
    {
      on: {
        click: props?.onClick,
        chang: props?.onChange,
        input: props?.onInput,
        submit: props?.onSubmit,
        keydown: props?.onKeydown,
        keyup: props?.onKeyup,
        keypress: props?.onKeypress,
        focus: props?.onFocus,
        blur: props?.onBlur,
        error: props?.onError,
        dblclick: props?.onDblclick,
        contextmenu: props?.onContextmenu,
        reset: props?.onReset,
        mousedown: props?.onMousedown,
        mouseup: props?.onMouseup,
        mouseover: props?.onMouseover,
        mouseleave: props?.onMouseleave,
        mouseenter: props?.onMouseenter,
        mouseout: props?.onMouseout,
        mousemove: props?.onMousemove,
        wheel: props?.onWheel,
        scroll: props?.onScroll,
        select: props?.onSelect,
      },
      ...props,
    },
    children,
  )
}

export { H as h }
