import { Container, Typography, Box, makeStyles, Theme, Button } from '@material-ui/core';
import { observer } from 'mobx-react';

const SignUpScreen: React.FC = observer(() => {
  const classes = useStyles();
  return (
    <Container maxWidth="xl">
      <Box>
        <Typography variant="h2">REGISTRATION</Typography>
      </Box>
    </Container>
  );
});
const useStyles = makeStyles((theme: Theme) => ({}));

export default SignUpScreen;
