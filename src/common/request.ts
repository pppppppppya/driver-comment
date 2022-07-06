import { request } from 'umi';

export async function get<T>(url: string) {
  return request<T>(url, { method: 'GET' });
}

export async function postJson<T>(url: string, data: any) {
  return request<T>(url, {
    method: 'POST',
    data,
    headers: getHeaders(),
  });
}

export async function postForm<T>(url: string, data: any) {
  return request<T>(url, {
    method: 'POST',
    data,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
}

export function getHeaders() {
  return {
    'Content-Type': 'application/json',
  };
}
