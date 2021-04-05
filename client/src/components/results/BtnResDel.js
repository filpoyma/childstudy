import React from 'react';
import { Button } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import { deleteResultT } from '../../redux/tecTest/actions';

export const BtnResDel = ({ id }) => {
  const dispatch = useDispatch();
  return (
    <Button color='red' onClick={() => dispatch(deleteResultT(id))}>
      Удалить результат
    </Button>
  );
};
