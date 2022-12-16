type ColorModeType = 'light' | 'dark'

export const useColorModeStore = () => {
  useColorStore()

  /* -- state -- */
  const colorMode = useState<ColorModeType>('colorMode', () => 'dark')

  /* -- actions -- */
  const setLight = () => {
    colorMode.value = 'light'
    localStorage.setItem('colorMode', colorMode.value)
  }

  const setDark = () => {
    colorMode.value = 'dark'
    localStorage.setItem('colorMode', colorMode.value)
  }

  const switchMode = () => {
    colorMode.value = colorMode.value === 'dark' ? 'light' : 'dark'
    localStorage.setItem('colorMode', colorMode.value)
  }

  const setSytemMode = () => {
    const isDarkMode = usePreferredDark()

    if (isDarkMode.value) {
      colorMode.value = 'dark'
      useColorStore().setDarkTheme()
    } else {
      colorMode.value = 'light'
      useColorStore().setLightTheme()
    }
  }

  watch(colorMode, (newVal) => {
    if (newVal === 'dark') {
      useColorStore().setDarkTheme()
    } else {
      useColorStore().setLightTheme()
    }
  })

  return {
    colorMode: readonly(colorMode),
    setLight,
    setDark,
    switchMode,
    setSytemMode
  }
}