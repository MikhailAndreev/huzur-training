import ProfileApiRepository from './repositories/ProfileApiRepository';
import { ProfileFactory } from './ProfileFactory';
import { Profile } from './models/Profile';
import { SubjectItem } from '../course/models/SubjectItem';

export default class ProfileService {
  profileApi: ProfileApiRepository;
  profileFactory: ProfileFactory;

  constructor() {
    this.profileApi = new ProfileApiRepository();
    this.profileFactory = new ProfileFactory();
  }

  getUserData = async (): Promise<Profile> => {
    const data = await this.profileApi.getUserData();
    return this.profileFactory.create<Profile>(Profile, data);
  };

  getUserCourses = async (): Promise<SubjectItem[]> => {
    const data = await this.profileApi.getUserCourses();
    return this.profileFactory.createList<SubjectItem>(SubjectItem, data);
  };
}
