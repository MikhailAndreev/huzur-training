import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Theme,
  makeStyles,
  AppBar,
  IconButton,
  useTheme,
  Drawer,
  Toolbar,
  Divider,
  List,
  ListItem,
  ListItemText,
  Grid,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

import { useAllMQ } from '../base/hooks/useAllMQ';
import { useCommonStyles } from '../styles/commonStyles';
import logo_white from '../assets/images/logo-white.png';

const links = [
  { title: 'Программа обучения', route: '/education' },
  { title: 'Новости', route: '/news' },
  { title: 'О проекте', route: '/about-project' },
];

const Header: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const { isMD } = useAllMQ();
  const commonClasses = useCommonStyles();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleGoToHome = () => {
    console.log('go home');
  };

  const isMainPage = true;

  const renderHeaderLinks = () => {
    return (
      <>
        {links.map(item => {
          return (
            <Box display="inline-block" mr={{ lg: 2, xl: 4 }}>
              <Link className={clsx(commonClasses.routerLink, classes.headerLink)} to={item.route}>
                {item.title}
              </Link>
            </Box>
          );
        })}
      </>
    );
  };

  return (
    <>
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
              <Box maxWidth={{ xxs: 200, md: 224 }} pl={4}>
                <Link to="/" className={commonClasses.routerLink} onClick={handleGoToHome}>
                  <Box width={72} height={64}>
                    <img width="100%" height="100%" src={logo_white} alt="" />
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
              <Link className={clsx(commonClasses.routerLink, classes.headerLink)} to={item.route}>
                {item.title}
              </Link>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) => ({
  appBar: {
    padding: '20px 143px',
    background: 'transparent',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
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
  },

  customGrid: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  headerWhite: {
    color: '#fff',
  },
}));

export default Header;
