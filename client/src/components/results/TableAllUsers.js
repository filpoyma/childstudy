import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox, Icon, Table } from 'semantic-ui-react';

const TableAllUsers = ({
  users,
  onClick,
  onDelete,
  onCheck,
  currentId,
}) => (
  <Table celled width={12} selectable>
    <Table.Header>
      <Table.Row textAlign='center'>
        <Table.HeaderCell>#</Table.HeaderCell>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Birth date</Table.HeaderCell>
        <Table.HeaderCell>TTL, mos</Table.HeaderCell>
        <Table.HeaderCell>City</Table.HeaderCell>
        <Table.HeaderCell>Email</Table.HeaderCell>
        <Table.HeaderCell>Test passed</Table.HeaderCell>
        <Table.HeaderCell>Date</Table.HeaderCell>
        <Table.HeaderCell>User Delete</Table.HeaderCell>
        <Table.HeaderCell>User Check</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {users.map((user, id) => (
        <Table.Row key={user.email} active={user._id === currentId}>
          <Table.Cell>{id+1}</Table.Cell>
          <Table.Cell style={{ cursor: 'pointer' }} onClick={() => onClick(user._id)}>
            {user.name}
          </Table.Cell>
          <Table.Cell>{user.date?.split("-").reverse().join(".")}</Table.Cell>
          <Table.Cell>{(user.date && ((Date.now() - new Date(user.date))/1000/3600/24/30.42).toFixed(1)) || '-'} </Table.Cell>
          <Table.Cell>{user.city}</Table.Cell>
          <Table.Cell>{user.email}</Table.Cell>
          <Table.Cell>{user.results.tectest.length ? 'yes' : 'no'}</Table.Cell>
          <Table.Cell>{user.results.tectest[0]?.date?.split("-").reverse().join(".")}</Table.Cell>
          <Table.Cell textAlign='center'>
            {user.role === 1 ? ( //admin
              <Icon name='eye' color='grey' />
            ) : (
              <Icon
                name='user delete'
                link
                color='red'
                onClick={() => onDelete(user._id)}
              />
            )}
          </Table.Cell>
          <Table.Cell textAlign='center'>
            <Checkbox disabled={user.role === 1} onChange={(e, data) => onCheck(user._id, data)} />
          </Table.Cell>
        </Table.Row>
      ))}
    </Table.Body>
  </Table>
);

TableAllUsers.propTypes = {
  users: PropTypes.array.isRequired,
};

TableAllUsers.defaultProps = {
  users: [],
};

export const TableAllUsersM = React.memo(TableAllUsers);
