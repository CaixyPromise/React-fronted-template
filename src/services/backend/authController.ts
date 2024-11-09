// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** getLoginUser GET /api/auth/get/login */
export async function getLoginUserUsingGet1(options?: { [key: string]: any }) {
  return request<API.ResultLoginUserVO_>('/api/auth/get/login', {
    method: 'GET',
    ...(options || {}),
  });
}

/** userLogin POST /api/auth/login */
export async function userLoginUsingPost1(
  body: API.UserLoginRequest,
  options?: { [key: string]: any },
) {
  return request<API.ResultLoginUserVO_>('/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** userLoginByWxOpen GET /api/auth/login/wx_open */
export async function userLoginByWxOpenUsingGet1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.userLoginByWxOpenUsingGET1Params,
  options?: { [key: string]: any },
) {
  return request<API.ResultLoginUserVO_>('/api/auth/login/wx_open', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** userLogout POST /api/auth/logout */
export async function userLogoutUsingPost1(options?: { [key: string]: any }) {
  return request<API.ResultBoolean_>('/api/auth/logout', {
    method: 'POST',
    ...(options || {}),
  });
}

/** oAuthLoginCallback GET /api/auth/oauth2/${param0}/callback */
export async function oAuthLoginCallbackUsingGet1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.oAuthLoginCallbackUsingGET1Params,
  options?: { [key: string]: any },
) {
  const { provider: param0, ...queryParams } = params;
  return request<any>(`/api/auth/oauth2/${param0}/callback`, {
    method: 'GET',
    params: {
      ...queryParams,
      allParams: undefined,
      ...queryParams['allParams'],
    },
    ...(options || {}),
  });
}

/** initOAuthLogin GET /api/auth/oauth2/${param0}/login */
export async function initOAuthLoginUsingGet1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.initOAuthLoginUsingGET1Params,
  options?: { [key: string]: any },
) {
  const { provider: param0, ...queryParams } = params;
  return request<API.ResultString_>(`/api/auth/oauth2/${param0}/login`, {
    method: 'GET',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}
