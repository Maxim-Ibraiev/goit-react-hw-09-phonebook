import { Component } from 'react';
import { connect } from 'react-redux';
import { singUp } from '../../redux/user/userOperations';
import Input from '../../components/Input';
import Button from '../../components/Buttons/ButtonSubmit';
import s from './Registe.module.scss';
class Register extends Component {
  state = {
    name: '',
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
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password'),
    };
    this.props.onSingUp(user);
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className={s.form}>
        <Input label={'Name'} value={name} onChange={this.handleChange} />
        <Input
          label={'Email'}
          value={email}
          type={'email'}
          onChange={this.handleChange}
        />
        <Input
          label={'Password'}
          value={password}
          type={'password'}
          onChange={this.handleChange}
        />

        {/* <label>
          Name
          <input onChange={this.handleChange} type="text" name="name" />
        </label> */}
        {/* <label>
          Email
          <input onChange={this.handleChange} type="email" name="email" />
        </label>

        <label>
          Password
          <input onChange={this.handleChange} type="password" name="password" />
        </label> */}

        {/* <button>Войти</button> */}
        <Button text={'Войти'}></Button>
      </form>
    );
  }
}

// const mapStateToProps = state => ({});

const mapDispatchToProps = {
  onSingUp: singUp,
};

export default connect(null, mapDispatchToProps)(Register);
