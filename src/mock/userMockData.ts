import user_photo from '../assets/images/profile_img.png';

export interface IProfileData {
  [key: string]: any;
  id: number,
  name: string;
  email: string;
  photo: string;
  enableNotification: boolean;
}

export const userData: IProfileData = {
  id: 99,
  name: 'Артем',
  surname: 'Кулаев',
  email: 'exampleexampleexample@mail.ru',
  enableNotification: true,
  photo: user_photo,
};
