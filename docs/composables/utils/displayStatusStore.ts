/**
 * 現在のスクリーンの状態を元に動作する変数・関数群
 */
export const useDisplayStatusStore = defineStore('displayStatus', () => {
  const breakpoints = useBreakpoints({
    sm: 640,
    lp: 1025 /* 864 + 240 + 240 */
  })

  /**
   * `displaySize <= 640px` かどうかのフラグ
   */
  const sm = breakpoints.smallerOrEqual('sm')
  /**
   * `640px < displaySize <= 1024` かどうかのフラグ
   */
  const lp = breakpoints.between('sm', 'lp')
  /**
   * `displaySize > 1024` かどうかのフラグ
   */
  const pc = breakpoints.lp

  /**
   * 現在のスクリーンタイプ
   * @return `'sm' | 'lp' | 'pc'`
   */
  const displaySize = useState('displayType', () => computed(() => {
    return sm.value ? 'sm' : lp.value ? 'lp' : 'pc'
  }))

  /**
   * スクリーンタイプに応じてCSSを返す`<style>`v-bind向け関数
   * @example
   * v-bind("displayTypeMixin({ sm: 'red', lp: 'blue', pc: 'green' })")
   * @param sm `sm`の場合に適用させたいCSS
   * @param lp `lp`の場合に適用させたいCSS
   * @param pc `pc`の場合に適用させたいCSS
   * @returns スクリーンタイプに応じた値
   */
  const displaySizeMixin = ({ sm, lp, pc }: {sm: string, lp: string, pc: string}) => {
    switch (displaySize.value) {
      case 'sm':
        return sm
      case 'lp':
        return lp
      case 'pc':
        return pc
    }
  }

  return {
    sm: readonly(sm),
    lp: readonly(lp),
    pc: readonly(pc),
    displaySize: readonly(displaySize),
    displaySizeMixin
  }
})
