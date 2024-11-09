import {CURRENT_LOGIN_TYPE, LOGIN_TOKEN_KEY, LOGIN_TYPE} from "@/constants";
import {LocalStorageUtil} from "@/utils/LocalStorageUtil";

export class TokenUtil
{
  static isTokenLoggedIn(): boolean {
    return CURRENT_LOGIN_TYPE === LOGIN_TYPE.TOKEN;
  }

  static getToken(): string | null {
    return LocalStorageUtil.getItem(LOGIN_TOKEN_KEY);
  }

  static setToken(token: string) {
    if (token && token.length > 0) {
      LocalStorageUtil.setItem(LOGIN_TOKEN_KEY, token);
    }
  }
}
