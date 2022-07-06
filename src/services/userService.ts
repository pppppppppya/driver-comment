import { postJson } from '@/common/request';

export async function login(username: string, password: string) {
  return postJson<LoginResponse>('/api/Login/account', { username, password });
}

export async function getSelf() {
  return postJson<CurrentUser>('/api/Login/account');
}

export function logout() {

}
