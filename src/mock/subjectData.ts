import { ISubjectData } from '../base/types/SubjectTypes';

export const subjectData: ISubjectData = {
  id: 1,
  title: 'Гарәп язуы һәм мәдәнияте',
  description: 'asdadsad',
  authors: [
    { id: 1, img: 'asdasdad', name: 'Хамидуллин Ришат Ахтямович' },
    { id: 2, img: 'asdasdad', name: 'Хамидуллин Ришат Ахтямович' },
    { id: 3, img: 'asdasdad', name: 'Хамидуллин Ришат Ахтямович' },
    { id: 4, img: 'asdasdad', name: 'Хамидуллин Ришат Ахтямович' },
    { id: 5, img: 'asdasdad', name: 'Хамидуллин Ришат Ахтямович' },
    { id: 6, img: 'asdasdad', name: 'Хамидуллин Ришат Ахтямович' },
    { id: 7, img: 'asdasdad', name: 'Хамидуллин Ришат Ахтямович' },
  ],
  lessonsList: [
    {
      id: 1,
      title: 'Гарәп язуы һәм мәдәнияте',
      status: 'completed',
      lessons: [
        { id: 1, title: ' Гарәп язуы һәм мәдәнияте', status: 'completed' },
        { id: 2, title: ' Гарәп язуы һәм мәдәнияте', status: 'completed' },
        { id: 3, title: ' Гарәп язуы һәм мәдәнияте', status: 'completed' },
        { id: 4, title: ' Гарәп язуы һәм мәдәнияте', status: 'completed' },
        { id: 5, title: ' Гарәп язуы һәм мәдәнияте', status: 'completed' },
      ],
    },
    {
      id: 2,
      title: 'Гарәп язуы һәм мәдәнияте',
      status: 'current',
      lessons: [
        { id: 1, title: ' Гарәп язуы һәм мәдәнияте', status: 'completed' },
        { id: 2, title: ' Гарәп язуы һәм мәдәнияте', status: 'completed' },
        { id: 3, title: ' Гарәп язуы һәм мәдәнияте', status: 'current' },
        { id: 4, title: ' Гарәп язуы һәм мәдәнияте', status: 'blocked' },
      ],
    },
    {
      id: 3,
      title: 'Гарәп язуы һәм мәдәнияте',
      status: 'blocked',
      lessons: [
        { id: 1, title: ' Гарәп язуы һәм мәдәнияте', status: 'blocked' },
        { id: 2, title: ' Гарәп язуы һәм мәдәнияте', status: 'blocked' },
        { id: 3, title: ' Гарәп язуы һәм мәдәнияте', status: 'blocked' },
        { id: 4, title: ' Гарәп язуы һәм мәдәнияте', status: 'blocked' },
        { id: 5, title: ' Гарәп язуы һәм мәдәнияте', status: 'blocked' },
      ],
    },
    {
      id: 4,
      title: 'Гарәп язуы һәм мәдәнияте',
      status: 'blocked',
      lessons: [
        { id: 1, title: ' Гарәп язуы һәм мәдәнияте', status: 'blocked' },
        { id: 2, title: ' Гарәп язуы һәм мәдәнияте', status: 'blocked' },
        { id: 3, title: ' Гарәп язуы һәм мәдәнияте', status: 'blocked' },
        { id: 4, title: ' Гарәп язуы һәм мәдәнияте', status: 'blocked' },
        { id: 5, title: ' Гарәп язуы һәм мәдәнияте', status: 'blocked' },
      ],
    },
  ],
};
