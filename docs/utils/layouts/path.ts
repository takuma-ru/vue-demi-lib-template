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
      name: string
    }>
  }

  const pathList: Array<IPath> = [
    {
      title: 'Get Started',
      icon: 'start',
      paths: [
        { name: 'vue2', path: '/get-started/vue2' },
        { name: 'vue2.7, vue3', path: '/get-started/vue3' },
        { name: 'nuxt2', path: '/get-started/nuxt2' },
        { name: 'nuxt3', path: '/get-started/nuxt3' },
      ]
    },
    {
      title: 'Components',
      icon: 'category',
      paths: [
        { name: 'lib', path: '/components/lib' },
      ]
    }
  ]

  const isNowPath = (path: string): boolean => {
    const route = useRoute()

    return route.fullPath === path
  }

  return {
    pathList,
    isNowPath
  }
}
