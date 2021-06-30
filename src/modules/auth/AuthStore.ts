import { makeAutoObservable } from 'mobx';

import AuthService from './AuthService';
import { Auth } from './models/Auth';
import { Nullable } from '../../base/types/BaseTypes';

export class AuthStore {
  loading = false;
  isAuth = false;

  newsData: Nullable<Auth> = null;

  private newsService: AuthService;

  constructor() {
    makeAutoObservable(this);
    this.newsService = new AuthService();
  }

  login = () => {
    this.setLoading(true);

    setTimeout(() => {
      this.setAuth(true);
      this.setLoading(false);
    }, 2000);
  };

  setAuth = (val: boolean) => {
    this.isAuth = val;
  };

  setLoading = (value: boolean) => {
    this.loading = value;
  };
}
