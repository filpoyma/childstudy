import React from 'react';
import {Form, Input, Button, Select, Message} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {DateInput} from 'semantic-ui-calendar-react';
import {v4 as uuidv4} from 'uuid';
import {signup} from '../../redux/auth/actions';
import {
  //studyPlaceOptionsKazan,
  studyPlaceOptionsMoscow,
  //studyPlaceOptionsYakutiya,
} from '../../api/kinderGardensList';
import {cityOptions, genderOptions} from "../../api/signUpConsts";


const classNumberOptions = [
  {key: '1', text: '1', value: '1'},
  {key: '2', text: '2', value: '2'},
  {key: '3', text: '3', value: '3'},
  {key: '4', text: '4', value: '4'},
];

const classLetterOptions = [
  {key: 'а', text: 'а', value: 'а'},
  {key: 'б', text: 'б', value: 'б'},
  {key: 'в', text: 'в', value: 'в'},
  {key: 'г', text: 'г', value: 'г'},
  {key: 'д', text: 'д', value: 'д'},
  {key: 'е', text: 'е', value: 'е'},
  {key: 'ж', text: 'ж', value: 'ж'},
  {key: 'з', text: 'з', value: 'з'},
  {key: 'и', text: 'и', value: 'и'},
];

let studyPlaceOptions = [
  {key: 'choise', text: 'сначало выберите регион', value: ''},
];

let noSchools = [
  {key: 'noSch', text: 'в этом регионе нет теста для школьников', value: ''},
];

const shuvalovsk = 'Шуваловская гимназия (ст.м. Университет)';

class SignUp extends React.Component {
  state = {
    name: 'Школьники',
    email: '',
    password: '',
    password2: '',
    gender: '',
    city: '',
    studyplace: '',
    schoolsClassNum: '',
    schoolsClassLetter: '',
    date: '',
    agreement: false,
    error: {},
  };

  submitHandler = (event) => {
    const {name, email, password, gender, city, studyplace, schoolsClassNum, schoolsClassLetter, date, agreement} = this.state;
    event.preventDefault();
    if (gender.length === 0)
      this.setState({error: {gender: {content: 'Не выбран пол'}}});
    else if (!/[0-9][0-9].[0-9][0-9].[0-9][0-9][0-9][0-9]/.test(date))
      this.setState({error: {date: true}});
    else if (city.length === 0)
      this.setState({error: {city: {content: 'Не выбран регион'}}});
    else if (studyplace.length === 0)
      this.setState({
        error: {studyplace: {content: 'Не выбрано место учебы'}},
      });
    else if ((schoolsClassNum.length === 0) && (studyplace === shuvalovsk))
      this.setState({error: {schoolsClassNum: {content: 'Не выбран номер'}}});
    else if ((schoolsClassLetter.length === 0) && (studyplace === shuvalovsk))
      this.setState({error: {schoolsClassLetter: {content: 'Не выбрана буква'}}});
    // else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    //   this.setState({error: {email: {content: 'Неправильный email'}}});
    else if (email !== 'ученик')
      this.setState({error: {email: {content: 'Неправильное секретное слово'}}});
    // else if (password.length < 6)
    //   this.setState({
    //     error: {
    //       password: {content: 'Минимальная длинна пароля - 6 символов'},
    //     },
    //   });
    // else if (password !== password2)
    //   this.setState({
    //     error: {
    //       password: {content: 'Пароли не совподают'},
    //       password2: {content: 'Пароли не совподают'},
    //     },
    //   });
    else if (!agreement)
      this.setState({
        error: {
          agreement: {content: 'Вы должны дать свое согласие'},
        },
      });
    else {
      this.props
        .signup({
          name,
          email: `${email}@${uuidv4().slice(-12)}.ru`,
          password: password+uuidv4(),
          gender,
          city,
          studyplace,
          schoolClass: `${schoolsClassNum}${schoolsClassLetter}`,
          date: date.split('.').reverse().join('-'),
        })
        .then(() => this.props.isAuth && this.props.history.push('/testselector'));
    }
  };

  changeHandler = (event) => {
    this.setState({[event.target.name]: event.target.value});
    this.setState({error: {}});
  };

  changeSelectFormHandler = (event, value) => {
    this.setState({[value.name]: value.value});
    this.setState({error: {}});
  };

  changeCheckFormHandler = (event, value) => {
    this.setState({[value.name]: value.checked});
    this.setState({error: {}});
  };


  render() {
    const {city, studyplace, date, error} = this.state;

    if (city === 'Москва')
      studyPlaceOptions = studyPlaceOptionsMoscow;
    if (city === 'Якутия')
      studyPlaceOptions = noSchools;
    if (city === 'Казань')
      studyPlaceOptions = noSchools;
    return (
      <div className='containerapp'>
        <Message
          attached
          header='Регистрация для школьников.'
          content='Заполните все поля для создания нового аккаунта.'
        />
        <Form
          className='attached fluid segment'
          loading={this.props.loading}
          onSubmit={this.submitHandler}
        >
          <Form.Group widths='equal'>
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
              searchInput={{id: 'form-select-control-gender'}}
              onChange={this.changeSelectFormHandler}
              error={error.gender}
              //onChange={(e, value) => console.log(value.value)}
            />

            <DateInput
              name="date"
              label='дата рождения'
              placeholder="ДД.ММ.ГГГГ"
              dateFormat='DD.MM.YYYY'
              value={date}
              iconPosition="left"
              onChange={this.changeSelectFormHandler}
              animation='no'
              hideMobileKeyboard
              initialDate="01.04.2010"
              closable={true}
              error={error.date}
            />
          </Form.Group>
          <Form.Field
            control={Select}
            options={cityOptions}
            name='city'
            label={{children: 'регион', htmlFor: 'form-select-control-city'}}
            placeholder='выберите из списка'
            //search
            searchInput={{id: 'form-select-control-city'}}
            onChange={this.changeSelectFormHandler}
            error={error.city}
          />
          <Form.Field
            control={Select}
            options={studyPlaceOptions}
            name='studyplace'
            label={{
              children: 'школа',
              htmlFor: 'form-select-control-study',
            }}
            placeholder='выберите из списка'
            //search
            searchInput={{id: 'form-select-control-study'}}
            onChange={this.changeSelectFormHandler}
            error={error.studyplace}
          />
          {(studyplace === shuvalovsk) &&
          <Form.Group widths='equal'>
            <Form.Field
              control={Select}
              options={classNumberOptions}
              name='schoolsClassNum'
              label={{
                children: 'номер класа',
                htmlFor: 'form-select-control-schoolsClassNum',
              }}
              placeholder='выберите из списка'
              //search
              searchInput={{id: 'form-select-control-schoolsClassNum'}}
              onChange={this.changeSelectFormHandler}
              error={error.schoolsClassNum}
            />
            <Form.Field
              control={Select}
              options={classLetterOptions}
              name='schoolsClassLetter'
              label={{
                children: 'классная буква',
                htmlFor: 'form-select-control-schoolsClassLetter',
              }}
              placeholder='выберите из списка'
              //search
              searchInput={{id: 'form-select-control-schoolsClassLetter'}}
              onChange={this.changeSelectFormHandler}
              error={error.schoolsClassLetter}
            />
          </Form.Group>
          }
          <Form.Field
            id='form-input-control-email'
            name='email'
            control={Input}
            label='секретное слово'
            placeholder='***'
            type='text'
            onChange={this.changeHandler}
            error={error.email}
          />
          {/*<Form.Field*/}
          {/*  id='form-input-control-error-password'*/}
          {/*  name='password'*/}
          {/*  control={Input}*/}
          {/*  type='password'*/}
          {/*  label='пароль'*/}
          {/*  placeholder='******'*/}
          {/*  onChange={this.changeHandler}*/}
          {/*  error={error.password}*/}
          {/*/>*/}
          {/*<Form.Field*/}
          {/*  id='form-input-control-error-password2'*/}
          {/*  name='password2'*/}
          {/*  control={Input}*/}
          {/*  type='password'*/}
          {/*  label='пароль повторно'*/}
          {/*  placeholder='******'*/}
          {/*  onChange={this.changeHandler}*/}
          {/*  error={error.password2}*/}
          {/*  //   error={{*/}
          {/*  //   content: 'Введите правильный email адрес',*/}
          {/*  //   pointing: 'below',*/}
          {/*  // }}*/}
          {/*/>*/}
          <Form.Checkbox
            label='Я даю свое согласие на анонимизированное использование в данном исследовательском проекте предоставленной мной информации'
            name='agreement'
            error={error.agreement}
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
    signup: (data) => dispatch(signup(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
