const dev = {
  SERVER_URL: 'https://5cd22098-97e5-48c9-8b3e-58670e61a142.mock.pstmn.io',
  REDIRECT_URL: 'http://localhost:3000',
};

const prod = {
  SERVER_URL: 'https://15.164.228.216',
  REDIRECT_URL: 'https://curtain-call.kr',
};

const config = process.env.NODE_ENV === 'development' ? dev : prod;

export { config };
