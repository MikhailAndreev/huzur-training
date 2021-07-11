interface ICourseProgress {
  fullCourse: number;
  current: number;
}

export interface ICourseItem {
  id: number;
  title: string;
  description: string;
  progress: ICourseProgress;
  img: string;
  author: string;
}

interface ISubjectAuthor {
  id: number;
  img: string;
  name: string;
}

export interface ISubjectData {
  id: number;
  title: string;
  description: string;
  lessonsList: ISubjectItem[];
  authors: ISubjectAuthor[];
}

export interface ISubjectItem {
  id: number;
  title: string;
  status: 'current' | 'completed' | 'blocked' | string;
  lessons: ISubjectLesson[];
}

export type ISubjectLesson = Omit<ISubjectItem, 'lessons'>;
