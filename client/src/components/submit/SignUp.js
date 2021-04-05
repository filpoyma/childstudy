import React from 'react';
import { Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const SignUp = () => (
  <div style={styles.containerImg}>
    <div>
      <Link to='/preschooler'>
        <Image src='./images/kinder.jpg' size='medium' circular />
        <span>
          <h3>
            Регистрация для <br />дошкольников
          </h3>
        </span>
      </Link>
    </div>
    <div>
      <Link to='/pupils'>
        <Image src='./images/schools.jpg' size='medium' circular/>
        <span>
          <h3>
            Регистрация для <br />школьников
          </h3>
        </span>
      </Link>
    </div>
  </div>
);

const styles = {
  containerImg: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    textAlign: 'center',
    maxWidth: '700px',
    margin: '0 auto',
    padding: '30px 5px',
    background: '#fff',
    borderRadius: '3px',
    border: '1 solid black',
  },
};
export default SignUp;
