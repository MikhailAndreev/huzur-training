import { makeAutoObservable } from 'mobx';

import AuthService from './AuthService';
import { Auth } from './models/Auth';
import { Nullable } from '../../base/types/BaseTypes';
import { SignInData } from '../../base/types/AuthTypes';

export class AuthStore {
  loading = false;
  isAuth = false;

  newsData: Nullable<Auth> = null;

  private authService: AuthService;

  constructor() {
    makeAutoObservable(this);
    this.authService = new AuthService();
  }

  login = (values: SignInData, history: any) => {
    this.setLoading(true);

    setTimeout(() => {
      this.setAuth(true);
      this.setLoading(false);
      history.push('/profile')
    }, 2000);
  };

  setAuth = (val: boolean) => {
    this.isAuth = val;
  };

  setLoading = (value: boolean) => {
    this.loading = value;
  };
}
