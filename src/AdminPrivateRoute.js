import { Route, Redirect } from 'react-router-dom';

const AdminPrivateRoute = ({ component: Component, ...rest }) => {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  const isAuthenticated = currentUser && currentUser.token;
  const isAdmin = currentUser && currentUser.role === 'admin';

  return (
    <Route {...rest} render={props => (
      isAuthenticated && isAdmin ?
        <Component {...props} /> :
        <Redirect to="/" />
    )} />
  );
}

export default AdminPrivateRoute;
