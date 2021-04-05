import React from 'react';
import { Form, Input, Button, Select, Message } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { signup } from '../../redux/auth/actions';
import {
  studyPlaceOptionsKazan,
  studyPlaceOptionsMoscow,
  studyPlaceOptionsYakutiya,
} from '../../api/kinderGardensList';

const genderOptions = [
  { key: 'm', text: 'Мальчик', value: 'boys' },
  { key: 'f', text: 'Девочка', value: 'girls' },
];

let studyPlaceOptions = [
  { key: 'choise', text: 'сначало выберите город', value: '' },
];

class SignUp extends React.Component {
  state = {
    name: '',
    email: '',
    password: '',
    password2: '',
    gender: '',
    city: '',
    studyplace: '',
    agreement: false,
    error: {},
  };

  submitHandler = (event) => {
    const { name, email, password, gender, city, studyplace } = this.state;
    event.preventDefault();
    if (this.state.name.length < 4)
      this.setState({
        error: { name: { content: 'Имя задано не полностью' } },
      });
    //pointing: 'below' - для надписи сверху
    else if (this.state.gender.length === 0)
      this.setState({ error: { gender: { content: 'Не выбран пол' } } });
    else if (this.state.city.length === 0)
      this.setState({ error: { city: { content: 'Не выбран регион' } } });
    else if (this.state.studyplace.length === 0)
      this.setState({
        error: { studyplace: { content: 'Не выбрано место учебы' } },
      });
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.state.email))
      this.setState({ error: { email: { content: 'Неправильный email' } } });
    else if (this.state.password.length < 6)
      this.setState({
        error: {
          password: { content: 'Минимальная длинна пароля - 6 символов' },
        },
      });
    else if (this.state.password !== this.state.password2)
      this.setState({
        error: {
          password: { content: 'Пароли не совподают' },
          password2: { content: 'Пароли не совподают' },
        },
      });
    else if (!this.state.agreement)
      this.setState({
        error: {
          agreement: { content: 'Вы должны дать свое согласие' },
        },
      });
    else
      this.props
        .signup(name, email, password, gender, city, studyplace)
        .then(() => this.props.isAuth && this.props.history.push('/testselector'));
  };

  changeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    this.setState({ error: {} });
  };

  changeSelectFormHandler = (event, value) => {
    this.setState({ [value.name]: value.value });
    this.setState({ error: {} });
  };

  changeCheckFormHandler = (event, value) => {
    this.setState({ [value.name]: value.checked });
    this.setState({ error: {} });
  };

  render() {
    if (this.state.city === 'Москва')
      studyPlaceOptions = studyPlaceOptionsMoscow;
    if (this.state.city === 'Якутия')
      studyPlaceOptions = studyPlaceOptionsYakutiya;
    if (this.state.city === 'Казань')
      studyPlaceOptions = studyPlaceOptionsKazan;
    return (
      <div className='containerapp'>
        <Message
          attached
          header='Добро пожаловать!'
          content='Заполните все поля для создания нового аккаунта.'
        />
        <Form
          className='attached fluid segment'
          loading={this.props.loading}
          onSubmit={this.submitHandler}
        >
          <Form.Field
            id='form-input-control-first-name'
            name='name'
            control={Input}
            label='ФИО ребенка'
            placeholder='Иванов Роман Витальевич'
            onChange={this.changeHandler}
            error={this.state.error.name}
          />
          <Form.Field
            control={Select}
            options={genderOptions}
            name='gender'
            label={{
              children: 'пол ребенка',
              htmlFor: 'form-select-control-gender',
            }}
            placeholder='выберите из списка'
            // search
            searchInput={{ id: 'form-select-control-gender' }}
            onChange={this.changeSelectFormHandler}
            error={this.state.error.gender}
            //onChange={(e, value) => console.log(value.value)}
          />
          <Form.Field
            control={Select}
            options={cityOptions}
            name='city'
            label={{ children: 'регион', htmlFor: 'form-select-control-city' }}
            placeholder='выберите из списка'
            //search
            searchInput={{ id: 'form-select-control-city' }}
            onChange={this.changeSelectFormHandler}
            error={this.state.error.city}
          />
          <Form.Field
            control={Select}
            options={studyPlaceOptions}
            name='studyplace'
            label={{
              children: 'образовательное учереждение, детский сад',
              htmlFor: 'form-select-control-study',
            }}
            placeholder='выберите из списка'
            //search
            searchInput={{ id: 'form-select-control-study' }}
            onChange={this.changeSelectFormHandler}
            error={this.state.error.studyplace}
          />
          <Form.Field
            id='form-input-control-email'
            name='email'
            control={Input}
            label='email'
            placeholder='mail@mail.com'
            type='email'
            onChange={this.changeHandler}
            error={this.state.error.email}
          />
          <Form.Field
            id='form-input-control-error-password'
            name='password'
            control={Input}
            type='password'
            label='пароль'
            placeholder='******'
            onChange={this.changeHandler}
            error={this.state.error.password}
          />
          <Form.Field
            id='form-input-control-error-password2'
            name='password2'
            control={Input}
            type='password'
            label='пароль повторно'
            placeholder='******'
            onChange={this.changeHandler}
            error={this.state.error.password2}
            //   error={{
            //   content: 'Введите правильный email адрес',
            //   pointing: 'below',
            // }}
          />
          <Form.Checkbox
            label='Я даю свое согласие на анонимизированное использование в данном исследовательском проекте предоставленной мной информации'
            name='agreement'
            error={this.state.error.agreement}
            onChange={this.changeCheckFormHandler}
          />
          <Form.Field
            id='form-button-control-public'
            type='submit'
            control={Button}
            content='Зарегистрироваться и войти'
          />
        </Form>
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
    signup: (name, email, password, gender, city, studyplace) =>
      dispatch(signup(name, email, password, gender, city, studyplace)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
