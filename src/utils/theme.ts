import '@emotion/react'

export const lightTheme = {
    colors: {
        primary: 'hotpink'
    }
}

export const darkTheme = {
    colors: {
        primary: 'yellow'
    }
}

declare module '@emotion/react' {
    export interface Theme {
      colors: {
        primary: string
      }
    }
  }