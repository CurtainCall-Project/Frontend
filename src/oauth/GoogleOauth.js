export const GOOGLE_REDIRECT_URI = 'http://localhost:3000/mypage/nickname';
const GOOGLE_AUTH_URL = `https://accounts.google.com/o/oauth2/auth?client_id=${process.env.REACT_APP_GOOGLE_CLIENT_ID}&redirect_uri=${GOOGLE_REDIRECT_URI}&scope=https://www.googleapis.com/auth/contacts.readonly&response_type=code`;
