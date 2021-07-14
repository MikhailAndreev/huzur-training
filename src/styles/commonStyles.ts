import { makeStyles, Theme } from '@material-ui/core';

export const useCommonStyles = makeStyles((theme: Theme) => ({
  routerLink: {
    textDecoration: 'none',
  },
  lightOnSurface: {
    color: 'rgba(0, 0, 0, 0.38)',
  },
  mediumEmphasisOnLight: {
    color: 'rgba(0, 0, 0, 0.6)',
  },
}));
