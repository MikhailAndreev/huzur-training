import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const SliderArrow: React.FC<any> = ({ className, onClick, type }) => {
  const classes = useStyles();

  return (
    <button
      className={clsx(classes.slickArrow, className, type === 'next' ? classes.slickArrowNext : classes.slickArrowPrev)}
      onClick={onClick}
    >
      {type === 'next' ? <NavigateNextIcon /> : <NavigateBeforeIcon />}
    </button>
  );
};

const useStyles = makeStyles(theme => ({
  slickArrow: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '40px',
    height: '40px',
    cursor: 'pointer',
    border: 0,
    borderRadius: 8,
    background: '#fff',
    boxShadow: '0px 4px 9px rgba(0, 0, 0, 0.08), 0px 3px 18px rgba(0, 0, 0, 0.04), 0px 8px 14px rgba(0, 0, 0, 0.05)',
    transition: 'all .3s ease',
    zIndex: 1,
    '& .MuiSvgIcon-root': {
      fontSize: 27,
      color: theme.palette.primary.main,
      transform: 'translateY(2px)',
      transition: 'all .3s ease',
    },
    '&::before': {
      content: 'none',
    },
    '&:hover': {
      color: '#fff',
      background: theme.palette.primary.main,
      '& .MuiSvgIcon-root': {
        color: '#fff',
      },
    },
    '&:focus': {
      outline: 'none',
    },
  },
  slickArrowPrev: {
    '@media (max-width: 1200px)': {
      left: -5,
    },
    [theme.breakpoints.down('md')]: {
      left: 0,
    },
    [theme.breakpoints.down('xs')]: {
      left: 8,
    },
  },
  slickArrowNext: {
    '@media (max-width: 1200px)': {
      right: -5,
    },
    [theme.breakpoints.down('md')]: {
      right: 0,
    },
    [theme.breakpoints.down('xs')]: {
      right: 8,
    },
  },
}));

export default SliderArrow;
