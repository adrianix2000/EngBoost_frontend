export interface userRegisterEntity {
  firstName: string;
  lastName: string;
  userName: string;
  password: string;
  email: string;
}

export interface userLoginRequest {
  username: string;
  password: string;
}
