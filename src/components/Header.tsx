import { useEffect, useState } from 'react';
import {
  Box,
  Theme,
  makeStyles,
  AppBar,
  Container,
  IconButton,
  useTheme,
  Drawer,
  Toolbar,
  Divider,
  List,
  ListItem,
  Grid,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { NavLink } from 'react-router-dom';

import { useAllMQ } from '../base/hooks/useAllMQ';
import { useCommonStyles } from '../styles/commonStyles';
import logo_white from '../assets/images/logo-white.png';
import logo from '../assets/images/logo.png';

interface IHeaderLink {
  title: string;
  route: string;
}

const links: IHeaderLink[] = [
  { title: 'Программа обучения', route: '/courses' },
  { title: 'Профиль', route: '/profile' },
  { title: 'О проекте', route: '/about-project' },
];

const Header: React.FC = observer(() => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const { isMD } = useAllMQ();
  const commonClasses = useCommonStyles();
  const [isMainPage, setIsMainPage] = useState<boolean>(false);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      setIsMainPage(true);
    } else {
      setIsMainPage(false);
    }
  }, [location]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleGoToHome = () => {
    // console.log('go home');
  };

  const renderHeaderLinks = () => {
    return (
      <>
        {links.map((item, index) => {
          return (
            <Box key={index} display="inline-block" ml={{ lg: 2, xl: 4 }}>
              <NavLink
                activeClassName="selected"
                className={clsx(commonClasses.routerLink, classes.headerLink)}
                to={item.route}
              >
                {item.title}
              </NavLink>

              {/* <Link className={clsx(commonClasses.routerLink, classes.headerLink)} to={item.route}>
                {item.title}
              </Link> */}
            </Box>
          );
        })}
      </>
    );
  };

  return (
    <Container maxWidth="xl">
      <AppBar
        position="relative"
        elevation={0}
        className={clsx(classes.appBar, isMainPage && classes.headerWhite, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <Grid container alignItems="center">
            <Grid item xs={4}>
              <Box maxWidth={{ xxs: 200, md: 224 }}>
                <Link to="/" className={commonClasses.routerLink} onClick={handleGoToHome}>
                  <Box className={classes.logoWrap}>
                    <img width="100%" height="100%" src={isMainPage ? logo_white : logo} alt="" />
                  </Box>
                </Link>
              </Box>
            </Grid>

            <Grid item xs={8} className={classes.customGrid}>
              {isMD ? (
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="end"
                  onClick={handleDrawerOpen}
                  className={clsx(open && classes.hide)}
                >
                  <MenuIcon />
                </IconButton>
              ) : (
                renderHeaderLinks()
              )}
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronRightIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          {links.map((item, index) => (
            <ListItem button key={index}>
              <NavLink
                activeClassName="selected"
                className={clsx(commonClasses.routerLink, classes.headerLink)}
                to={item.route}
              >
                {item.title}
              </NavLink>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Container>
  );
});

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) => ({
  appBar: {
    padding: '20px 0',
    background: 'transparent',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    '& .MuiToolbar-root': {
      padding: 0,
    },
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  title: {
    flexGrow: 1,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },

  headerLink: {
    fontSize: 18,
    lineHeight: '24px',
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '2.2px',
    color: 'inherit',
    whiteSpace: 'nowrap',
    [theme.breakpoints.down('lg')]: {
      fontSize: 14,
    },
    '&:hover': {
      opacity: 0.7,
    },
    '&.selected': {
      color: theme.palette.primary.main,
    },
  },

  customGrid: {
    display: 'flex',
    justifyContent: 'flex-end',
    '& .MuiIconButton-root': {
      marginRight: 0,
    },
  },
  headerWhite: {
    color: '#fff',
  },

  logoWrap: {
    width: 72,
    height: 64,
    [theme.breakpoints.down('sm')]: {
      width: 62,
      height: 54,
    },
  },
}));

export default Header;
