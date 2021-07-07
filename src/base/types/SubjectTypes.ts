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
