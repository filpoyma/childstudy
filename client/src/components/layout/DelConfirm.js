import React, { Component } from 'react';
import { Confirm } from 'semantic-ui-react';

export class DelConfirm extends Component {
  handleConfirm = () => {
    this.props.handleConfirm();
  };

  handleCancel = () => {
    this.props.handleCancel();
  };

  render() {
    return (
      <div>
        <Confirm
          dimmer='blurring'
          open={this.props.open}
          onCancel={this.handleCancel}
          onConfirm={this.handleConfirm}
          size='tiny'
          content='Пользователь будет удален. А ю шурэ?'
        />
      </div>
    );
  }
}
