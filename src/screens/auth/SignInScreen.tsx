import { useState } from 'react';
import { Container, Typography, Box, makeStyles, Theme, Button, Paper, FormLabel, TextField } from '@material-ui/core';
import { observer } from 'mobx-react';
import { useHistory } from 'react-router-dom';

import logo from '../../assets/images/logo.png';
import { AuthData } from '../../base/types/AuthTypes';
import { useRootStore } from '../../base/hooks/useRootStore';
import { EmailMaskFormat } from '../../components/UI/Form';
import LoaderButton from '../../components/UI/LoaderButton';

const SignInScreen: React.FC = observer(() => {
  const { authStore } = useRootStore();
  const classes = useStyles();
  const history = useHistory();

  const [values, setValues] = useState<AuthData>({
    email: '',
    password: '',
  });

  // Handlers
  const handleSubmit = (e: any) => {
    e.preventDefault();
    authStore.login(values, history);
  };
  
  const handleResetPassword = (e: any) => {
    // action for Reset password
    console.log('reset password');
  };

  const handleChange = (event: any) => {
    const { name, value } = event.target || {};
    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <Container maxWidth="xl">
      <Box className={classes.formWrap}>
        <Paper elevation={0} variant="outlined" className={classes.paper}>
          <Box display="flex" flexDirection="column" alignItems="center" width={320}>
            <Box className={classes.imgWrap}>
              <img src={logo} alt="" />
            </Box>

            <Box mb={4}>
              <Typography variant="h6">Керергә аша электрон почта</Typography>
            </Box>

            <Box width="100%" component="form" onSubmit={handleSubmit}>
              <Box mb={3}>
                <FormLabel>Email</FormLabel>
                <TextField
                  fullWidth
                  variant="outlined"
                  name="email"
                  placeholder="Введите email"
                  value={values.email}
                  onChange={handleChange}
                  InputProps={{ inputComponent: EmailMaskFormat }}
                />
              </Box>

              <Box mb={0.5}>
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

              <Box textAlign="end" mb={3.375}>
                <Button variant="text" color="primary" onClick={handleResetPassword}>
                  Забыли пароль?
                </Button>
              </Box>

              <LoaderButton loading={authStore.loading} fullWidth variant="contained" color="primary" type="submit">
                Керү
              </LoaderButton>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
});
const useStyles = makeStyles((theme: Theme) => ({
  formWrap: {
    display: 'flex',
    justifyContent: 'center',
    padding: '96px 0',
  },
  imgWrap: {
    width: 113,
    height: 107,
    marginBottom: 42,
    '& img': {
      width: '100%',
      height: '100%',
    },
  },
  paper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    maxWidth: '384px',
    padding: '50px 32px 32px 32px',
    [theme.breakpoints.down('md')]: {},
  },
}));

export default SignInScreen;
