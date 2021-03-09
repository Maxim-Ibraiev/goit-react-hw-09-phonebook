import { useEffect } from 'react';
import PhonebookPage from '../../pages/PhonebookPage';
import Header from '../Header';
import Login from '../../pages/loginPage';
import Register from '../../pages/Register';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { getToken } from '../../redux/user/userSelectors';
import * as userActions from '../../redux/user/userOperations';
import { getIsAuthorized } from '../../redux/user/userSelectors';
import r from '../routes';

function App({ isAuthorized, fetchCurrentUser, token }) {
  useEffect(() => {
    if (token) {
      userActions.userToken.setToken(token);

      fetchCurrentUser();
    }
  });

  return (
    <>
      <Route path={r.home} component={Header} />
      {isAuthorized ? (
        <>
          <Route path={r.contacts} component={PhonebookPage} />
          <Redirect to={r.contacts} />
        </>
      ) : (
        <>
          <Route path={r.register} component={Register} />
          <Route path={r.login} component={Login} />
          <Redirect to={r.login} />
        </>
      )}
    </>
  );
}

const mapStateToProps = state => ({
  isAuthorized: getIsAuthorized(state),
  token: getToken(state),
});

const mapDispatchToProps = dispatch => ({
  fetchCurrentUser: () => dispatch(userActions.currentUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
