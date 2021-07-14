import { useState } from 'react';
import { observer } from 'mobx-react';
import { Paper, Typography, Box, makeStyles, Theme, Button, FormLabel } from '@material-ui/core';

import { useRootStore } from '../../base/hooks/useRootStore';
import PasswordInput from '../UI/PasswordInput';
import { IProfilePasswordFormState } from '../../base/types/ProfileTypes';

const ProfilePassword: React.FC = observer(() => {
  const classes = useStyles();
  const { profileStore } = useRootStore();

  const [values, setValues] = useState<IProfilePasswordFormState>({
    oldPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  });

  // Handlers
  const handleChange = (event: any) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleSave = (event: any) => {
    //   store.updateProfile(store.profile?.id, form, 'userInfo');
  };

  const handleCancel = () => {
    profileStore.setIsEdit('password', false);
  };

  // Renders
  const renderEditPassword = () => {
    return (
      <>
        <Box mb={3}>
          <FormLabel>Старый пароль</FormLabel>
          <PasswordInput
            fullWidth
            variant="outlined"
            size="small"
            name="oldPassword"
            placeholder="Введите Старый пароль"
            value={values.oldPassword}
            onChange={handleChange}
          />
        </Box>

        <Box mb={3}>
          <FormLabel>Новый пароль</FormLabel>
          <PasswordInput
            fullWidth
            variant="outlined"
            size="small"
            name="newPassword"
            placeholder="Введите Новый пароль"
            value={values.newPassword}
            onChange={handleChange}
          />
        </Box>

        <Box mb={3}>
          <FormLabel>Повторите новый пароль</FormLabel>
          <PasswordInput
            fullWidth
            variant="outlined"
            size="small"
            name="confirmNewPassword"
            placeholder="Введите Новый пароль"
            value={values.confirmNewPassword}
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
    <>
      <Paper elevation={0} variant="outlined" className={classes.profilePasswordPaper}>
        <Box className={classes.paperInner}>
          <Box>
            <Typography variant="h6">Пароль</Typography>
          </Box>

          <Box>
            {profileStore.isEdit.password ? (
              <Button variant="text" color="primary" onClick={handleCancel}>
                Отмена
              </Button>
            ) : (
              <Button variant="text" color="primary" onClick={() => profileStore.setIsEdit('password', true)}>
                Сменить
              </Button>
            )}
          </Box>
        </Box>

        {profileStore.isEdit.password && renderEditPassword()}
      </Paper>
    </>
  );
});

const useStyles = makeStyles((theme: Theme) => ({
  profilePasswordPaper: {
    padding: '15px 15px 15px 22px',
  },
  paperInner: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}));

export default ProfilePassword;
