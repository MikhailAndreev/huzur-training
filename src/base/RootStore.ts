import React from 'react';

import { AuthStore } from '../modules/auth/AuthStore';
import { ProfileStore } from '../modules/profile/ProfileStore';
import { CourseStore } from '../modules/course/CourseStore';

class RootStore {
  authStore: AuthStore;
  profileStore: ProfileStore;
  courseStore: CourseStore;
  constructor() {
    this.authStore = new AuthStore();
    this.profileStore = new ProfileStore();
    this.courseStore = new CourseStore();
  }
}

const rootStore = new RootStore();

export const storesContext = React.createContext(rootStore);
