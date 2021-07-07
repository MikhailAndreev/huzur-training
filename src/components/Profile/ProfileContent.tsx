import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Grid, Typography, Box, makeStyles, Theme } from '@material-ui/core';

import ProfileLessonsNumber from './ProfileLessonsNumber';
import SubjectCard from '../Subject/SubjectCard';
import { useRootStore } from '../../base/hooks/useRootStore';
import Loader from '../UI/Loader';

const ProfileContent: React.FC = observer(() => {
  const { profileStore } = useRootStore();

  const classes = useStyles();

  useEffect(() => {
    profileStore.getUserCourses();
  }, []);

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
          {profileStore.loading && <Loader minHeight={150} />}
          {profileStore.userCourses &&
            profileStore.userCourses.map((data: any) => (
              <SubjectCard data={data} progressPosition="descr" showProgress />
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
