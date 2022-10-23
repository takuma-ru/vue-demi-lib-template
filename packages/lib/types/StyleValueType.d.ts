import * as CSS from 'csstype'

type CSSProperties = CSS.Properties<string | number>
export type StyleValueType = CSSProperties | Array<StyleValueType>
