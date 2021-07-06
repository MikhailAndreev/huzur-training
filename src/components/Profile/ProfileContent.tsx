import React from 'react';
import { observer } from 'mobx-react-lite';
import { Grid, Typography, Box, makeStyles, Theme } from '@material-ui/core';

import ProfileLessonsNumber from './ProfileLessonsNumber';
import SubjectCard from '../Subject/SubjectCard';

const ProfileContent: React.FC = observer(() => {
  const classes = useStyles();

  return (
    <>
      <Box mb={5}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} className={classes.customGrid}>
            <ProfileLessonsNumber value={123}>Всего уроков пройдено</ProfileLessonsNumber>
          </Grid>
          <Grid item xs={12} sm={6}>
            <ProfileLessonsNumber value={123}>Уроков осталось</ProfileLessonsNumber>
          </Grid>
        </Grid>
      </Box>

      <Box>
        <Box mb={3.625}>
          <Typography variant="h5">Мои предметы</Typography>
        </Box>

        <Box display="flex" flexDirection="column" alignItems="center">
          {[1, 2, 3].map((item: any) => (
            <SubjectCard />
          ))}
        </Box>
      </Box>
    </>
  );
});

const useStyles = makeStyles((theme: Theme) => ({
  customGrid: {
    maxWidth: 384,
  },
}));

export default ProfileContent;
