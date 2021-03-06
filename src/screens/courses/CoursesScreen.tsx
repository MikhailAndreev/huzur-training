import { useEffect } from 'react';
import { Container, Typography, Box } from '@material-ui/core';
import { observer } from 'mobx-react';

import { useRootStore } from '../../base/hooks/useRootStore';
import Loader from '../../components/UI/Loader';
import CourseCard from '../../components/Course/CourseCard';
import { SubjectItem } from '../../modules/course/models/SubjectItem';

const CoursesScreen: React.FC = observer(() => {
  const { authStore, courseStore } = useRootStore();

  useEffect(() => {
    courseStore.getCoursesData();
  }, []);

  return (
    <Container maxWidth="xl">
      <Box>
        <Box mb={4}>
          <Typography variant="h4">Программа обучения</Typography>
        </Box>

        <Box display="flex" flexDirection="column" alignItems="center" mb={10}>
          {courseStore.loading && <Loader minHeight={300} />}
          {!courseStore.loading &&
            courseStore.subjectListData?.map((data: SubjectItem) => (
              <CourseCard key={data.id} data={data} progressPosition="img" fullWidth showProgress={authStore.isAuth} />
            ))}
        </Box>
      </Box>
    </Container>
  );
});

export default CoursesScreen;
