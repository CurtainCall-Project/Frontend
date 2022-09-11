import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const AdminRoute = ({ component: Component, ...rest }) => {
  const roleType = useSelector((state) => state.user.roleType);

  return (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /signin page
    <Route
      {...rest}
      render={(props) =>
        roleType === 'ADMIN' ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default AdminRoute;
