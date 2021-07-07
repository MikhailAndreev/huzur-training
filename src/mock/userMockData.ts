import user_photo from '../assets/images/profile_img.png';
import { IProfileData } from '../base/types/ProfileTypes';

export const userData: IProfileData = {
  id: 99,
  name: 'Никита',
  surname: 'Кулаев',
  email: 'textmockdatamail@mail.ru',
  photo: user_photo,
  enableNotification: true,
};
