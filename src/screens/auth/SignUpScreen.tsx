import { useState } from 'react';
import { Container, Typography, Box, makeStyles, Theme, Button, Paper, FormLabel, TextField } from '@material-ui/core';
import { observer } from 'mobx-react';
import { useHistory, Link } from 'react-router-dom';

import logo from '../../assets/images/logo.png';
import { AuthData } from '../../base/types/AuthTypes';
import { useRootStore } from '../../base/hooks/useRootStore';
import { EmailMaskFormat } from '../../components/UI/Form';
import { useCommonStyles } from '../../styles/commonStyles';

const SignUpScreen: React.FC = observer(() => {
  const { authStore } = useRootStore();
  const classes = useStyles();
  const commonClasses = useCommonStyles();
  const history = useHistory();

  const [values, setValues] = useState<AuthData>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  // Handlers
  const handleSubmit = (e: any) => {
    // action for Login
    e.preventDefault();
    authStore.register(values, history);
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
              <Typography variant="h6">Теркәлергә аша электрон почта</Typography>
            </Box>

            <Box width="100%" component="form" onSubmit={handleSubmit}>
              <Box mb={3}>
                <FormLabel>Имя</FormLabel>
                <TextField
                  fullWidth
                  variant="outlined"
                  name="name"
                  placeholder="Введите имя"
                  value={values.name}
                  onChange={handleChange}
                />
              </Box>

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

              <Box mb={3}>
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
              <Box mb={5}>
                <FormLabel>Повторите пароль</FormLabel>
                <TextField
                  fullWidth
                  variant="outlined"
                  type="password"
                  name="confirmPassword"
                  placeholder="Введите значение"
                  value={values.confirmPassword}
                  onChange={handleChange}
                />
              </Box>

              <Box mb={1}>
                <Button fullWidth variant="contained" color="primary" type="submit">
                  Теркәлү
                </Button>
              </Box>

              <Box textAlign="center">
                <Typography variant="body2">Создавая аккаунт, вы принимаете</Typography>
              </Box>

              <Box maxWidth="240px" margin="0 auto" textAlign="center">
                <Link to="/policy" className={classes.policyLink}>
                  Соглашение об обработке персональных данных
                </Link>
              </Box>
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
  policyLink: {
    color: theme.palette.secondary.main,
    '&:hover': {
      textDecoration: 'none',
      opacity: 0.7,
    },
  },
}));

export default SignUpScreen;
