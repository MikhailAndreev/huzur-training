import { useState } from 'react';
import { observer } from 'mobx-react';
import { Paper, Typography, Box, makeStyles, Theme, Button, Grid, LinearProgress } from '@material-ui/core';
import { Link } from 'react-router-dom';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import clsx from 'clsx';

import { useRootStore } from '../../base/hooks/useRootStore';
import { useCommonStyles } from '../../styles/commonStyles';
import card_img from '../../assets/images/card_img.png';

const SubjectCard: React.FC = observer(() => {
  const classes = useStyles();
  const commonclasses = useCommonStyles();
  const { profileStore } = useRootStore();

  // Handlers

  // Renders

  //   const dataProgress = { progress: 75, fullProgress: 100 };
  const dataProgress = {};

  return (
    <Link to="/course" className={clsx(commonclasses.routerLink, classes.link)}>
      <Box mb={3} className={classes.paperWrap}>
        <Paper elevation={0} variant="outlined">
          <Grid container>
            <Grid item className={classes.imgCol}>
              <Box className={classes.cardImgWrapper}>
                {/* data ? img with progress bar : img */}
                <img src={card_img} alt="" className={classes.img} />
              </Box>

              {/* {showProgress && progressPlace === 'topImg' && ( */}
              {false && (
                <Box className={classes.progressWrap}>
                  <Box className={classes.progressBarWrap}>
                    <Typography variant="body1">
                      {/* {progress.current}/{progress.all} Пройдено уроков */}
                      16/28 Пройдено уроков
                    </Typography>

                    <LinearProgress
                      color="secondary"
                      variant="determinate"
                      //   value={progress.current || progress.all ? (progress.current / progress.all) * 100 : 0}
                      value={(16 / 28) * 100}
                    />
                  </Box>
                </Box>
              )}
            </Grid>

            <Grid item className={classes.contentCol}>
              <Box px={3} pt={3}>
                {/* data */}
                {/* if user data ? progressbar */}
                <Box mb={1.5}>
                  <Typography variant="h6">Гарәп язуы һәм мәдәнияте</Typography>
                </Box>
                <Box mb={2}>
                  {true && (
                    <Box mb={1}>
                      <Box className={classes.progressBarWrap}>
                        <Typography variant="body1">26/68 Пройдено уроков</Typography>
                        <LinearProgress color="secondary" variant="determinate" value={(28 / 68) * 100} />
                      </Box>
                    </Box>
                  )}
                </Box>

                <Box display="flex" justifyContent="space-between">
                  <Box>
                    <Typography>Артем Кулаев</Typography>
                  </Box>

                  <Box>
                    <Button variant="contained" color="primary" endIcon={<ChevronRightIcon />}>
                      Смотреть
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Link>
  );
});

const useStyles = makeStyles((theme: Theme) => ({
  link: {
    display: 'block',
    width: '100%',
    textDecoration: 'none',
  },
  paperWrap: {
    width: '100%',
    maxWidth: 736,
    cursor: 'pointer',
    [theme.breakpoints.down('xs')]: {
      maxWidth: 340,
    },
    '&:hover': {
      '& .MuiPaper-root': {
        transform: 'translateY(-2px)',
        borderColor: theme.palette.primary.main,
        boxShadow:
          '0px 3px 9px rgba(0, 0, 0, 0.08), 0px 1px 22px rgba(0, 0, 0, 0.04), 0px 6px 14px rgba(0, 0, 0, 0.05)',
      },
      '& .MuiButton-root': {
        opacity: 1,
        visibility: 'visible',
        transform: 'translate(0,0)',
      },
    },
  },

  progressWrap: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: '100%',
    padding: '0 16px 13px',
    zIndex: 1,
  },

  progressBarWrap: {
    width: '100%',
    padding: theme.spacing(1, 2),
    borderRadius: 8,
    background: '#FFF0EB',
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1),
    },
  },

  imgCol: {
    position: 'relative',
    width: 270,
    height: 203,
    // [theme.breakpoints.down('md')]: {
    //   width: 270,
    //   height: 221,
    // },
    // [theme.breakpoints.down('sm')]: {
    //   width: 200,
    //   height: 165,
    // },
    // [theme.breakpoints.down('xs')]: {
    //   width: '100%',
    //   height: 165,
    // },
  },
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  cardImgWrapper: {
    width: '100%',
    height: '100%',
  },
  contentCol: {
    flex: 1,
  },
}));

export default SubjectCard;
