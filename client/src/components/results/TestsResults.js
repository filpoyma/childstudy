import React from 'react';
import {connect} from 'react-redux';

import {delUser, getUsers} from '../../redux/users/actions';
import TableResult from './TableResult';
import {TableAllUsersM} from './TableAllUsers';
import {BtnResDel} from './BtnResDel';
import {BtnResSaver} from './BtnResSaver';
import GlobalLoader from '../layout/GlobalLoader';
import {DelConfirm} from '../layout/DelConfirm';
import {trueAnswers} from '../../api/trueAnswers';
import {cityOptions} from "../../api/signUpConsts";
import CitySelector from "./CitySelector";

const defaultCity = ['admin', cityOptions[0].value];

class TestsResults extends React.Component {
  state = {
    id: null,
    delId: null,
    checkedUsers: [],
    modalOpen: false,
    cities: defaultCity
  };

  componentDidMount() {
    this.props.getUsers();
  }

  get users() {
    return this.props.users.filter((user => this.state.cities.includes(user.city)))
  }

  user = (id) => this.users.filter((user) => user._id === id)[0];

  onClickHandle = (id) => {
    this.setState({id});
  };

  onDelete = (id) => {
    this.setState({modalOpen: true, delId: id});
  };

  onCheck = (id, data) => {
    this.setState((prevState) => {
      if (data.checked)
        return {checkedUsers: [...prevState.checkedUsers, this.user(id)]};
      else
        return {
          checkedUsers: prevState.checkedUsers.filter((user) => user._id !== id),
        };
    });
  };

  handleConfirm = () => {
    this.setState({modalOpen: false});
    this.props.delUser(this.state.delId);
  };

  handleCancel = () => this.setState({modalOpen: false});

  render() {
    const tectestResult = this.user(this.state.id)?.results.tectest[0];
    const quizResult = tectestResult?.quizResult;
    const points = tectestResult?.points;
    // const user = this.user(this.state.id);
    // const date = tectestResult?.date;
    const colOfAnswers = trueAnswers.length;
    //const colOfAnswers = trueAnswers;

    if (this.props.loading) return <GlobalLoader/>;
    return (
      <>
        <DelConfirm
          open={this.state.modalOpen}
          handleConfirm={this.handleConfirm}
          handleCancel={this.handleCancel}
        />
        <CitySelector changeCitiesHandler={(e, cities) => this.setState({cities})}
                      cityOptions={cityOptions}
                      defaultCity={defaultCity}
        />
        <TableAllUsersM
          users={this.users}
          onClick={this.onClickHandle}
          onDelete={this.onDelete}
          onCheck={this.onCheck}
          currentId={this.state.id}
        />
        <BtnResSaver
          users={this.users}
          columsOfAnswers={colOfAnswers}
          msg={'Сохранить все результаты'}
        />
        {!!this.state.checkedUsers.length && (
          <BtnResSaver
            users={this.state.checkedUsers}
            columsOfAnswers={colOfAnswers}
            msg={'Сохранить выбранные результаты'}
          />
        )}
        {this.state.id && tectestResult && (
          <>
            <TableResult quizResult={quizResult} points={points}/>
            <BtnResDel id={this.state.id}/>
          </>
        )}
      </>
    );
  }
}

TableResult.defaultProps = {
  users: [],
};

const mapStateToProps = (state) => {
  return {
    users: state.users.allUsers,
    loading: state.auth.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUsers: () => dispatch(getUsers()),
    delUser: (id) => dispatch(delUser(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TestsResults);
