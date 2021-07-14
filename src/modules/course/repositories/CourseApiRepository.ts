import AbstractApiRepository from '../../../base/repositories/AbstractApiRepository';
import { subjectData } from '../../../mock/subjectData';
import { userCourses } from '../../../mock/coursesMockData';

export default class CourseApiRepository extends AbstractApiRepository {
  getAll = () => {
    return userCourses;
  };

  getOne = (id: number) => {
    return subjectData;
  };
}
