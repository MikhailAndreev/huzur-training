import { createMuiTheme } from '@material-ui/core';
// import { MuseoSansCyrl_100 } from '../fonts/fontsList';
import MuseoSansCyrl from '../fonts/MuseoSansCyrl-100/MusenoSansCyrl.woff';

// Palette
interface surface {
  HighEmphasis: string;
  MediumEmphasis: string;
  LowEmphasis: string;
  Background: string;
  Stroke: string;
  Filled: string;
  Disabled: string;
  Light: string;
}

declare module '@material-ui/core/styles/createPalette' {
  interface Palette {
    surface: Partial<surface>;
    prim: Palette['grey'];
  }
  interface PaletteOptions {
    surface: Partial<surface>;
    prim: PaletteOptions['grey'];
  }
}

// Fonts
const MuseoSansCyrl_100: any = {
  fontFamily: 'MuseoSansCyrl',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    local('MuseoSansCyrl'),
    local('MuseoSansCyrl-Regular'),
    url(${MuseoSansCyrl}) format('woff')
  `,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

export const theme = createMuiTheme({
  breakpoints: {
    values: {
      xxs: 0,
      xs: 375,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1208 + 48,
    },
  },
  palette: {
    primary: { main: '#FE8157' },
    secondary: { main: '#009688' },
    error: { main: '#B00020' },
    prim: { 50: '#FFF0EB', 100: '#FFD9CD', 200: '#FFC0AB', 300: '#FEA789', 600: '#FE794F', 900: '#FD512C' },
    surface: {
      HighEmphasis: 'rgba(0, 0, 0, 0.87)',
      MediumEmphasis: 'rgba(0, 0, 0, 0.6)',
    },
  },
  typography: {
    fontFamily: "'MuseoSansCyrl', sans-serif",
    h1: {},
    h2: {
      fontStyle: '300',
      fontSize: 60,
      lineHeight: '72px',
      letterSpacing: '-0.5px',
    },
    h3: {
      fontStyle: '500',
      fontSize: 48,
      lineHeight: '64px',
    },
    h4: {
      fontStyle: '500',
      fontSize: 34,
      lineHeight: '48px',
      letterSpacing: '0.25px',
    },
    h5: {
      fontStyle: '500',
      fontSize: 26,
      lineHeight: '32px',
    },
    h6: {
      fontStyle: '500',
      fontSize: 20,
      lineHeight: '24px',
      letterSpacing: '0.2px',
    },
    body1: {
      fontStyle: '500',
      fontSize: 16,
      lineHeight: '24px',
      letterSpacing: '0.25px',
    },
    body2: {
      fontStyle: '500',
      fontSize: 14,
      lineHeight: '24px',
      letterSpacing: '0.25px',
    },
    subtitle1: {
      fontStyle: '500',
      fontSize: 16,
      lineHeight: '24px',
      letterSpacing: '0.5px',
    },
    subtitle2: {
      fontStyle: '500',
      fontSize: 14,
      lineHeight: '20px',
      letterSpacing: '0.3px',
    },
    button: {
      fontStyle: '700',
      fontSize: 14,
      lineHeight: '16px',
      letterSpacing: '0.5px',
    },
    caption: {
      fontStyle: '500',
      fontSize: 12,
      lineHeight: '16px',
      letterSpacing: '0.3px',
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          minWidth: 375,
          backgroundColor: '#fff !important',
        },
        main: {
          flex: '1 0 auto',
        },
        '@font-face': [MuseoSansCyrl_100],
        '#root': {
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        },
        '.router-link': {
          textDecoration: 'none',
        },
      },
    },
    MuiButton: {
      text: {
        backgroundColor: 'transparent',
        transition: 'all .4s ease',
        '&:hover': {
          color: '',
          backgroundColor: 'transparent',
        },
      },
      textPrimary: {
        color: '',
        '&:hover': {
          color: '',
          backgroundColor: 'transparent',
        },
      },
      textSecondary: {
        color: '',
        '&:hover': {
          color: '',
          backgroundColor: 'transparent',
        },
      },
    },
    // MuiAutocomplete: {
    //   root: {}
    // }
  },
});
