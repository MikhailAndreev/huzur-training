import React from 'react';
import { Paper, Box, Typography, makeStyles, Theme } from '@material-ui/core';

interface IProfileLessonsNumber {
  value: number;
  children: string;
}

const ProfileLessonsNumber: React.FC<IProfileLessonsNumber> = ({ value, children }) => {
  const classes = useStyles();

  return (
    <Paper elevation={0} variant="outlined" className={classes.customPaper}>
      <Box display="flex" alignItems="center" flexWrap="nowrap" p={{ xxs: 1, sm: 2, xl: 3 }}>
        <Box mr={3}>
          <Paper elevation={0} className={classes.numberPaper}>
            <Typography variant="h4">{value}</Typography>
          </Paper>
        </Box>
        <Typography variant="h6">{children}</Typography>
      </Box>
    </Paper>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  customPaper: {
    maxWidth: 352,
    [theme.breakpoints.down('lg')]: {
      maxWidth: '100%',
    },
  },
  numberPaper: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 80,
    background: '#FFD9CD',
    borderRadius: 16,
  },
}));

export default ProfileLessonsNumber;
