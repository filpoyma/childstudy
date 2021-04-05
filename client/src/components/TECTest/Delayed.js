import React from 'react';
import PropTypes from 'prop-types';

class Delayed extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hidden: true };
  }

  componentDidMount() {
    this.timerId = setTimeout(() => {
      this.setState({ hidden: false });
    }, this.props.waitBeforeShow);
  }

  componentWillUnmount() {
    clearTimeout(this.timerId);
  }

  render() {
    return this.state.hidden ? '' : this.props.children;
  }
}

Delayed.propTypes = {
  waitBeforeShow: PropTypes.number.isRequired,
};

export default Delayed;
