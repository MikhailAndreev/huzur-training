import { useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import { Paper, Typography, Box, makeStyles, Theme, Button, Avatar, FormLabel, TextField } from '@material-ui/core';
import clsx from 'clsx';

import { useCommonStyles } from '../../styles/commonStyles';
import { useRootStore } from '../../base/hooks/useRootStore';
import { IProfileEmailForm } from '../../base/types/ProfileTypes';

const ProfileEmail: React.FC = observer(() => {
  const classes = useStyles();
  const commonClasses = useCommonStyles();
  const { profileStore } = useRootStore();

  const [values, setValues] = useState<IProfileEmailForm>({
    email: '',
    password: '',
  });

  // Effects
  useEffect(() => {
    if (profileStore.profile) {
      setValues({
        ...values,
        email: profileStore.profile?.email,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profileStore.profile]);

  // Handlers
  const handleEditProfile = () => {
    // action for Edit Profile
    console.log('edit profile');
  };

  const handleChange = (event: any) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleCancel = () => {
    profileStore.setIsEdit('email', false);
  };

  const handleSave = () => {
    // action for change profile
    // store.changeEmail(store.profile?.id, values);
  };

  // Renders
  const renderEmailView = () => {
    return (
      <>
        <Box width="100%">
          <Typography variant="body1">exampleexampleexample@mail.ru</Typography>
        </Box>
      </>
    );
  };

  const renderEditEmail = () => {
    return (
      <>
        <Box mb={3}>
          <FormLabel>Новый email</FormLabel>
          <TextField
            fullWidth
            variant="outlined"
            size="small"
            name="email"
            placeholder="Введите Email"
            value={values.email}
            onChange={handleChange}
            // error={!!store.errorMessages?.email}
            // helperText={store.errorMessages?.email}
            // disabled={loading}
          />
        </Box>
        <Box mb={5}>
          <FormLabel>Пароль</FormLabel>
          <TextField
            fullWidth
            variant="outlined"
            type="password"
            name="password"
            placeholder="Введите значение"
            value={values.password}
            onChange={handleChange}
          />
        </Box>
        <Button fullWidth color="primary" variant="contained" onClick={handleSave}>
          Сохранить
        </Button>
      </>
    );
  };

  return (
    <Paper elevation={0} variant="outlined" className={classes.profileEmailPaper}>
      <Box className={classes.paperInner} mb={1.75}>
        <Box>
          <Typography variant="h6">Email</Typography>
        </Box>

        <Box>
          {profileStore.isEdit.email ? (
            <Button variant="text" color="primary" onClick={handleCancel}>
              Отмена
            </Button>
          ) : (
            <Button variant="text" color="primary" onClick={() => profileStore.setIsEdit('email', true)}>
              Изменить
            </Button>
          )}
        </Box>
      </Box>

      {profileStore.isEdit.email ? renderEditEmail() : renderEmailView()}
    </Paper>
  );
});

const useStyles = makeStyles((theme: Theme) => ({
  profileEmailPaper: {
    padding: '17px 15px 23px 24px',
  },
  paperInner: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}));

export default ProfileEmail;
