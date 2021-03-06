import React from 'react';
import { Redirect, Route } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, ...rest }: any) => (
  <Route
    {...rest}
    render={props => localStorage.getItem('authToken') ? (
      <Component {...props} />
    ) : (
      <Redirect
        to={{
          pathname: '/',
          state: { from: props.location}
          }}
        />
      )
    }
  />
);
