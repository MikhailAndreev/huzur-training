import CourseApiRepository from './repositories/CourseApiRepository';
import { CourseFactory } from './CourseFactory';

export default class NewsService {
  courseApi: CourseApiRepository;
  courseFactory: CourseFactory;

  constructor() {
    this.courseApi = new CourseApiRepository();
    this.courseFactory = new CourseFactory();
  }

  // getAll = async (): Promise<News[]> => {
  //   const { data } = await this.newsApi.getAll();
  //   return this.newsFactory.createList<News>(News, data).slice(0, 12); // cut list for demo
  // };

  // getOne = async (id: number): Promise<News> => {
  //   const { data } = await this.newsApi.getOne(id);
  //   return this.newsFactory.create<News>(News, data);
  // };
}
