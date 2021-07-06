import { useState } from 'react';
import { observer } from 'mobx-react';
import { Paper, Typography, Box, makeStyles, Theme, Button, Avatar, FormLabel, TextField } from '@material-ui/core';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import clsx from 'clsx';

import { useCommonStyles } from '../../styles/commonStyles';
import profile_img from '../../assets/images/profile_img.png';
import { useRootStore } from '../../base/hooks/useRootStore';

const ProfileInfo: React.FC = observer(() => {
  const classes = useStyles();
  const commonClasses = useCommonStyles();
  const { profileStore } = useRootStore();

  const [userName, setUserName] = useState<string>('');
  // TODO: get photo from store
  const [avatar, setAvatar] = useState<Blob | string>(profile_img);

  // Handlers
  const handleEditProfile = () => {
    // action for Edit Profile
    profileStore.setIsEdit('userInfo', true);
    console.log('edit profile');
  };

  const getPhoto = () => {
    if (avatar) {
      if (typeof avatar === 'string') {
        return avatar;
      }

      return URL.createObjectURL(avatar);
    }

    return avatar;
  };

  const handleChange = (event: any) => {
    setUserName(event.target.value);
  };

  const handleFileChange = (event: any) => {
    event.preventDefault();
    setAvatar(event.target.files[0]);
  };

  const handleSave = (event: any) => {
    //   store.updateProfile(store.profile?.id, form, 'userInfo');
  };

  const handleCancel = () => {
    profileStore.setIsEdit('userInfo', false);
  };

  const handleRemove = () => {
    // store.removeProfile();
  };

  // Renders
  const renderProfileView = () => {
    return (
      <>
        <Box className={commonClasses.profileImgWrap}>
          <Avatar className={commonClasses.avatarImg} alt="profile" src={profile_img} />
        </Box>

        <Box mb={2.125}>
          <Typography variant="h5">Артем</Typography>
        </Box>

        <Box>
          <Button variant="text" color="primary" onClick={handleEditProfile}>
            Редактировать
          </Button>
        </Box>
      </>
    );
  };

  const renderEditInfo = () => {
    return (
      <>
        <Box display="flex" justifyContent="center" mb={4}>
          <label className={classes.fileLabel}>
            <input type="file" name="userAvatar" onChange={handleFileChange} hidden />
            <Avatar className={clsx(classes.avatar, classes.avatarEdit)}>
              <img src={getPhoto()} alt="" />
              <PhotoCamera />
            </Avatar>
          </label>
        </Box>

        <Box mb={3} width="100%">
          <FormLabel>Имя</FormLabel>
          <TextField
            variant="outlined"
            size="small"
            name="name"
            value={userName}
            onChange={handleChange}
            placeholder="Введите имя"
            fullWidth
            // error={!!store.errorMessages?.name}
            // helperText={store.errorMessages?.name}
            // disabled={loading}
          />
        </Box>
        <Box mb={2} width="100%">
          <Button disableFocusRipple fullWidth color="primary" variant="contained" onClick={handleSave}>
            Сохранить
          </Button>
        </Box>
        <Box>
          <Button variant="text" color="primary" onClick={handleCancel}>
            Отмена
          </Button>
        </Box>

        <Box>
          <Button variant="text" className={classes.removeProfileBtn} onClick={handleRemove}>
            Удалить профиль
          </Button>
        </Box>
      </>
    );
  };

  return (
    <Paper elevation={0} variant="outlined" className={commonClasses.profilePaperInfo}>
      {profileStore.isEdit.userInfo ? renderEditInfo() : renderProfileView()}
    </Paper>
  );
});

const useStyles = makeStyles((theme: Theme) => ({
  avatar: {
    position: 'relative',
    width: 128,
    height: 128,
    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
  },
  avatarEdit: {
    '&:before': {
      content: `''`,
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0, 0, 0, 0.54)',
    },
    '& .MuiSvgIcon-root': {
      position: 'absolute',
      top: '50%',
      left: '50%',
      fontSize: 48,
      opacity: 0.5,
      transform: 'translate(-50%, -50%)',
      transition: 'opacity .3s ease',
    },
  },
  fileLabel: {
    cursor: 'pointer',
    '&:hover': {
      '& .MuiSvgIcon-root': {
        opacity: 1,
      },
    },
  },
  removeProfileBtn: {
    color: 'rgba(0, 0, 0, 0.38)',
  },
}));

export default ProfileInfo;
