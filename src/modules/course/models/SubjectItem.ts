import AbstractModel from '../../../base/AbstractModel';
import { ICourseProgress } from '../../../base/types/SubjectTypes';

export class SubjectItem extends AbstractModel {
  id: number | null = null;
  title: string | null = null;
  description: string | null = null;
  progress: ICourseProgress | null = null;
  img: string | null = null;
  author: string | null = null;

  constructor(props: any) {
    super();
    this.load(props);
  }
}
