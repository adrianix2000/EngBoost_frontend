export interface Session {
  id: number;
  title: string;
  isshared: boolean;
  createdate: string;
  username: string;
  viewnumber: number;
}

export interface SessionCreateRequest {
  title: string;
  username: string;
  isshared: boolean;
}

export interface SessionUpdateRequest {
  title: string;
  isshared: boolean;
}
