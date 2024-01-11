import '@emotion/react'
export const lightTheme = {
  fontFace: {
    fontFamily: 'Roboto',
    src: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap',
  },
  typography: {
    h1: {
      "font-size": '2rem',
      "font-weight": 500,
    },
    h2: {
      "font-size": '1.75rem',
      "font-weight": 500,
    },
    h3: {
      "font-size": '1.5rem',
      "font-weight": 500,
    },
    h4: {
      "font-size": '1.25rem',
      "font-weight": 500,
    },
    h5: {
      "font-size": '1.125rem',
      "font-weight": 500,
    },
    h6: {
      "font-size": '1rem',
      "font-weight": 500,
    },
    subtitle1: {
      "font-size": '1rem',
      "font-weight": 400,
    },
    subtitle2: {
      "font-size": '0.875rem',
      "font-weight": 400,
    },
    body1: {
      "font-size": '1rem',
      "font-weight": 400,
    },
    body2: {
      "font-size": '0.875rem',
      "font-weight": 400,
    },
    button: {
      "font-size": '0.875rem',
      "font-weight": 500,
      "text-transform": 'none',
    },
    caption: {
      "font-size": '0.75rem',
      "font-weight": 400,
    },
    overline: {
      "font-size": '0.75rem',
      "font-weight": 500,
      "text-transform": 'none',
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
        "font-size": string;
        "font-weight": number;
      };
      h2: {
        "font-size": string;
        "font-weight": number;
      };
      h3: {
        "font-size": string;
        "font-weight": number;
      };
      h4: {
        "font-size": string;
        "font-weight": number;
      };
      h5: {
        "font-size": string;
        "font-weight": number;
      };
      h6: {
        "font-size": string;
        "font-weight": number;
      };
      subtitle1: {
        "font-size": string;
        "font-weight": number;
      };
      subtitle2: {
        "font-size": string;
        "font-weight": number;
      };
      body1: {
        "font-size": string;
        "font-weight": number;
      };
      body2: {
        "font-size": string;
        "font-weight": number;
      };
      button: {
        "font-size": string;
        "font-weight": number;
        "text-transform": string;
      };
      caption: {
        "font-size": string;
        "font-weight": number;
      };
      overline: {
        "font-size": string;
        "font-weight": number;
        "text-transform": string;
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

