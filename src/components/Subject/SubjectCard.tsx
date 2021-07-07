import { useState } from 'react';
import { observer } from 'mobx-react';
import { Paper, Typography, Box, makeStyles, Theme, Button, Grid, LinearProgress } from '@material-ui/core';
import { Link } from 'react-router-dom';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import clsx from 'clsx';

import { useRootStore } from '../../base/hooks/useRootStore';
import { useCommonStyles } from '../../styles/commonStyles';
import card_img from '../../assets/images/card_img.png';
import { ICourseItem } from '../../base/types/SubjectTypes';

export interface ISubjectCardProps {
  data: ICourseItem;
  fullWidth?: boolean;
  showProgress?: boolean;
  progressPosition?: 'img' | 'descr';
}

const SubjectCard: React.FC<ISubjectCardProps> = observer(({ data, fullWidth, showProgress, progressPosition }) => {
  const classes = useStyles();
  const commonClasses = useCommonStyles();
  const { id, img, title, description, author, progress } = data;

  //   const dataProgress = { progress: 75, fullProgress: 100 };
  const dataProgress = {};

  return (
    <Link to="/course" className={clsx(commonClasses.routerLink, classes.link)}>
      <Box mb={3} className={classes.paperWrap}>
        <Paper elevation={0} variant="outlined">
          <Grid container>
            <Grid item className={classes.imgCol}>
              <Box className={classes.cardImgWrapper}>
                <img src={card_img} alt="" className={classes.img} />
              </Box>

              {showProgress && progressPosition === 'img' && (
                <Box className={classes.progressWrap}>
                  <Box className={classes.progressBarWrap}>
                    <Typography variant="body1">
                      {progress.current}/{progress.fullCourse} Пройдено уроков
                    </Typography>

                    <LinearProgress
                      color="secondary"
                      variant="determinate"
                      value={
                        progress.current || progress.fullCourse ? (progress.current / progress.fullCourse) * 100 : 0
                      }
                    />
                  </Box>
                </Box>
              )}
            </Grid>

            <Grid item className={classes.contentCol}>
              <Box px={3} pt={3}>
                <Box mb={1.5}>
                  <Typography variant="h6">Гарәп язуы һәм мәдәнияте</Typography>
                </Box>
                <Box mb={2}>
                  {showProgress && progressPosition === 'descr' && (
                    <Box mb={1}>
                      <Box className={classes.progressBarWrap}>
                        <Typography variant="body1">
                          {progress.current}/{progress.fullCourse}
                        </Typography>
                        <LinearProgress
                          color="secondary"
                          variant="determinate"
                          value={
                            progress.current || progress.fullCourse ? (progress.current / progress.fullCourse) * 100 : 0
                          }
                        />
                      </Box>
                    </Box>
                  )}
                </Box>

                <Box display="flex" justifyContent="space-between">
                  <Box>
                    <Typography variant="body2" className={commonClasses.lightOnSurface}>
                      {author}
                    </Typography>
                  </Box>

                  <Box>
                    <Button
                      variant="contained"
                      color="primary"
                      endIcon={<ChevronRightIcon />}
                      className={classes.watchBtn}
                    >
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
          '0px 6px 14px rgba(0, 0, 0, 0.05), 0px 1px 22px rgba(0, 0, 0, 0.04), 0px 3px 9px rgba(0, 0, 0, 0.08)',
      },
      '& .MuiButton-root': {
        opacity: 1,
        visibility: 'visible',
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
    height: 205,
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
  watchBtn: {
    opacity: 0,
    visibility: 'hidden',
    transition: 'all .3s ease',
    transform: 'translate(2px, 2px)',
  },
}));

export default SubjectCard;
