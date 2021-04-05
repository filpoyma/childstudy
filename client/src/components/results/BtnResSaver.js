import React from 'react';
import ReactExport from 'react-data-export';
import { Button } from 'semantic-ui-react';

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;

export const BtnResSaver = ({ users = [], columsOfAnswers, msg }) => {
  const numOfResult = [...new Array(columsOfAnswers)].map((val, i) => {
    return {
      title: (i + 1).toString(),
      width: { wch: 11 },
      style: {
        alignment: { horizontal: 'center' },
        font: { sz: '11', bold: true },
      },
    };
  });

  const noAdminUsers = users.filter((user) => user.role === 0);
  const dataSet = [
    {
      columns: [
        {
          title: 'ФИО',
          width: { wch: 30 },
          style: { alignment: { horizontal: 'center' }, font: { bold: true } },
        },
        {
          title: 'Дата рож-я',
          width: { wch: 12 },
          style: { alignment: { horizontal: 'center' }, font: { bold: true } },
        },
        {
          title: ' Месяцев',
          width: { wch: 8 },
          style: { alignment: { horizontal: 'center' }, font: { bold: true } },
        },
        {
          title: 'Город',
          width: { wch: 10 },
          style: { alignment: { horizontal: 'center' }, font: { bold: true } },
        },
        {
          title: 'Уч заведение',
          width: { wch: 45 },
          style: { alignment: { horizontal: 'center' }, font: { bold: true } },
        },
        {
          title: 'Класс',
          width: { wch: 6 },
          style: { alignment: { horizontal: 'center' }, font: { bold: true } },
        },
        {
          title: 'Баллы',
          width: { wch: 6 },
          style: { alignment: { horizontal: 'center' }, font: { bold: true } },
        },
        {
          title: 'Дата тест-я',
          width: { wch: 12 },
          style: { alignment: { horizontal: 'center' }, font: { bold: true } },
        },
        ...numOfResult,
      ],
      data: [...noAdminUsers.map((user) => {
        return [
          { value: user.name },
          { value: user.date?.split("-").reverse().join(".") || '-'},
          { value: (user.date && ((Date.now() - new Date(user.date))/1000/3600/24/30.42).toFixed(1)) || '-'},
          { value: user.city || '-' },
          { value: user.studyplace || '-' },
          { value: user.schoolClass || '-' },
          {
            value: user.results.tectest[0]?.points || '-',
            style: { alignment: { horizontal: 'center' } },
          },
          {value: user.results.tectest[0]?.date.split("-").reverse().join(".") || '-'},
          ...(user.results.tectest[0]?.quizResult.map((quizResult) => ({
            value: quizResult.answerNumber || quizResult.answer,
            style: { alignment: { horizontal: 'center' } },
          })) || '-'),
        ];
      })],
    },
  ];
  return (

    <ExcelFile
      filename={`tec_results`}
      element={<Button style={{marginBottom: '30px'}} color='green'>{msg}</Button>}
    >
      <ExcelSheet dataSet={dataSet} name='TEC Results' />
    </ExcelFile>

  );
};
