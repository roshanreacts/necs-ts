import '@emotion/react'

export const lightTheme = {
  fontFace: {
    fontFamily: 'Roboto',
    src: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap',
  },
  typography: {
    h1: {
      fontSize: '2rem',
      fontWeight: 500,
    },
    h2: {
      fontSize: '1.75rem',
      fontWeight: 500,
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 500,
    },
    h4: {
      fontSize: '1.25rem',
      fontWeight: 500,
    },
    h5: {
      fontSize: '1.125rem',
      fontWeight: 500,
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 500,
    },
    subtitle1: {
      fontSize: '1rem',
      fontWeight: 400,
    },
    subtitle2: {
      fontSize: '0.875rem',
      fontWeight: 400,
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 400,
    },
    button: {
      fontSize: '0.875rem',
      fontWeight: 500,
      textTransform: 'none',
    },
    caption: {
      fontSize: '0.75rem',
      fontWeight: 400,
    },
    overline: {
      fontSize: '0.75rem',
      fontWeight: 500,
      textTransform: 'none',
    }
  },
  colors: {
    primary: 'hotpink',
    text: '#000',
    input: {
      border: '#0056b3',
      background: '#0056b3',
      placeholder: '#A9A9A9',
      label: '#000'
    }
  }
}

export const darkTheme = {
  colors: {
    primary: 'yellow'
  }
}

declare module '@emotion/react' {
  export interface Theme {
    fontFace: {
      fontFamily: string;
      src: string;
    };
    typography: {
      h1: {
        fontSize: string;
        fontWeight: number;
      };
      h2: {
        fontSize: string;
        fontWeight: number;
      };
      h3: {
        fontSize: string;
        fontWeight: number;
      };
      h4: {
        fontSize: string;
        fontWeight: number;
      };
      h5: {
        fontSize: string;
        fontWeight: number;
      };
      h6: {
        fontSize: string;
        fontWeight: number;
      };
      subtitle1: {
        fontSize: string;
        fontWeight: number;
      };
      subtitle2: {
        fontSize: string;
        fontWeight: number;
      };
      body1: {
        fontSize: string;
        fontWeight: number;
      };
      body2: {
        fontSize: string;
        fontWeight: number;
      };
      button: {
        fontSize: string;
        fontWeight: number;
        textTransform: string;
      };
      caption: {
        fontSize: string;
        fontWeight: number;
      };
      overline: {
        fontSize: string;
        fontWeight: number;
        textTransform: string;
      };
    };
    colors: {
      primary: string;
      text: string;
      input: {
        border: string;
        background: string;
        placeholder: string;
        label: string;
      };
    };
  }
}