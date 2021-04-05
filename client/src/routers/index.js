import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Redirect, Route, Switch} from 'react-router-dom';
import {Container} from 'semantic-ui-react';

import SignIn from '../components/submit/SignIn';
import SignUp from '../components/submit/SignUp';
import SignOut from '../components/submit/SignOut';
import {sessionChecker} from '../redux/auth/actions';
import TestSelector from '../components/TestSelector';
import TECTest from '../components/TECTest';
import TestsResults from '../components/results/TestsResults';
import GlobalLoader from '../components/layout/GlobalLoader';
import {NotFoundPage} from '../components/layout/NotFounfPage';
import {Intro} from "../components/TECTest/Intro";
import SignUpKinder from "../components/submit/SignUpKinder";
import SignUpSchools from "../components/submit/SignUpSchools";

const Routers = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(sessionChecker());
  }, [dispatch]);
  const loading = useSelector((state) => state.auth.mainLoading);

  return (
    <Container>
      {loading
        ? (<GlobalLoader/>)
        : (
          <Switch>
            <Redirect exact from='/' to='/home'/>
            <Route path='/home'> <Intro/></Route>
            <NotAuthRoute path='/signin'><SignIn/></NotAuthRoute>
            <NotAuthRoute path='/signup'><SignUp/></NotAuthRoute>

            <Route path='/signout' component = {SignOut}/>
            <Route path='/preschooler' component={SignUpKinder}/>
            <Route path='/pupils' component={SignUpSchools}/>

            <PrivateRoute path='/testselector'><TestSelector/></PrivateRoute>
            <PrivateRoute path='/tectest'><TECTest/></PrivateRoute>
            <AdminRoute path='/admin'><TestsResults/></AdminRoute>
            <Route component={NotFoundPage}/>
          </Switch>
        )}
    </Container>
  );
};

function PrivateRoute({children, ...rest}) {
  const isAuth = useSelector((state) => state.auth.isLoggedIn);
  return (
    <Route {...rest}
      render={({location}) =>
        isAuth
          ? (children)
          : (<Redirect to={{pathname: '/signin', state: {from: location}}}/>)
      }
    />
  );
}

function NotAuthRoute({children, ...rest}) {
  const isAuth = useSelector((state) => state.auth.isLoggedIn);
  return (
    <Route {...rest}
      render={({location}) =>
        !isAuth
          ? (children)
          : (<Redirect to={{pathname: '/testselector', state: {from: location}}}/>)
      }
    />
  );
}

function AdminRoute({children, ...rest}) {
  const isAuth = useSelector((state) => state.auth.isLoggedIn);
  const isAdmin = useSelector((state) => state.auth.isAdmin);
  return (
    <Route {...rest}
           render={({location}) =>
             (isAuth && isAdmin)
               ? (children)
               : (<Redirect to={{pathname: '/', state: {from: location}}}/>)
           }
    />
  );
}



export default Routers;
