type screenType = 'sp' | 'tab' | 'lp'

/**
 * 現在のスクリーンサイズを元に、スクリーンタイプを返す
 * @return スクリーンタイプ(sp, tab, lp)
 */
export const useScreenType = () => {
  const screenType = ref<screenType>('lp')

  const checkScreenType = () => {
    if (useMediaQuery('(min-width: 1024px)').value) {
      screenType.value = 'lp'
    } else if (useMediaQuery('(min-width: 600px) and (max-width:1024px)').value) {
      screenType.value = 'tab'
    } else {
      screenType.value = 'sp'
    }
  }

  checkScreenType()
  useEventListener(window, 'resize', checkScreenType)

  return { screenType }
}
