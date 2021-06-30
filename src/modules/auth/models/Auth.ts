import AbstractModel from '../../../base/AbstractModel';

export class Auth extends AbstractModel {
  token: number | null = null;

  constructor(props: any) {
    super();
    this.load(props);
  }
}
