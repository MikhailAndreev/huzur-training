export interface IProfileData {
  [key: string]: any;
  id: number;
  name: string;
  surname: string;
  email: string;
  photo: string;
  enableNotification: boolean;
}

export interface IProfileEmailForm {
  email: string | null;
  password: string | null;
}

export interface IProfilePasswordFormState {
  oldPassword: string;
  newPassword: string;
  confirmNewPassword: string;
}
