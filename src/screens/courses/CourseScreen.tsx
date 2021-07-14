import { useEffect } from 'react';
import { Container, Typography, Box, Button } from '@material-ui/core';
import { observer } from 'mobx-react';
import { useParams } from 'react-router-dom';

import { useRootStore } from '../../base/hooks/useRootStore';
import Loader from '../../components/UI/Loader';
import AuthorSlider from '../../components/Course/AuthorSlider/AuthorSlider';
import CourseAccordion from '../../components/Course/CourseAccordion';
import { ISubjectItem, SubjectStatus } from '../../base/types/SubjectTypes';
import { useAllMQ } from '../../base/hooks/useAllMQ';

const CourseScreen: React.FC = observer(() => {
  const { authStore, courseStore } = useRootStore();
  const { isSM } = useAllMQ();
  const params: any = useParams();

  useEffect(() => {
    courseStore.getSubjectData(params.id);
  }, []);

  if (courseStore.loading) {
    return <Loader minHeight={300} />;
  }

  return (
    <Container maxWidth="xl">
      <Box width="100%" pt={11.125}>
        <Box mb={9} width="100%" maxWidth="640px">
          <Box mb={5}>
            <Typography variant="h4">Гарәп алфавитын өйрәнү</Typography>
          </Box>

          <Box mb={5}>
            <Typography>
              Намаз, являющийся в Исламе вторым по значимости фардом после веры, был вменен в обязанность до хиджры, в
              Мекке в ночь Ми‘радж.
              <br />
              Для кого намаз является фардом (условия обязательности намаза)? <br />
              1) Для человека являющегося мусульманином. <br />
              2) Разумного. <br />
              3) Достигшего совершеннолетия.Намаз, являющийся в Исламе вторым по <br />
              значимости фардом после веры, был вменен в обязанность до хиджры, в Мекке в ночь Ми‘радж. <br />
              Для кого намаз является фардом (условия обязательности намаза)? <br />
              1) Для человека являющегося мусульманином. <br />
              2) Разумного. <br />
              3) Достигшего совершеннолетия.
              <br />
            </Typography>
          </Box>

          <Box display="flex" flexDirection={isSM ? 'column' : 'row'}>
            {!authStore.isAuth && (
              <Box width={isSM ? '100%' : '256px'} mr={4} mb={{ xs: 2 }}>
                <Button fullWidth variant="contained" color="primary">
                  Зарегистрироваться
                </Button>
              </Box>
            )}

            <Box width={isSM ? '100%' : '256px'}>
              <Button fullWidth variant="outlined" color="primary">
                Программа предмета
              </Button>
            </Box>
          </Box>
        </Box>

        <Box mb={22}>
          <Box mb={3}>
            <Typography variant="h5">Преподаватели</Typography>
          </Box>

          <Box>{courseStore.subjectData?.authors && <AuthorSlider data={courseStore.subjectData?.authors} />}</Box>
        </Box>

        <Box>
          <Box mb={3}>
            <Typography variant="h5">Программа предмета</Typography>
          </Box>

          <Box>
            {courseStore.subjectData &&
              courseStore.subjectData.lessonsList &&
              courseStore.subjectData.lessonsList.map((subject: ISubjectItem, index: number) => (
                <CourseAccordion
                  key={index}
                  data={subject}
                  index={index}
                  isCompleted={subject.status === SubjectStatus.completed}
                />
              ))}
          </Box>
        </Box>
      </Box>
    </Container>
  );
});

export default CourseScreen;
