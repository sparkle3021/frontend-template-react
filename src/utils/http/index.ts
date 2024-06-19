import { request } from '@umijs/max';

// 封装常用请求方法
const http = {
  get: <T>(url: string, params?: any, options?: { [key: string]: any }) => {
    return request<T>(url, {
      method: 'GET',
      params,
      ...(options || {}),
    });
  },
  post: <T>(url: string, data?: any, options?: { [key: string]: any }) => {
    return request<T>(url, {
      method: 'POST',
      data,
      ...(options || {}),
    });
  },
  put: <T>(url: string, data?: any, options?: { [key: string]: any }) => {
    return request<T>(url, {
      method: 'PUT',
      data,
      ...(options || {}),
    });
  },
  delete: <T>(url: string, params?: any, options?: { [key: string]: any }) => {
    return request<T>(url, {
      method: 'DELETE',
      params,
      ...(options || {}),
    });
  },
  upload: <T>(url: string, file: File, options?: { [key: string]: any }) => {
    const formData = new FormData();
    formData.append('file', file);
    return request<T>(url, {
      method: 'POST',
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      ...(options || {}),
    });
  },
};

export default http;
