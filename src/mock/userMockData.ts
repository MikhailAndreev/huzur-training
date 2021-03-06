import card_img from '../assets/images/card_img.png';
import user_photo from '../assets/images/profile_img.png';
import { IProfileData } from '../base/types/ProfileTypes';
import { ICourseItem } from '../base/types/SubjectTypes';

export const userData: IProfileData = {
  id: 99,
  name: 'Никита',
  surname: 'Кулаев',
  email: 'textmockdatamail@mail.ru',
  photo: user_photo,
  enableNotification: true,
};

export const userCourses: ICourseItem[] = [
  {
    id: 2,
    title: 'Гарәп язуы һәм мәдәнияте',
    description: 'Какие дуа нужно читать во время намаза? Тексты с транскрипцией и на арабском языке',
    progress: { fullCourse: 35, current: 10 },
    img: card_img,
    author: 'Артем Кулаев',
  },
  {
    id: 2,
    title: 'Гарәп язуы һәм мәдәнияте',
    description: 'Какие дуа нужно читать во время намаза? Тексты с транскрипцией и на арабском языке',
    progress: { fullCourse: 48, current: 29 },
    img: card_img,
    author: 'Артем Кулаев',
  },
  {
    id: 2,
    title: 'Гарәп язуы һәм мәдәнияте',
    description: 'Какие дуа нужно читать во время намаза? Тексты с транскрипцией и на арабском языке',
    progress: { fullCourse: 56, current: 2 },
    img: card_img,
    author: 'Артем Кулаев',
  },
  {
    id: 2,
    title: 'Гарәп язуы һәм мәдәнияте',
    description: 'Какие дуа нужно читать во время намаза? Тексты с транскрипцией и на арабском языке',
    progress: { fullCourse: 78, current: 64 },
    img: card_img,
    author: 'Артем Кулаев',
  },
];
