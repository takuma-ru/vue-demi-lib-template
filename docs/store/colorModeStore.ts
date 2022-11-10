import { useColorStore } from './colorStore'

export const useColorModeStore = () => {
  useColorStore()

  /* -- state -- */
  const colorMode = useColorMode()
  // const colorMode = useState<ColorModeType>('colorMode', () => ('dark'))

  /* -- actions -- */
  const setLight = () => {
    colorMode.value = 'light'
  }

  const setDark = () => {
    colorMode.value = 'dark'
  }

  const switchMode = () => {
    colorMode.value = colorMode.value === 'dark' ? 'light' : 'dark'
  }

  const setSytemMode = () => {
    const colorMode = useColorMode()
    if (colorMode.value === 'dark') {
      colorMode.value = 'dark'
      useColorStore().setDarkTheme()
    } else {
      colorMode.value = 'light'
      useColorStore().setLightTheme()
    }
  }

  return {
    colorMode: readonly(colorMode),
    setLight,
    setDark,
    switchMode,
    setSytemMode
  }
}