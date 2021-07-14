export interface ICourseProgress {
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

export interface ISubjectAuthor {
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

export enum SubjectStatus {
  current,
  completed,
  blocked,
}

export interface ISubjectItem {
  id: number;
  title: string;
  status: SubjectStatus;
  lessons: ISubjectLesson[];
}

export type ISubjectLesson = Omit<ISubjectItem, 'lessons'>;
