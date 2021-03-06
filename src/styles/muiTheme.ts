import { createMuiTheme } from '@material-ui/core';

import { museoSansCyrl100, museoSansCyrl300, museoSansCyrl500, museoSansCyrl700, museoSansCyrl900 } from './fonts';

export const theme = createMuiTheme({
  breakpoints: {
    values: {
      xxs: 320,
      xs: 375,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1120 + 48,
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
    h1: {
      fontSize: 72,
      lineHeight: '72px',
      fontWeight: 600,
      letterSpacing: '0.5px',
    },
    h4: {
      fontSize: 34,
      lineHeight: '48px',
      fontWeight: 400,
      letterSpacing: '0.25px',
    },
    h5: {
      fontSize: 26,
      lineHeight: '32px',
      fontWeight: 400,
      letterSpacing: '0.25px',
    },
    h6: {
      fontSize: 20,
      lineHeight: '24px',
      fontWeight: 400,
      letterSpacing: '0.2px',
    },
    body1: {
      fontSize: 16,
      lineHeight: '24px',
      fontWeight: 400,
      letterSpacing: '0.25px',
    },
    body2: {
      fontSize: 14,
      lineHeight: '24px',
      fontWeight: 400,
      letterSpacing: '0.25px',
    },
    button: {
      fontSize: 14,
      lineHeight: '16px',
      fontWeight: 600,
      letterSpacing: '0.5px',
      textTransform: 'none',
    },
    caption: {
      fontSize: 12,
      lineHeight: '16px',
      fontWeight: 400,
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
          display: 'flex',
          flex: '1 0 auto',
        },
        // @ts-ignore
        '@font-face': [museoSansCyrl100, museoSansCyrl300, museoSansCyrl500, museoSansCyrl700, museoSansCyrl900],
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

    MuiPaper: {
      root: {
        overflow: 'hidden',
        transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, transform 0.3s ease, border 0.3s ease',
      },
      outlined: {
        borderRadius: 16,
      },
    },

    MuiButton: {
      root: {
        height: 40,
        padding: '0 32px',
        borderRadius: 8,
        transition: 'all 0.3s ease-out',
      },
      contained: {
        boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.05), 0px 3px 8px rgba(0, 0, 0, 0.04), 0px 1px 9px rgba(0, 0, 0, 0.08)',
      },
      containedPrimary: {
        color: '#FFFFFF',
        '&:hover': {
          backgroundColor: '#FE8157',
        },
      },
      outlined: {
        boxShadow: 'none',
      },
      outlinedPrimary: {
        border: '1px solid #FD512C',
        boxShadow: 'none',
        color: '#FE8157',
        '&:hover': {
          opacity: 0.7,
        },
      },
      textPrimary: {
        '&:hover': {
          opacity: 0.7,
        },
      },
      textSecondary: {
        color: '#fff',
        boxShadow: 'none',
        '&:hover': {
          opacity: 0.7,
        },
      },
    },

    MuiFormLabel: {
      root: {
        display: 'block',
        fontSize: 14,
        lineHeight: '20px',
        fontWeight: 400,
        marginBottom: 4,
        letterSpacing: '0.3px',
        color: 'rgba(0, 0, 0, 0.6)',
      },
    },

    MuiOutlinedInput: {
      root: {
        padding: '0',
        borderRadius: '8px',
        borderColor: 'rgba(0, 0, 0, 0.12)',

        '& .MuiOutlinedInput-notchedOutline': {
          borderWidth: '1px !important',
          borderColor: 'rgba(0, 0, 0, 0.12) !important',
        },
        '& .MuiOutlinedInput-input': {
          padding: '10.5px 12px',
        },
      },
    },

    MuiLinearProgress: {
      root: {
        height: 8,
        borderRadius: 10,
        marginTop: 4,
      },
      colorPrimary: {
        backgroundColor: '#B2DFDB',
      },
      bar: {
        borderRadius: 16,
        backgroundColor: '#009688',
      },
    },

    MuiAccordionSummary: {
      root: {
        padding: '0',
        '& .MuiAccordionSummary-content': {
          order: 1,
        },
      },
      expandIcon: {
        margin: '16px 12px',
      },
    },
  },
});
