import React from 'react';
import ReactExport from 'react-data-export';
import { Button } from 'semantic-ui-react';

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
//const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

export const ResultSaver = ({
  quizResult = [],
  points = 0,
  user = {},
  date = '-',
  numOfResult,
}) => {
  const dataSet = [
    {
      columns: [
        {
          title: 'ФИО',
          width: { wch: 30 },
          style: { alignment: { horizontal: 'center' }, font: { bold: true } },
        }, //pixels width
        {
          title: 'Город',
          width: { wch: 10 },
          style: { alignment: { horizontal: 'center' }, font: { bold: true } },
        }, //char width
        {
          title: 'Уч заведение',
          width: { wch: 45 },
          style: { alignment: { horizontal: 'center' }, font: { bold: true } },
        },
        {
          title: 'Баллы',
          width: { wch: 6 },
          style: { alignment: { horizontal: 'center' }, font: { bold: true } },
        },
        ...numOfResult,
      ],
      data: [
        [
          { value: user.name },
          { value: user.city || '-' },
          { value: user.studyplace || '-' },
          { value: points, style: { alignment: { horizontal: 'center' } } },
          ...quizResult.map((val) => ({
            value: val.answer,
            style: { alignment: { horizontal: 'center' }, font: { sz: '11' } },
          })),
        ],
      ],
    },
  ];
  return (
    <ExcelFile
      filename={`tec_${user.name}_${date}`}
      element={<Button color='green'>Сохранить результат</Button>}
    >
      <ExcelSheet dataSet={dataSet} name='TEC Results' />
    </ExcelFile>
  );
};

// const multiDataSet = [
//   {
//     columns: [
//       {title: "Headings", width: {wpx: 80}},//pixels width
//       {title: "Text Style", width: {wch: 40}},//char width
//       {title: "Colors", width: {wpx: 90}},
//     ],
//     data: [
//       [
//         {value: "H1", style: {font: {sz: "24"}, bold: true}}},
//         {value: "Bold", style: {font: {bold: true}}},
//         {value: "Red", style: {fill: {patternType: "solid", fgColor: {rgb: "FFFF0000"}}}},
//       ],

//       [
//         {value: "H2", style: {font: {sz: "18", bold: true}}},
//         {value: "underline", style: {font: {underline: true}}},
//         {value: "Blue", style: {fill: {patternType: "solid", fgColor: {rgb: "FF0000FF"}}}},
//       ],
//       [
//         {value: "H3", style: {font: {sz: "14", bold: true}}},
//         {value: "italic", style: {font: {italic: true}}},
//         {value: "Green", style: {fill: {patternType: "solid", fgColor: {rgb: "FF00FF00"}}}},
//       ],
//       [
//         {value: "H4", style: {font: {sz: "12", bold: true}}},
//         {value: "strike", style: {font: {strike: true}}},
//         {value: "Orange", style: {fill: {patternType: "solid", fgColor: {rgb: "FFF86B00"}}}},
//       ],
//       [
//         {value: "H5", style: {font: {sz: "10.5", bold: true}}},
//         {value: "outline", style: {font: {outline: true}}},
//         {value: "Yellow", style: {fill: {patternType: "solid", fgColor: {rgb: "FFFFFF00"}}}},
//       ],
//
//       [],
//       [
//         {value: ""},
//         {value: ""},
//         {value: `Points: ${6}` }
//       ],
//     ]
//   }
// ];
