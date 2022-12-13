export interface ColorGradationsInterface {
  default: string
  lighten: {
    [index: number]: string
  }
  darken: {
    [index: number]: string
  }
}

export interface ColorsInterface {
  white: ColorGradationsInterface
  black: ColorGradationsInterface
  red: ColorGradationsInterface
  blue: ColorGradationsInterface
  yellow: ColorGradationsInterface
  green: ColorGradationsInterface
  theme: {
    text: string
    subText: string
    background: string
    lighten: {
      [index: number]: string
    }
    darken: {
      [index: number]: string
    }
    complementaryLighten: {
      [index: number]: string
    }
    complementaryDarken: {
      [index: number]: string
    }
  }
}