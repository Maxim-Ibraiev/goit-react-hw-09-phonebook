import { Component } from 'react';
import { login } from '../../redux/user/userOperations';
import { connect } from 'react-redux';
import Input from '../../components/Input';
import Button from '../../components/Buttons/ButtonSubmit';
import s from './Login.module.scss';

class Login extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const user = {
      email: formData.get('email'),
      password: formData.get('password'),
    };
    this.props.onLogin(user);
  };

  render() {
    const { email, password } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className={s.form}>
        <Input
          label={'Email'}
          value={email}
          onChange={this.handleChange}
          type="email"
        />
        <Input
          label={'Password'}
          value={password}
          onChange={this.handleChange}
          type="current-password"
        />

        <Button type="submit" text={'Войти'}></Button>
      </form>
    );
  }
}

// const mapStateToProps = state => ({
// });

const mapDispatchToProps = {
  onLogin: login,
};

export default connect(null, mapDispatchToProps)(Login);
