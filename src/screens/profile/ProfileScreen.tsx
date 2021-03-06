import { useState, useEffect } from 'react';
import { Container, Typography, Box, makeStyles, Theme, Grid, Paper, Switch } from '@material-ui/core';
import { observer } from 'mobx-react';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useHistory } from 'react-router-dom';

import ProfileContent from '../../components/Profile/ProfileContent';
import ProfileInfo from '../../components/Profile/ProfileInfo';
import ProfileEmail from '../../components/Profile/ProfileEmail';
import ProfilePassword from '../../components/Profile/ProfilePassword';
import { useRootStore } from '../../base/hooks/useRootStore';
import LoaderButton from '../../components/UI/LoaderButton';
import { useAllMQ } from '../../base/hooks/useAllMQ';

const ProfileScreen: React.FC = observer(() => {
  const { authStore, profileStore } = useRootStore();
  const classes = useStyles();
  const [isNotificationEnabled, setIsNotificationEnabled] = useState<boolean>(false);
  const history = useHistory();
  const { isLG } = useAllMQ();

  // Effects
  useEffect(() => {
    profileStore.getProfile();
  }, []);

  const handleChecked = (e: any) => {
    setIsNotificationEnabled(e.target.checked);
  };

  return (
    <Container maxWidth="xl">
      <Box pb={5}>
        <Box mb={3.25}>
          <Typography variant="h4">Профиль</Typography>
        </Box>

        <Grid container spacing={4}>
          <Grid item xl={4} lg={4} md={12} sm={12} className={classes.customAsideGrid}>
            <Box mb={4}>
              <ProfileInfo />
            </Box>

            <Box mb={4}>
              <ProfileEmail />
            </Box>

            <Box mb={4.125}>
              <ProfilePassword />
            </Box>

            <Box mb={4}>
              <Paper elevation={0} variant="outlined" className={classes.profileNotificationPaper}>
                <Box className={classes.paperInner}>
                  <Box>
                    <Typography variant="h6">Получать уведомления</Typography>
                  </Box>

                  <Box>
                    <Switch
                      checked={isNotificationEnabled}
                      onChange={handleChecked}
                      color="primary"
                      name="notification"
                    />
                  </Box>
                </Box>
              </Paper>
            </Box>

            <Box>
              <LoaderButton
                fullWidth
                variant={isLG ? 'contained' : 'outlined'}
                color="primary"
                className={classes.exitBtn}
                endIcon={!authStore.loading && <ExitToAppIcon />}
                onClick={() => authStore.logout(history)}
                loading={authStore.loading}
              >
                Выйти
              </LoaderButton>
            </Box>
          </Grid>

          <Grid item xl={8} lg={8} md={12} sm={12}>
            <ProfileContent />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
});

const useStyles = makeStyles((theme: Theme) => ({
  profileEmailPaper: {
    padding: '17px 15px 23px 24px',
  },
  profilePasswordPaper: {
    padding: '15px 15px 15px 22px',
  },
  profileNotificationPaper: {
    padding: '16px 12px 16px 22px',
  },
  paperInner: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  customAsideGrid: {
    maxWidth: 384,
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('lg')]: {
      width: '100%',
      maxWidth: '100%',
    },
  },

  exitBtn: {
    borderColor: 'rgba(0, 0, 0, 0.6)',
  },
}));

export default ProfileScreen;
