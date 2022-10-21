import * as CSS from 'csstype'

interface CSSProperties extends CSS.Properties<string | number> {}
export type StyleValueType = CSSProperties | Array<StyleValueType>
