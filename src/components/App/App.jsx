import { useEffect } from 'react';
import Layout from '../Layout';
import PhonebookPage from '../../pages/PhonebookPage';
import Header from '../Header';
import Login from '../../pages/loginPage';
import Register from '../../pages/Register';
import { Redirect, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getToken, getError } from '../../redux/user/userSelectors';
import * as userActions from '../../redux/user/userOperations';
import { getIsAuthorized } from '../../redux/user/userSelectors';
import r from '../routes';

function App() {
  const token = useSelector(getToken);
  const error = useSelector(getError);
  const isAuthorized = useSelector(getIsAuthorized);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) userActions.userToken.setToken(token);
    if (token && !isAuthorized) dispatch(userActions.currentUser());
  });

  return (
    <Layout>
      <Route path={r.home} component={Header} />
      <Switch>
        {token && !error && (
          <>
            <Route path={r.contacts} exact component={PhonebookPage} />
            <Redirect to={r.contacts} />
          </>
        )}
        {!isAuthorized && (
          <>
            <Route path={r.register} exact component={Register} />
            <Route path={r.login} exact component={Login} />
            <Redirect to={r.login} />
          </>
        )}
      </Switch>
    </Layout>
  );
}

export default App;
