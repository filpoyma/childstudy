import React from 'react';

import { Container, Icon, Image, Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import logo from '../../svg/logo.svg';
import { sessionChecker, signout } from '../../redux/auth/actions';

export const Header = () => {
  const isAuth = useSelector((state) => state.auth.isLoggedIn);
  const name = useSelector((state) => state.users.user?.name);
  const isAdmin = useSelector((state) => state.auth.isAdmin);
  const dispatch = useDispatch();
  return (
    <Menu>
      {/*<Menu fixed="top">*/}
      <Container>
        {
          !isAuth &&
          <Menu.Item header as={NavLink} name='home' to='/home'>
          <Image
            style={{ height: '20px' }}
            size='mini'
            src={logo}
            onClick={() => dispatch(sessionChecker())}
          />
        </Menu.Item>
        }
        {isAuth &&
          <Menu.Item header as={NavLink} name='home' to='/testselector'>
          <Image
            style={{ height: '20px' }}
            size='mini'
            src={logo}
            onClick={() => dispatch(sessionChecker())}
          />
        </Menu.Item>
        }
        {/*{isAuth && (*/}
        {/*  <Menu.Item header as={NavLink} name='testselector' to='/testselector'>*/}
        {/*    <Icon name='tasks' />*/}
        {/*  </Menu.Item>*/}
        {/*)}*/}
        <Menu.Menu position='right'>
          {!isAuth && (
            <Menu.Item
              header
              as={NavLink}
              name='signin'
              to='/signin'
              // onClick={(event, name) => this.handleClick(name.name, name.to)}
            >
              <Icon name='sign-in' />
              Вход
            </Menu.Item>
          )}
          {!isAuth && (
            <Menu.Item header as={NavLink} name='signup' to='/signup'>
              <Icon name='signup' />
              Регистрация
            </Menu.Item>
          )}

          {isAuth && (
            <Menu.Item
              header
              name='user'
              // active={this.props.isActive === 'home'}
            >
              <Icon name='user outline' />
              {name}
            </Menu.Item>
          )}
          {isAuth && isAdmin && (
            <Menu.Item header as={NavLink} name='admin' to='/admin'>
              <Icon name='user secret' />
            </Menu.Item>
          )}
          {isAuth && (
            <Menu.Item
              header
              as={NavLink}
              name='signout'
              to='/signout'
              onClick={() => dispatch(signout())}
              // active={this.props.isActive === 'home'}
            >
              <Icon name='sign-out' />
              Выход
            </Menu.Item>
          )}
        </Menu.Menu>
      </Container>
    </Menu>
  );
};
