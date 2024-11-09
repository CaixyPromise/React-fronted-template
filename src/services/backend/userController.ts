// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** addUser POST /api/user/add */
export async function addUserUsingPost1(
  body: API.UserAddRequest,
  options?: { [key: string]: any },
) {
  return request<API.ResultAddUserVO_>('/api/user/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** deleteUser POST /api/user/delete */
export async function deleteUserUsingPost1(
  body: API.DeleteRequest,
  options?: { [key: string]: any },
) {
  return request<API.ResultBoolean_>('/api/user/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getUserById GET /api/user/get */
export async function getUserByIdUsingGet1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getUserByIdUsingGET1Params,
  options?: { [key: string]: any },
) {
  return request<API.ResultUser_>('/api/user/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** getEncryptEmailInfo GET /api/user/get/encrypt/info */
export async function getEncryptEmailInfoUsingGet1(options?: { [key: string]: any }) {
  return request<API.ResultEncryptAccountVO_>('/api/user/get/encrypt/info', {
    method: 'GET',
    ...(options || {}),
  });
}

/** getMe GET /api/user/get/me */
export async function getMeUsingGet1(options?: { [key: string]: any }) {
  return request<API.ResultAboutMeVO_>('/api/user/get/me', {
    method: 'GET',
    ...(options || {}),
  });
}

/** getUserVOById GET /api/user/get/vo */
export async function getUserVoByIdUsingGet1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getUserVOByIdUsingGET1Params,
  options?: { [key: string]: any },
) {
  return request<API.ResultUserVO_>('/api/user/get/vo', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** listUserByPage POST /api/user/list/page */
export async function listUserByPageUsingPost1(
  body: API.UserQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.ResultPageUser_>('/api/user/list/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** listUserVOByPage POST /api/user/list/page/vo */
export async function listUserVoByPageUsingPost1(
  body: API.UserQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.ResultPageUserVO_>('/api/user/list/page/vo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** modifyPassword POST /api/user/modify/password */
export async function modifyPasswordUsingPost1(
  body: API.UserModifyPasswordRequest,
  options?: { [key: string]: any },
) {
  return request<API.ResultBoolean_>('/api/user/modify/password', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** userRegister POST /api/user/register */
export async function userRegisterUsingPost1(
  body: API.UserRegisterRequest,
  options?: { [key: string]: any },
) {
  return request<API.ResultBoolean_>('/api/user/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** resetEmail POST /api/user/reset/email */
export async function resetEmailUsingPost1(
  body: API.UserResetEmailRequest,
  options?: { [key: string]: any },
) {
  return request<API.ResultBoolean_>('/api/user/reset/email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** updateUser POST /api/user/update */
export async function updateUserUsingPost1(
  body: API.UserUpdateRequest,
  options?: { [key: string]: any },
) {
  return request<API.ResultBoolean_>('/api/user/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** updateMeProfile POST /api/user/update/me */
export async function updateMeProfileUsingPost1(
  body: API.UserUpdateProfileRequest,
  options?: { [key: string]: any },
) {
  return request<API.ResultBoolean_>('/api/user/update/me', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
