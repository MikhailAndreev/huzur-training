import { makeAutoObservable } from 'mobx';

import { userCourses } from '../../mock/coursesMockData';
import { ICourseItem } from '../../base/types/SubjectTypes';
import { Nullable } from '../../base/types/BaseTypes';

export class CourseStore {
  loading = false;

  coursesData: Nullable<ICourseItem[]> = null;

  constructor() {
    makeAutoObservable(this);
  }

  getCoursesData = () => {
    this.setLoading(true);
    setTimeout(() => {
      this.setCoursesData(userCourses);
      this.setLoading(false);
    }, 1500);
  };

  setCoursesData = (data: ICourseItem[]) => {
    this.coursesData = data;
  };

  setLoading = (val: boolean) => {
    this.loading = val;
  };
}
