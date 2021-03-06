import { makeAutoObservable } from 'mobx';

import AuthService from './AuthService';
import { AuthData } from '../../base/types/AuthTypes';

export class AuthStore {
  loading = false;
  isAuth = false;

  private authService: AuthService;

  constructor() {
    makeAutoObservable(this);
    this.authService = new AuthService();
  }

  login = (values: AuthData, history: any) => {
    this.setLoading(true);

    setTimeout(() => {
      this.setAuth(true);
      this.setLoading(false);
      history.push('/profile');
    }, 2000);
  };

  register = (values: AuthData, history: any) => {
    this.setLoading(true);

    setTimeout(() => {
      this.setAuth(true);
      this.setLoading(false);
      history.push('/profile');
    }, 2000);
  };

  logout = (history: any) => {
    this.setLoading(true);

    setTimeout(() => {
      this.setAuth(false);
      this.setLoading(false);
      history.push('/');
    }, 1500);
  };

  setAuth = (val: boolean) => {
    this.isAuth = val;
  };

  setLoading = (value: boolean) => {
    this.loading = value;
  };
}
