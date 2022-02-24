import client from './client';
import {AuthResult, User} from './types';

interface RegisterParams {
  identifier: string;
  password: string;
}

interface LoginParams {
  username: string;
  email: string;
  password: string;
}

export async function register(params: RegisterParams) {
  const response = await client.post<AuthResult>(
    '/auth/local/register',
    params,
  );

  return response.data;
}

export async function login(params: LoginParams) {
  const response = await client.post<AuthResult>('/auth/local', params);

  return response.data;
}
export async function getLoginStatus() {
  const response = await client.get<User>('/user/me');

  return response.data;
}
