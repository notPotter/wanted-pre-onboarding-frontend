export interface UserInfo {
  email: string;
  password: string;
}

export interface TodoEdit {
  todo: string;
  isCompleted: boolean;
}

export interface TodoInfo {
  id: string;
  todo: string;
  isCompleted: boolean;
  userId: string;
}
