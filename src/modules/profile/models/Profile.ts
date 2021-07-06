import AbstractModel from '../../../base/AbstractModel';

export class Profile extends AbstractModel {
  userData: number | null = null;

  constructor(props: any) {
    super();
    this.load(props);
  }
}
