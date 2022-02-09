import React from 'react';

const OauthHandler = () => {
  const code = new URL(window.location.href).searchParams.get('code');
  return <>{code}</>;
};

export default OauthHandler;
