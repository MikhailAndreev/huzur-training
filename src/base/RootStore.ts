import React from 'react';

import { AuthStore } from '../modules/auth/AuthStore';
import { ProfileStore } from '../modules/profile/ProfileStore';

class RootStore {
  authStore: AuthStore;
  profileStore: ProfileStore;
  constructor() {
    this.authStore = new AuthStore();
    this.profileStore = new ProfileStore();
  }
}

const rootStore = new RootStore();

export const storesContext = React.createContext(rootStore);
