import { request } from 'umi';
import { saveAs } from 'file-saver';

export async function get<T>(url: string, params: any) {
  return request<T>(url, {
      method: 'GET',
      params,
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
}

export async function postJson<T>(url: string, data?: any) {
  return request<T>(url, {
    method: 'POST',
    data,
    headers: {
      ...getHeaders(),
      'Content-Type': 'application/json',
    },
  });
}

export async function postForm<T>(url: string, params?: any) {
  return request<T>(url, {
    method: 'POST',
    params,
    headers: {
      ...getHeaders(),
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
}

export async function deleteForm<T>(url: string, params?: any) {
  return request<T>(url, {
    method: 'DELETE',
    params,
    headers: {
      ...getHeaders(),
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
}

export function getHeaders() {
  return {
    'Content-Type': 'application/json',
  };
}

export function saveFile(url: string, name: string) {
  saveAs(url, name);
}
