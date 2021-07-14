import AbstractApiRepository from '../../../base/repositories/AbstractApiRepository';
import { userData, userCourses } from '../../../mock/userMockData';

export default class ProfileApiRepository extends AbstractApiRepository {
  getUserData = () => {
    return userData;
  };

  getUserCourses = () => {
    return userCourses;
  };
}
