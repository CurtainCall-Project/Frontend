const dev = {
  SERVER_URL: `${process.env.REACT_APP_DEV_SERVER_URL}`,
  REDIRECT_URL: 'http://localhost:3000',
};

const prod = {
  SERVER_URL: 'https://server.curtain-call.kr',
  REDIRECT_URL: 'https://curtain-call.kr',
};

const config = process.env.NODE_ENV === 'development' ? dev : prod;

export { config };
