import AbstractModel from '../../../base/AbstractModel';

export class Course extends AbstractModel {
  courseData: number | null = null;

  constructor(props: any) {
    super();
    this.load(props);
  }
}
