import { useEffect } from 'react';
import PhonebookPage from '../../pages/PhonebookPage';
import Header from '../Header';
import Login from '../../pages/loginPage';
import Register from '../../pages/Register';
import { Redirect, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { getToken } from '../../redux/user/userSelectors';
import * as userActions from '../../redux/user/userOperations';
import { getIsAuthorized } from '../../redux/user/userSelectors';
import r from '../routes';

function App({ isAuthorized, fetchCurrentUser, token }) {
  useEffect(() => {
    if (token) userActions.userToken.setToken(token);

    if (token && !isAuthorized) fetchCurrentUser();
  });

  return (
    <>
      <Route path={r.home} component={Header} />
      {isAuthorized ? (
        <>
          <Switch>
            <Route path={r.contacts} component={PhonebookPage} />
            <Redirect to={r.contacts} />
          </Switch>
        </>
      ) : (
        <>
          <Switch>
            <Route path={r.register} exact component={Register} />
            <Route path={r.login} exact component={Login} />
            <Redirect to={r.login} />
          </Switch>
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
