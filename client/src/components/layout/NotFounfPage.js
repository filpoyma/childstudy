import React from 'react';
import { Link } from 'react-router-dom';

//import PageNotFound from '../../../images/404.png';

export class NotFoundPage extends React.Component {
  render() {
    return (
      <div>
        <img style={center} src={'./images/404.png'} alt='' />
        <p style={{ textAlign: 'center' }}>
          Opoos, page not found...
          <Link to='/'> Go to Home </Link>
        </p>
      </div>
    );
  }
}

const center = {
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
  width: '45%',
};
