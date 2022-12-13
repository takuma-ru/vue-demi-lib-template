import { IconNameType } from "~/types/icon/iconName"

/**
 * path
 */
export const usePath = () => {
  interface IPath {
    title: string
    icon: IconNameType
    paths: Array<{
      path: string
      pathName: string
    }>
  }

  const pathList: Array<IPath> = [
    {
      title: 'Get Started',
      icon: 'start',
      paths: [
        { pathName: 'vue2', path: '/get-started/vue2' },
        { pathName: 'vue2.7, vue3', path: '/get-started/vue3' },
        { pathName: 'nuxt2', path: '/get-started/nuxt2' },
        { pathName: 'nuxt3', path: '/get-started/nuxt3' },
      ]
    }
  ]

  const isNowPath = (path: string): boolean => {
    const route = useRoute()

    console.log(route.fullPath)

    return route.fullPath === path
  }

  return {
    pathList,
    isNowPath
  }
}
