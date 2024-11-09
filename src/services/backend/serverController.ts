// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** getMonitorInfo GET /api/monitor/server/ */
export async function getMonitorInfoUsingGet1(options?: { [key: string]: any }) {
  return request<API.ResultServerInfo_>('/api/monitor/server/', {
    method: 'GET',
    ...(options || {}),
  });
}
