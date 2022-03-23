import { config } from '../config';
export const GOOGLE_AUTH_URL = `oauth2/authorization/google?redirect_uri=${config.REDIRECT_URL}`;
export const NAVER_AUTH_URL = `oauth2/authorization/naver?redirect_uri=${config.REDIRECT_URL}`;
export const KAKAO_AUTH_URL = `oauth2/authorization/kakao?redirect_uri=${config.REDIRECT_URL}`;
