import { makeAutoObservable } from 'mobx';

import { userCourses } from '../../mock/coursesMockData';
import { ICourseItem, ISubjectItem } from '../../base/types/SubjectTypes';
import { subjectItem } from '../../mock/subjectItemData';
import { Nullable } from '../../base/types/BaseTypes';

export class CourseStore {
  loading = false;

  coursesData: Nullable<ICourseItem[]> = null;
  subjectData: Nullable<ISubjectItem[]> = null;

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

  getSubjectData = () => {
    this.setLoading(true);
    setTimeout(() => {
      this.setSubjectData(subjectItem);
      this.setLoading(false);
    }, 1500);
  };

  setCoursesData = (data: ICourseItem[]) => {
    this.coursesData = data;
  };

  setSubjectData = (data: ISubjectItem[]) => {
    this.subjectData = data;
  };

  setLoading = (val: boolean) => {
    this.loading = val;
  };
}
