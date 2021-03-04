import { Component } from 'react';
import PhonebookPage from '../../pages/PhonebookPage';
import Header from '../Header';
import Login from '../../pages/loginPage';
import Register from '../../pages/Register';
import { Redirect, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { getIsAuthorized } from '../../redux/user/userSelectors';
import r from '../routes';

class App extends Component {
  render() {
    const { isAuthorized } = this.props;

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
            <Redirect to={r.register} />
          </>
        )}
      </>
    );
  }
}

const mapStateToProps = state => ({
  isAuthorized: getIsAuthorized(state),
});

export default connect(mapStateToProps)(App);
