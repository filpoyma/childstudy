import React from 'react';
import { Form, Input, Button, Message, Icon } from 'semantic-ui-react';
import { signin } from '../../redux/auth/actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class ForgotPassw extends React.Component {
  state = {
    email: '',
    password: '',
    error: false,
  };

  submitHandler = (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.state.email))
      this.setState({ error: { email: { content: 'Неправильный email' } } });
    else
      this.props
        .forgot(email)
        .then(() =>  this.props.history.push('/infoPassw'));
  };

  changeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    this.setState({ error: {} });
  };

  render() {
    return (
      <div className='containerapp'>
        <Message
          attached
          header='Здравствуйте!'
          content='Заполните поля для входа.'
        />
        <Form
          className='attached fluid segment'
          loading={this.props.loading}
          onSubmit={this.submitHandler}
        >
          <Form.Field
            id='form-input-control-email'
            name={'email'}
            control={Input}
            label='email'
            placeholder='mail@mail.com'
            type='email'
            onChange={this.changeHandler}
            error={this.state.error.email}
          />
          <Form.Field
            id='form-input-control-error-email'
            name={'password'}
            value={this.state.password}
            control={Input}
            type='password'
            label='пароль'
            placeholder='******'
            onChange={this.changeHandler}
            //   error={{
            //   content: 'Введите правильный email адрес',
            //   pointing: 'below',
            // }}
          />
          <Form.Field
            id='form-button-control-public'
            control={Button}
            type='submit'
            content='OK'
          />
        </Form>
        <Message attached='bottom'>
          <Icon name='help' />
          Еще не зарегистрированы? Тогда вам <Link to='/signup'>сюда.</Link>
        </Message>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.auth.loading,
    isAuth: state.auth.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signin: (email, password) => dispatch(signin(email, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassw);
