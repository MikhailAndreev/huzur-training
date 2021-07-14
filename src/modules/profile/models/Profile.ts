import AbstractModel from '../../../base/AbstractModel';

export class Profile extends AbstractModel {
  id: number | null = null;
  name: string | null = null;
  surname: string | null = null;
  email: string | null = null;
  photo: string | null = null;
  enableNotification: boolean | null = null;

  constructor(props: any) {
    super();
    this.load(props);
  }
}
