export const useNavigationControlStore = () => {
  /* -- state -- */
  const isOpenDrawer = useState('isOpenDrawer', () => false)

  /* -- mutation -- */
  const updateIsOpenDrawer = (state: boolean) => {
    isOpenDrawer.value = state
  }

  /* -- action -- */
  const switchIsOpenDrawer = () => {
    updateIsOpenDrawer(!isOpenDrawer.value)
  }

  /* -- other -- */

  return {
    isOpenDrawer: readonly(isOpenDrawer),
    updateIsOpenDrawer,
    switchIsOpenDrawer
  }
}
