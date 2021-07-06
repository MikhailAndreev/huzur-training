import { makeAutoObservable } from 'mobx';

import ProfileService from './ProfileService';
import { Profile } from './models/Profile';
import { Nullable } from '../../base/types/BaseTypes';
import { IProfileData } from '../../base/types/ProfileTypes';

export class ProfileStore {
  loading = false;
  isEdit = {
    userInfo: false,
    email: false,
    password: false,
  };

  profile: Nullable<IProfileData> = null;

  private profileService: ProfileService;

  constructor() {
    makeAutoObservable(this);
    this.profileService = new ProfileService();
  }

  setIsEdit = (key: 'userInfo' | 'email' | 'password', state: boolean) => {
    this.isEdit[key] = state;
  };

  updateProfile = (data: any) => {
    const keys = Object.keys(data);
    for (let i = 0; i < keys.length; i++) {
      this.profile![keys[i]] = data[keys[i]];
    }
  };

  // login = (values: SignInData, history: any) => {
  //   this.setLoading(true);

  //   setTimeout(() => {
  //     this.setAuth(true);
  //     this.setLoading(false);
  //     history.push('/profile');
  //   }, 2000);
  // };

  // setAuth = (val: boolean) => {
  //   this.isAuth = val;
  // };

  // setLoading = (value: boolean) => {
  //   this.loading = value;
  // };
}
