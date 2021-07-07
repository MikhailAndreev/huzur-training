import { makeAutoObservable } from 'mobx';

import ProfileService from './ProfileService';
import { Profile } from './models/Profile';
import { Nullable } from '../../base/types/BaseTypes';
import { IProfileData } from '../../base/types/ProfileTypes';
import { userData, userCourses } from '../../mock/userMockData';

export class ProfileStore {
  loading = false;
  isEdit = {
    userInfo: false,
    email: false,
    password: false,
  };

  profile: Nullable<IProfileData> = null;
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
    setTimeout(() => {
      this.setProfileData(userData);
      this.setLoading(false);
    }, 1500);
  };

  getUserCourses = () => {
    this.setLoading(true);
    setTimeout(() => {
      this.setUserCourses(userCourses);
      this.setLoading(false);
    }, 1500);
  };

  setProfileData = (data: any) => {
    const keys = Object.keys(data);
    let updData: any = {};
    for (let i = 0; i < keys.length; i++) {
      updData[keys[i]] = data[keys[i]];
    }

    this.profile = updData;
  };

  setUserCourses = (data: any) => {
    this.userCourses = data;
  };

  setLoading = (val: boolean) => {
    this.loading = val;
  };
}
