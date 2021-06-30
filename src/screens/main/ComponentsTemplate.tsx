import { FormLabel } from '@material-ui/core';
import { Container, Typography, Box, Button, TextField } from '@material-ui/core';

const ComponentsTemplate: React.FC = () => {
  return (
    <Container maxWidth="xl">
      <Typography variant="h2">Стартовый шаблон CRA</Typography>

      <Box fontWeight={600} mb={10}>
        <Typography>Стартовый шаблон CRA</Typography>
      </Box>

      <Box mb={5}>
        <Button variant="contained" color="primary">
          Primary
        </Button>
      </Box>

      <Box mb={5}>
        <Button variant="outlined" color="primary">
          Primary
        </Button>
      </Box>

      <Box mb={5}>
        <Button variant="text" color="primary">
          Primary
        </Button>
      </Box>

      <Box width="300px">
        <FormLabel>Form label</FormLabel>
        <TextField id="outlined-basic" variant="outlined" />
      </Box>
    </Container>
  );
};

export default ComponentsTemplate;
