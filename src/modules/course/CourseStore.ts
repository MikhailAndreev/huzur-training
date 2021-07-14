import { makeAutoObservable, runInAction } from 'mobx';

import { Nullable } from '../../base/types/BaseTypes';
import CourseService from './CourseService';
import { Course } from './models/Course';
import { SubjectItem } from './models/SubjectItem';

export class CourseStore {
  loading = false;

  subjectListData: Nullable<SubjectItem[]> = null;
  subjectData: Nullable<Course> = null;

  private courseService: CourseService;

  constructor() {
    makeAutoObservable(this);
    this.courseService = new CourseService();
  }

  getCoursesData = () => {
    this.setLoading(true);

    this.courseService
      .getAll()
      .then(data => {
        runInAction(() => {
          this.subjectListData = data;
        });
      })
      .catch(error => {})
      .finally(() => this.setLoading(false));
  };

  getSubjectData = (courseId: number) => {
    this.setLoading(true);

    this.courseService
      .getOne(courseId)
      .then(data => {
        runInAction(() => {
          this.subjectData = data;
        });
      })
      .catch(error => {})
      .finally(() => this.setLoading(false));
  };

  setLoading = (val: boolean) => {
    this.loading = val;
  };
}
