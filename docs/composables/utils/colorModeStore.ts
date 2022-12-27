export const useColorModeStore = defineStore('colorMode', () => {
  const colorStore = useColorStore()

  /* -- state -- */
  const colorMode = useColorMode()

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

  watch(colorMode, (newVal) => {
    if (newVal === 'dark') {
      colorStore.setDarkTheme()
    } else {
      colorStore.setLightTheme()
    }
  })

  if (colorMode.value === 'dark') {
    colorStore.setDarkTheme()
  } else {
    colorStore.setLightTheme()
  }

  return {
    colorMode: readonly(colorMode),
    setLight,
    setDark,
    switchMode
  }
})
