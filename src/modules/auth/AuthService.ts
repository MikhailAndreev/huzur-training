import AuthApiRepository from './repositories/AuthApiRepository';
import { AuthFactory } from './AuthFactory';
import { Auth } from './models/Auth';

export default class NewsService {
  authApi: AuthApiRepository;
  authFactory: AuthFactory;

  constructor() {
    this.authApi = new AuthApiRepository();
    this.authFactory = new AuthFactory();
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
