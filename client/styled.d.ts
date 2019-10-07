import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    meliColor: string,
    bgColor: string,
    lv1Color: string,
    lv2Color: string,
    lv3Color: string,
    shopColor: string,
    paddingBase: string,
    paddingLarge: string,
    borderRadius: string,
    limits: BaseThemedCssFunction<T extends {
      'max-width': string,
      width: string,
      margin: string,
    }>`

    `
  }
}
