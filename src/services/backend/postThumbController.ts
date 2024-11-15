// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** doThumb POST /api/post_thumb/ */
export async function doThumbUsingPost1(
  body: API.PostThumbAddRequest,
  options?: { [key: string]: any },
) {
  return request<API.ResultInt_>('/api/post_thumb/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
