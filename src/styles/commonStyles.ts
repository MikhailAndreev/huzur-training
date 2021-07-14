import { makeStyles, Theme } from '@material-ui/core';

export const useCommonStyles = makeStyles((theme: Theme) => ({
  routerLink: {
    textDecoration: 'none',
  },
  profilePaperInfo: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '56px 24px 20px',
  },
  profileImgWrap: {
    width: 128,
    height: 128,
    marginBottom: 40,
  },
  avatarImg: {
    width: '100%',
    height: '100%',
  },
  lightOnSurface: {
    color: 'rgba(0, 0, 0, 0.38)',
  },
  mediumEmphasisOnLight: {
    color: 'rgba(0, 0, 0, 0.6)',
  },
}));
