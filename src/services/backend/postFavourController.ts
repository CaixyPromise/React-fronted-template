// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** doPostFavour POST /api/post_favour/ */
export async function doPostFavourUsingPost1(
  body: API.PostFavourAddRequest,
  options?: { [key: string]: any },
) {
  return request<API.ResultInt_>('/api/post_favour/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** listFavourPostByPage POST /api/post_favour/list/page */
export async function listFavourPostByPageUsingPost1(
  body: API.PostFavourQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.ResultPagePostVO_>('/api/post_favour/list/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** listMyFavourPostByPage POST /api/post_favour/my/list/page */
export async function listMyFavourPostByPageUsingPost1(
  body: API.PostQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.ResultPagePostVO_>('/api/post_favour/my/list/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
