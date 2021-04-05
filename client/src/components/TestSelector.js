import React from 'react';
import { Grid, List } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

const TestSelector = () => (
  <Grid centered columns={2}>
    <Grid.Column width={12} style={{ paddingTop: '4rem' }}>
      <List divided relaxed mt={30}>
        <List.Item as={NavLink} to='/tectest'>
          <List.Icon name='edit' size='large' verticalAlign='middle' />
          <List.Content>
            <List.Header> «Тест на понимание эмоций» </List.Header>
            <List.Description>Пройти</List.Description>
          </List.Content>
        </List.Item>
        {/*<List.Item as={NavLink} to="/">*/}
        {/*<List.Icon name="venus" size="large" verticalAlign="middle" />*/}
        {/*<List.Content>*/}
        {/*<List.Header>Другой тест</List.Header>*/}
        {/*<List.Description>Пройти</List.Description>*/}
        {/*</List.Content>*/}
        {/*</List.Item>*/}
        {/*<List.Item as={NavLink} to="/">*/}
        {/*<List.Icon name="mars" size="large" verticalAlign="middle" />*/}
        {/*<List.Content>*/}
        {/*<List.Header>Еще другее</List.Header>*/}
        {/*<List.Description>Пройти</List.Description>*/}
        {/*</List.Content>*/}
        {/*</List.Item>*/}
        {/*<List.Item>*/}
        {/*<List.Icon name='github' size='large' verticalAlign='middle' />*/}
        {/*<List.Content>*/}
        {/*<List.Header as='a'>Semantic-Org/Semantic-UI-Meteor</List.Header>*/}
        {/*<List.Description as='a'>Updated 34 mins ago</List.Description>*/}
        {/*</List.Content>*/}
        {/*</List.Item>*/}
      </List>
    </Grid.Column>
  </Grid>
);

export default TestSelector;
