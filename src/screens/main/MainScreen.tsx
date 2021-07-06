import { Container, Typography, Box, makeStyles, Theme, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';

import main_bg from '../../assets/images/main-background.png';
import { useCommonStyles } from '../../styles/commonStyles';

const MainScreen: React.FC = observer(() => {
  const classes = useStyles();
  const commonClasses = useCommonStyles();

  return (
    <Container maxWidth="xl">
      <Box height="100vh">
        <Box className={classes.mainBg}>
          <img src={main_bg} alt="" />
        </Box>
        <Box className={classes.mainWrap}>
          <Box mb={4}>
            <Typography className={classes.mainTitle} variant="h1">
              Интернет-мәдресә
            </Typography>
          </Box>

          <Box display="flex">
            <Box mr={5}>
              <Link to="/login" className={commonClasses.routerLink}>
                <Button className={classes.loginBtn} variant="contained" color="primary">
                  Керергә
                </Button>
              </Link>
            </Box>

            <Box>
              <Link to="/register" className={commonClasses.routerLink}>
                <Button className={classes.registerBtn} variant="text" color="secondary">
                  Теркәлергә
                </Button>
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
});

const useStyles = makeStyles((theme: Theme) => ({
  mainBg: {
    position: 'absolute',
    width: '100%',
    height: 1048,
    top: 0,
    left: 0,
    zIndex: -1,
    [theme.breakpoints.down('lg')]: {
      height: '100%',
    },
    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
  },
  mainTitle: {
    color: '#fff',
  },
  mainWrap: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    height: '100%',
    padding: 20,
    [theme.breakpoints.down('lg')]: {
      padding: '20px 162px',
    },
  },
  loginBtn: {
    borderRadius: 19.2,
    padding: '14px 46px',
  },
  registerBtn: {
    textDecoration: 'underline',
  },
}));

export default MainScreen;
