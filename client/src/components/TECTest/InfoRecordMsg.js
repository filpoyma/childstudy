import React, { Component } from 'react';
import { Button, Header, Modal } from 'semantic-ui-react';

export class InfoRecordMsg extends Component {
  state = { modalOpen: true };

  handleClose = () => this.setState({ modalOpen: false });

  render() {
    return (
      <Modal
        open={this.state.modalOpen}
        //onClose={this.handleClose}
        basic
        size='small'
        centered={false}
        dimmer='blurring'
      >
        <Header icon='browser' content='Информация' />
        <Modal.Content>
          <h2>Выбирай вариант ответа, затем нажимай на зелененькую кнопку со стрелкой.</h2>
          <br/>
          <h3>Этот сайт ведет запись звука.</h3>
          <h3>Этот сайт использует куки.</h3>
          {/*<h4>*/}
          {/*  {' '}*/}
          {/*  Для начала теста нажмите кнопку{' '}*/}
          {/*  <Icon size='big' color='yellow' name='play circle' /> на панеле*/}
          {/*  проигрывателя.*/}
          {/*</h4>*/}
        </Modal.Content>
        <Modal.Actions>
          <Button
            color='yellow'
            circular
            icon='checkmark'
            size='big'
            onClick={this.handleClose}
            inverted
          />
        </Modal.Actions>
      </Modal>
    );
  }
}
