// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** forceLogout POST /api/admin/forceLogout */
export async function forceLogoutUsingPost1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.forceLogoutUsingPOST1Params,
  options?: { [key: string]: any },
) {
  return request<API.ResultBoolean_>('/api/admin/forceLogout', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** getOnlineUsers GET /api/admin/onlineUsers */
export async function getOnlineUsersUsingGet1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getOnlineUsersUsingGET1Params,
  options?: { [key: string]: any },
) {
  return request<API.ResultPageUserVO_>('/api/admin/onlineUsers', {
    method: 'GET',
    params: {
      // page has a default value: 1
      page: '1',
      // size has a default value: 10
      size: '10',
      ...params,
    },
    ...(options || {}),
  });
}
