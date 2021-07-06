import ProfileApiRepository from './repositories/ProfileApiRepository';
import { ProfileFactory } from './ProfileFactory';

export default class NewsService {
  profileApi: ProfileApiRepository;
  profileFactory: ProfileFactory;

  constructor() {
    this.profileApi = new ProfileApiRepository();
    this.profileFactory = new ProfileFactory();
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
