// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** getCaptcha GET /api/captcha/get */
export async function getCaptchaUsingGet1(options?: { [key: string]: any }) {
  return request<API.ResultCaptchaVO_>('/api/captcha/get', {
    method: 'GET',
    ...(options || {}),
  });
}
