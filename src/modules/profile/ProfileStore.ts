import { makeAutoObservable, runInAction } from 'mobx';

import ProfileService from './ProfileService';
import { Profile } from './models/Profile';
import { Nullable } from '../../base/types/BaseTypes';

export class ProfileStore {
  loading = false;
  isEdit = {
    userInfo: false,
    email: false,
    password: false,
  };

  profile: Nullable<Profile> = null;
  userCourses: Nullable<any> = null;

  private profileService: ProfileService;

  constructor() {
    makeAutoObservable(this);
    this.profileService = new ProfileService();
  }

  setIsEdit = (key: 'userInfo' | 'email' | 'password', state: boolean) => {
    this.isEdit[key] = state;
  };

  updateProfile = (data: any) => {
    this.setProfileData(data);
  };

  getProfile = () => {
    this.setLoading(true);

    this.profileService
      .getUserData()
      .then(data => {
        runInAction(() => {
          this.setProfileData(data);
        });
      })
      .catch(error => {})
      .finally(() => this.setLoading(false));
  };

  getUserCourses = () => {
    this.setLoading(true);

    this.profileService
      .getUserCourses()
      .then(data => {
        runInAction(() => {
          this.userCourses = data;
        });
      })
      .catch(error => {})
      .finally(() => this.setLoading(false));
  };

  setProfileData = (data: any) => {
    const keys = Object.keys(data);

    let updData: any = {};
    for (let i = 0; i < keys.length; i++) {
      updData[keys[i]] = data[keys[i]];
    }

    this.profile = updData;
  };

  setLoading = (val: boolean) => {
    this.loading = val;
  };
}
