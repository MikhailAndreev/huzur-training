import { RoutesType } from '../base/routes/types/RouteTypes';
import MainScreen from './main/MainScreen';
import ComponentsTemplate from './main/ComponentsTemplate';
import NotFoundScreen from './not-found/NotFoundScreen';

const screens = { MainScreen, ComponentsTemplate, NotFoundScreen };

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
    // credentials: [roles.director],
  },
  NotFoundScreen: {
    path: '/not-found',
    title: '404 Страница не найдена',
    component: screens.NotFoundScreen,
  },
};
