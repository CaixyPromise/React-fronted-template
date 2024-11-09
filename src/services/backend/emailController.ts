// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** sendEmail POST /api/email/send */
export async function sendEmailUsingPost1(
  body: API.SendEmailRequest,
  options?: { [key: string]: any },
) {
  return request<API.ResultBoolean_>('/api/email/send', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
