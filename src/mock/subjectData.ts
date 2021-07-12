import { ISubjectData, SubjectStatus } from '../base/types/SubjectTypes';
import author_img from '../assets/images/author_img.png';

export const subjectData: ISubjectData = {
  id: 1,
  title: 'Гарәп язуы һәм мәдәнияте',
  description: 'asdadsad',
  authors: [
    { id: 1, img: author_img, name: 'Хамидуллин Ришат Ахтямович' },
    { id: 2, img: author_img, name: 'Хамидуллин Ришат Ахтямович' },
    { id: 3, img: author_img, name: 'Хамидуллин Ришат Ахтямович' },
    { id: 4, img: author_img, name: 'Хамидуллин Ришат Ахтямович' },
    { id: 5, img: author_img, name: 'Хамидуллин Ришат Ахтямович' },
    { id: 6, img: author_img, name: 'Хамидуллин Ришат Ахтямович' },
    { id: 7, img: author_img, name: 'Хамидуллин Ришат Ахтямович' },
  ],
  lessonsList: [
    {
      id: 1,
      title: 'Гарәп язуы һәм мәдәнияте',
      status: SubjectStatus.completed,
      lessons: [
        { id: 1, title: ' Гарәп язуы һәм мәдәнияте', status: SubjectStatus.completed },
        { id: 2, title: ' Гарәп язуы һәм мәдәнияте', status: SubjectStatus.completed },
        { id: 3, title: ' Гарәп язуы һәм мәдәнияте', status: SubjectStatus.completed },
        { id: 4, title: ' Гарәп язуы һәм мәдәнияте', status: SubjectStatus.completed },
        { id: 5, title: ' Гарәп язуы һәм мәдәнияте', status: SubjectStatus.completed },
      ],
    },
    {
      id: 2,
      title: 'Гарәп язуы һәм мәдәнияте',
      status: SubjectStatus.current,
      lessons: [
        { id: 1, title: ' Гарәп язуы һәм мәдәнияте', status: SubjectStatus.completed },
        { id: 2, title: ' Гарәп язуы һәм мәдәнияте', status: SubjectStatus.completed },
        { id: 3, title: ' Гарәп язуы һәм мәдәнияте', status: SubjectStatus.current },
        { id: 4, title: ' Гарәп язуы һәм мәдәнияте', status: SubjectStatus.blocked },
      ],
    },
    {
      id: 3,
      title: 'Гарәп язуы һәм мәдәнияте',
      status: SubjectStatus.blocked,
      lessons: [
        { id: 1, title: ' Гарәп язуы һәм мәдәнияте', status: SubjectStatus.blocked },
        { id: 2, title: ' Гарәп язуы һәм мәдәнияте', status: SubjectStatus.blocked },
        { id: 3, title: ' Гарәп язуы һәм мәдәнияте', status: SubjectStatus.blocked },
        { id: 4, title: ' Гарәп язуы һәм мәдәнияте', status: SubjectStatus.blocked },
        { id: 5, title: ' Гарәп язуы һәм мәдәнияте', status: SubjectStatus.blocked },
      ],
    },
    {
      id: 4,
      title: 'Гарәп язуы һәм мәдәнияте',
      status: SubjectStatus.blocked,
      lessons: [
        { id: 1, title: ' Гарәп язуы һәм мәдәнияте', status: SubjectStatus.blocked },
        { id: 2, title: ' Гарәп язуы һәм мәдәнияте', status: SubjectStatus.blocked },
        { id: 3, title: ' Гарәп язуы һәм мәдәнияте', status: SubjectStatus.blocked },
        { id: 4, title: ' Гарәп язуы һәм мәдәнияте', status: SubjectStatus.blocked },
        { id: 5, title: ' Гарәп язуы һәм мәдәнияте', status: SubjectStatus.blocked },
      ],
    },
  ],
};
