import { RoutesType } from '../base/routes/types/RouteTypes';
import MainScreen from './main/MainScreen';
import ComponentsTemplate from './design/ComponentsTemplate';
import NotFoundScreen from './not-found/NotFoundScreen';
import SignInScreen from './auth/SignInScreen';
import SignUpScreen from './auth/SignUpScreen';
import ProfileScreen from './profile/ProfileScreen';
import CoursesScreen from './courses/CoursesScreen';
import CourseScreen from './courses/CourseScreen';

const screens = {
  MainScreen,
  ComponentsTemplate,
  NotFoundScreen,
  SignInScreen,
  SignUpScreen,
  ProfileScreen,
  CoursesScreen,
  CourseScreen,
};

type RoutesKeys = keyof typeof screens;
export const routes: RoutesType<RoutesKeys> = {
  MainScreen: {
    path: '/',
    exact: true,
    title: 'Главная',
    component: screens.MainScreen,
    // credentials: [roles.director],
  },
  ComponentsTemplate: {
    path: '/templates',
    exact: true,
    title: 'Шаблон',
    component: screens.ComponentsTemplate,
  },
  SignInScreen: {
    path: '/login',
    exact: true,
    title: 'Вход',
    component: screens.SignInScreen,
  },
  SignUpScreen: {
    path: '/register',
    exact: true,
    title: 'Регистрация',
    component: screens.SignUpScreen,
  },
  ProfileScreen: {
    path: '/profile',
    exact: true,
    title: 'Профиль',
    component: screens.ProfileScreen,
  },
  CoursesScreen: {
    path: '/courses',
    exact: true,
    title: 'Список курсов',
    component: screens.CoursesScreen,
  },
  CourseScreen: {
    path: '/courses/:id',
    title: 'Курс',
    component: screens.CourseScreen,
  },
  NotFoundScreen: {
    path: '/not-found',
    title: '404 Страница не найдена',
    component: screens.NotFoundScreen,
  },
};
