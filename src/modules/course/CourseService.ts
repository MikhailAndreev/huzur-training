import CourseApiRepository from './repositories/CourseApiRepository';
import { CourseFactory } from './CourseFactory';
import { Course } from './models/Course';
import { SubjectItem } from './models/SubjectItem';

export default class CourseService {
  courseApi: CourseApiRepository;
  courseFactory: CourseFactory;

  constructor() {
    this.courseApi = new CourseApiRepository();
    this.courseFactory = new CourseFactory();
  }

  getAll = async (): Promise<SubjectItem[]> => {
    const data = await this.courseApi.getAll();
    return this.courseFactory.createList<SubjectItem>(SubjectItem, data);
  };

  getOne = async (id: number): Promise<Course> => {
    const data = await this.courseApi.getOne(id);
    return this.courseFactory.create<Course>(Course, data);
  };
}
