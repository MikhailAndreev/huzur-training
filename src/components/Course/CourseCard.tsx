import { useState } from 'react';
import { observer } from 'mobx-react';
import { Paper, Typography, Box, makeStyles, Theme, Button, Grid, LinearProgress } from '@material-ui/core';
import { Link } from 'react-router-dom';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import clsx from 'clsx';

import { useCommonStyles } from '../../styles/commonStyles';
import { ICourseItem } from '../../base/types/SubjectTypes';
import { useAllMQ } from '../../base/hooks/useAllMQ';
import { SubjectItem } from '../../modules/course/models/SubjectItem';

export interface ICourseCardProps {
  data: SubjectItem;
  fullWidth?: boolean;
  showProgress?: boolean;
  progressPosition?: 'img' | 'descr';
}

const CourseCard: React.FC<ICourseCardProps> = observer(({ data, fullWidth, showProgress, progressPosition }) => {
  const classes = useStyles();
  const commonClasses = useCommonStyles();
  const { isXS } = useAllMQ();
  const { id, img, title, description, author, progress } = data;

  return (
    <Link to={`/courses/${id}`} className={clsx(commonClasses.routerLink, classes.link)}>
      <Box mb={3} className={clsx(classes.paperWrap, fullWidth && classes.paperFullWidth)}>
        <Paper elevation={0} variant="outlined">
          <Grid container>
            <Grid item className={classes.imgCol}>
              <Box className={classes.cardImgWrapper}>
                <img src={img ? img : ''} alt="" className={classes.img} />
              </Box>

              {showProgress && progressPosition === 'img' && (
                <Box className={classes.progressWrap}>
                  <Box className={classes.progressBarWrap}>
                    <Typography variant="body1">
                      {progress?.current}/{progress?.fullCourse} Пройдено уроков
                    </Typography>

                    <LinearProgress
                      color="secondary"
                      variant="determinate"
                      value={
                        progress?.current || progress?.fullCourse ? (progress?.current / progress?.fullCourse) * 100 : 0
                      }
                    />
                  </Box>
                </Box>
              )}
            </Grid>

            <Grid item className={classes.contentCol}>
              <Box p={{ xxs: 1.75, xl: 3 }} height="100%" display="flex" flexDirection="column">
                <Box mb={1.5}>
                  <Typography variant="h6" className={classes.cardTitle}>
                    {title}
                  </Typography>
                </Box>
                <Box mb={2}>
                  {showProgress && progressPosition === 'descr' ? (
                    <Box mb={1}>
                      <Box className={classes.progressBarWrap}>
                        <Typography variant="body1">
                          {progress?.current}/{progress?.fullCourse}
                        </Typography>
                        <LinearProgress
                          color="secondary"
                          variant="determinate"
                          value={
                            progress?.current || progress?.fullCourse
                              ? (progress?.current / progress?.fullCourse) * 100
                              : 0
                          }
                        />
                      </Box>
                    </Box>
                  ) : (
                    <Box mb={1}>
                      <Typography
                        variant="body1"
                        className={clsx(commonClasses.mediumEmphasisOnLight, classes.cardDescr)}
                      >
                        {description}
                      </Typography>
                    </Box>
                  )}
                </Box>

                <Box className={classes.cardFooterWrap}>
                  <Box display="flex" alignSelf={isXS ? 'flex-start' : 'flex-end'}>
                    <Typography variant="body2" className={commonClasses.lightOnSurface}>
                      {author}
                    </Typography>
                  </Box>

                  <Box width={isXS ? '100%' : 'auto'}>
                    <Button color="primary" endIcon={<ChevronRightIcon />} className={classes.watchBtn}>
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
    [theme.breakpoints.down('lg')]: {
      maxWidth: '100%',
    },
    [theme.breakpoints.down('xs')]: {
      maxWidth: 340,
    },
    [theme.breakpoints.down('md')]: {
      '& .MuiButton-root': {
        opacity: 1,
        visibility: 'visible',
      },
    },
    transition: 'all 0.3s ease',
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
  paperFullWidth: {
    maxWidth: '100%',
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
    [theme.breakpoints.down('lg')]: {
      width: 230,
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'top left',
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
    height: 'auto',
    padding: '12px 16px',
    [theme.breakpoints.down('md')]: {
      padding: '5px 10px',
      fontSize: 13,
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  cardTitle: {
    [theme.breakpoints.down('md')]: {
      fontSize: 18,
    },
  },
  cardDescr: {
    [theme.breakpoints.down('md')]: {
      fontSize: 14,
    },
  },

  cardFooterWrap: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    flex: '1 0 auto',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
}));

export default CourseCard;
