import AbstractModel from '../../../base/AbstractModel';
import { ISubjectAuthor, ISubjectItem } from '../../../base/types/SubjectTypes';

export class Course extends AbstractModel {
  id: number | null = null;
  title: string | null = null;
  description: string | null = null;
  lessonsList: ISubjectItem[] | null = null;
  authors: ISubjectAuthor[] | null = null;

  constructor(props: any) {
    super();
    this.load(props);
  }
}
