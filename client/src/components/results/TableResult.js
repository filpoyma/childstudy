import React from 'react';
import { Table } from 'semantic-ui-react';

const TableResult = ({ quizResult = [], points = 0 }) => (
  <Table celled width={12} style={{ marginTop: '3rem' }}>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>id</Table.HeaderCell>
        <Table.HeaderCell>Question</Table.HeaderCell>
        <Table.HeaderCell>Answer</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {quizResult.map((result) => (
        <Table.Row key={result.id}>
          <Table.Cell>{result.id}</Table.Cell>
          <Table.Cell>{result.question}</Table.Cell>
          <Table.Cell>{result.answerNumber || result.answer }</Table.Cell>
        </Table.Row>
      ))}
    </Table.Body>
    <Table.Footer>
      <Table.Row>
        <Table.HeaderCell>Questions: {quizResult.length}</Table.HeaderCell>
        <Table.HeaderCell>Done: {quizResult.length}</Table.HeaderCell>
        <Table.HeaderCell>Num of points: {points} </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  </Table>
);

export default TableResult;
