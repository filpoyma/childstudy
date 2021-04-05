import { ANSWER, NEXT } from './consts';

// question: {
//   content: '',
//     audio: '1_1_ТЕС_грустныий.m4a',
//     timeline = [1, 2, null, null, 3, 4];  //подсветка ответов 8 картинок первый
//     timeline: [null, null, 2, 2.5, null, null, 4.5, 5] //подсветка ответов 8 картинок второй
//     delay: 3 // задержка перед показом ответов
// },

const quizQuestions = [
  {
    question: {
      content: 't000/q.jpg',
      audio: '1_0_ТЕС_Вводная_инструкция.m4a',
    },
    answers: NEXT,
  },
  {
    question: {
      content: '',
      audio: '1_1_ТЕС_грустныий.m4a',
    },
    answers: [
      {
        type: ANSWER.happy,
        content: 't001/01.jpg',
      },
      {
        type: ANSWER.sad,
        content: 't001/02.jpg',
      },
      {
        type: ANSWER.angry,
        content: 't001/03.jpg',
      },
      {
        type: ANSWER.normal,
        content: 't001/04.jpg',
      },
    ],
  },
  {
    question: {
      content: '',
      audio: '2_ТЕС_радостный.m4a',
    },
    answers: [
      {
        type: ANSWER.happy,
        content: 't002/01.jpg',
      },
      {
        type: ANSWER.sad,
        content: 't002/02.jpg',
      },
      {
        type: ANSWER.normal,
        content: 't002/03.jpg',
      },
      {
        type: ANSWER.scared,
        content: 't002/04.jpg',
      },
    ],
  },
  {
    question: {
      content: '',
      audio: '3_ТЕС_злой̆.m4a',
    },
    answers: [
      {
        type: ANSWER.happy,
        content: 't003/01.jpg',
      },
      {
        type: ANSWER.normal,
        content: 't003/02.jpg',
      },
      {
        type: ANSWER.angry,
        content: 't003/03.jpg',
      },
      {
        type: ANSWER.scared,
        content: 't003/04.jpg',
      },
    ],
  },
  {
    question: {
      content: '',
      audio: '4_ТЕС_все_нормально.m4a',
    },
    answers: [
      {
        type: ANSWER.happy,
        content: 't004/01.jpg',
      },
      {
        type: ANSWER.sad,
        content: 't004/02.jpg',
      },
      {
        type: ANSWER.angry,
        content: 't004/03.jpg',
      },
      {
        type: ANSWER.normal,
        content: 't004/04.jpg',
      },
    ],
  },
  {
    question: {
      content: '',
      audio: '5_ТЕС_напуган.m4a',
    },
    answers: [
      {
        type: ANSWER.happy,
        content: 't005/01.jpg',
      },
      {
        type: ANSWER.normal,
        content: 't005/02.jpg',
      },
      {
        type: ANSWER.angry,
        content: 't005/03.jpg',
      },
      {
        type: ANSWER.scared,
        content: 't005/04.jpg',
      },
    ],
  },
  {
    question: {
      content: 'thumbs_up_big.png',
      audio: '5_1_ТЕС_Похвала.m4a',
    },
    answers: NEXT,
  },
  {
    question: {
      content: 't006/q.jpg',
      audio: '6_0_ТЕС_Переход_к_историям.m4a',
    },
    answers: NEXT,
  },
  {
    question: {
      content: 't006/q.jpg',
      audio: '6_1_ТЕС_умершая_черепашка.m4a',
      timeline: [6.4, 7.7, 8.9, 10.1],
    },
    answers: [
      {
        type: ANSWER.happy,
        content: 't006/01.jpg',
      },
      {
        type: ANSWER.sad,
        content: 't006/02.jpg',
      },
      {
        type: ANSWER.angry,
        content: 't006/03.jpg',
      },
      {
        type: ANSWER.normal,
        content: 't006/04.jpg',
      },
    ],
  },
  {
    question: {
      content: 't007/q.jpg',
      audio: '7_ТЕС_подарок_на_др.m4a',
      timeline: [5.3, 6.3, 7.5, 8.5],
    },
    answers: [
      {
        type: ANSWER.happy,
        content: 't007/01.jpg',
      },
      {
        type: ANSWER.sad,
        content: 't007/02.jpg',
      },
      {
        type: ANSWER.normal,
        content: 't007/03.jpg',
      },
      {
        type: ANSWER.scared,
        content: 't007/04.jpg',
      },
    ],
  },
  {
    question: {
      content: 't008/q.jpg',
      audio: '8_ТЕС_рисование открытки.m4a',
      timeline: [6.9, 8, 9.5, 10.9],
    },
    answers: [
      {
        type: ANSWER.happy,
        content: 't008/01.jpg',
      },
      {
        type: ANSWER.normal,
        content: 't008/02.jpg',
      },
      {
        type: ANSWER.angry,
        content: 't008/03.jpg',
      },
      {
        type: ANSWER.scared,
        content: 't008/04.jpg',
      },
    ],
  },
  {
    question: {
      content: 't009/q.jpg',
      audio: '9_ТЕС_автобусная остановка.m4a',
      timeline: [5.1, 6.4, 7.5, 8.5],
    },
    answers: [
      {
        type: ANSWER.happy,
        content: 't009/01.jpg',
      },
      {
        type: ANSWER.sad,
        content: 't009/02.jpg',
      },
      {
        type: ANSWER.angry,
        content: 't009/03.jpg',
      },
      {
        type: ANSWER.normal,
        content: 't009/04.jpg',
      },
    ],
  },
  {
    question: {
      content: 't010/q.jpg',
      audio: '10_ТЕС_монстр_aka_чудовище.m4a',
      timeline: [4.5, 5.5, 7.1, 8.5],
    },
    answers: [
      {
        type: ANSWER.happy,
        content: 't010/01.jpg',
      },
      {
        type: ANSWER.normal,
        content: 't010/02.jpg',
      },
      {
        type: ANSWER.angry,
        content: 't010/03.jpg',
      },
      {
        type: ANSWER.scared,
        content: 't010/04.jpg',
      },
    ],
  },
  //*************11 Кока****************
  {
    question: {
      content: 't011/q1.jpg',
      audio: '11_1_ТЕС_кока_кола_введение_в_курс_дела.m4a',
      timeline: [4.5, 6.5],
    },
    answers: [
      {
        type: ANSWER.blank,
        content: 't011/blankface1.jpg',
        disabled: true,
      },
      {
        type: ANSWER.blank,
        content: 't011/blankface2.jpg',
        disabled: true,
      },
      {
        type: ANSWER.forward,
        content: 'forward.jpg',
      },
    ],
  },
  {
    question: {
      content: 't011/q2.jpg',
      audio: '11_2_ТЕС_кока_кола_открытый_шкафчик.m4a',
    },
    answers: NEXT,
  },
  {
    question: {
      content: 't011/q2_1.jpg',
      audio: '11_3_ТЕС_кто_любит_кока_колу_Вика.m4a',
    },
    answers: [
      {
        type: ANSWER.blank,
        content: 'thumbs_up.png',
      },
      {
        type: ANSWER.blank,
        content: 'thumbs_down.png',
        disabled: true,
      },
    ],
  },
  {
    question: {
      content: 't011/q2_2.jpg',
      audio: '11_4_ТЕС_кто_любит_кока_колу_Таня.m4a',
    },
    answers: [
      {
        type: ANSWER.blank,
        content: 'thumbs_up.png',
        disabled: true,
      },
      {
        type: ANSWER.blank,
        content: 'thumbs_down.png',
      },
    ],
  },
  {
    question: {
      content: 't011/q1.jpg',
      audio: '11_5_ТЕС_кока_кола_Вика.m4a',
      timeline: [3.5, 5.1, null, null, 6.5, 7.9],
    },
    answers: [
      {
        type: ANSWER.happy,
        content: 't011/01_01.jpg',
      },
      {
        type: ANSWER.sad,
        content: 't011/01_02.jpg',
      },
      {
        type: ANSWER.happy,
        content: 't011/02_01.jpg',
        disabled: true,
      },
      {
        type: ANSWER.sad,
        content: 't011/02_02.jpg',
        disabled: true,
      },
      {
        type: ANSWER.normal,
        content: 't011/01_03.jpg',
      },
      {
        type: ANSWER.scared,
        content: 't011/01_04.jpg',
      },
      {
        type: ANSWER.normal,
        content: 't011/02_03.jpg',
        disabled: true,
      },
      {
        type: ANSWER.scared,
        content: 't011/02_04.jpg',
        disabled: true,
      },
    ],
  },
  {
    question: {
      content: 't011/q1.jpg',
      audio: '11_6_TEC_кока_кола_Таня.m4a',
      timeline: [null, null, 3, 4.2, null, null, 5.5, 6.8],
    },
    answers: [
      {
        type: ANSWER.happy,
        content: 't011/01_01.jpg',
        disabled: true,
      },
      {
        type: ANSWER.sad,
        content: 't011/01_02.jpg',
        disabled: true,
      },
      {
        type: ANSWER.happy,
        content: 't011/02_01.jpg',
      },
      {
        type: ANSWER.sad,
        content: 't011/02_02.jpg',
      },
      {
        type: ANSWER.normal,
        content: 't011/01_03.jpg',
        disabled: true,
      },
      {
        type: ANSWER.scared,
        content: 't011/01_04.jpg',
        disabled: true,
      },
      {
        type: ANSWER.normal,
        content: 't011/02_03.jpg',
      },
      {
        type: ANSWER.scared,
        content: 't011/02_04.jpg',
      },
    ],
  },
  //************12 Капуста***************
  {
    question: {
      content: 't012/q1.jpg',
      audio: '12_1_ТЕС_капуста_в_введение_в_суть_дела.m4a',
      timeline: [3.6, 5.8],
    },
    answers: [
      {
        type: ANSWER.blank,
        content: 't012/blankface1.jpg',
        disabled: true,
      },
      {
        type: ANSWER.blank,
        content: 't012/blankface2.jpg',
        disabled: true,
      },
      {
        type: ANSWER.forward,
        content: 'forward.jpg',
      },
    ],
  },
  {
    question: {
      content: 't012/q2.jpg',
      audio: '12_2_ТЕС_капуста_открываем_шкафчик.m4a',
    },
    answers: NEXT,
  },
  {
    question: {
      content: 't012/q2_1.jpg',
      audio: '12_3_ТЕС_кто_любит_капусту_Вика.m4a',
    },
    answers: [
      {
        type: ANSWER.blank,
        content: 'thumbs_up.png',
        disabled: true,
      },
      {
        type: ANSWER.blank,
        content: 'thumbs_down.png',
      },
    ],
  },
  {
    question: {
      content: 't012/q2_2.jpg',
      audio: '12_4_ТЕС_кто_любит_капусту_Таня.m4a',
    },
    answers: [
      {
        type: ANSWER.blank,
        content: 'thumbs_up.png',
      },
      {
        type: ANSWER.blank,
        content: 'thumbs_down.png',
        disabled: true,
      },
    ],
  },
  {
    question: {
      content: 't012/q1.jpg',
      audio: '12_5_ТЕС_капуста_Вика.m4a',
      timeline: [2.7, 3.7, null, null, 4.8, 6.3],
    },
    answers: [
      {
        type: ANSWER.happy,
        content: 't012/01_01.jpg',
      },
      {
        type: ANSWER.sad,
        content: 't012/01_02.jpg',
      },
      {
        type: ANSWER.happy,
        content: 't012/02_01.jpg',
        disabled: true,
      },
      {
        type: ANSWER.sad,
        content: 't012/02_02.jpg',
        disabled: true,
      },
      {
        type: ANSWER.normal,
        content: 't012/01_03.jpg',
      },
      {
        type: ANSWER.scared,
        content: 't012/01_04.jpg',
      },
      {
        type: ANSWER.normal,
        content: 't012/02_03.jpg',
        disabled: true,
      },
      {
        type: ANSWER.scared,
        content: 't012/02_04.jpg',
        disabled: true,
      },
    ],
  },
  {
    question: {
      content: 't012/q1.jpg',
      audio: '12_6_ТЕС_капуста_Таня.m4a',
      timeline: [null, null, 2.9, 4.1, null, null, 5.3, 6.4],
    },
    answers: [
      {
        type: ANSWER.happy,
        content: 't012/01_01.jpg',
        disabled: true,
      },
      {
        type: ANSWER.sad,
        content: 't012/01_02.jpg',
        disabled: true,
      },
      {
        type: ANSWER.happy,
        content: 't012/02_01.jpg',
      },
      {
        type: ANSWER.sad,
        content: 't012/02_02.jpg',
      },
      {
        type: ANSWER.normal,
        content: 't012/01_03.jpg',
        disabled: true,
      },
      {
        type: ANSWER.scared,
        content: 't012/01_04.jpg',
        disabled: true,
      },
      {
        type: ANSWER.normal,
        content: 't012/02_03.jpg',
      },
      {
        type: ANSWER.scared,
        content: 't012/02_04.jpg',
      },
    ],
  },
  //**********13 Кролик***********
  {
    question: {
      content: 't013/q1.jpg',
      audio: '13_1_ТЕС кролик_всё спокойно.m4a',
    },
    answers: NEXT,
  },
  {
    question: {
      content: 't013/q2.jpg',
      audio: '13_2_ТЕС_кролик_волк_за_кустами.m4a',
    },
    answers: NEXT,
  },
  {
    question: {
      content: 't013/q1.jpg',
      audio: '13_3_ТЕС_кролик_контрольный_вопрос.m4a',
    },
    answers: [
      {
        type: ANSWER.blank,
        content: 'yes.png',
        disabled: true,
      },
      {
        type: ANSWER.blank,
        content: 'no.png',
      },
    ],
  },
  {
    question: {
      content: 't013/q1.jpg',
      audio: '13_3_1_Кролик_не_знает_про_волка.m4a',
    },
    answers: NEXT,
  },
  {
    question: {
      content: 't013/q1.jpg',
      audio: '13_4_ТЕС_кролик_итоговый_вопрос.m4a',
      timeline: [1.6, 2.5, 3.9, 4.8],
    },
    answers: [
      {
        type: ANSWER.happy,
        content: 't013/01.jpg',
      },
      {
        type: ANSWER.normal,
        content: 't013/02.jpg',
      },
      {
        type: ANSWER.angry,
        content: 't013/03.jpg',
      },
      {
        type: ANSWER.scared,
        content: 't013/04.jpg',
      },
    ],
  },
  //**********14 История хозяйки кроли фото***********
  {
    question: {
      content: 't014/q1.jpg',
      audio: '14_1_ТЕС_введение_в_историю_хозяйки_кролика.m4a',
    },
    answers: NEXT,
  },
  {
    question: {
      content: 't014/q2.jpg',
      audio: '14_2_ТЕС_Катя убивается_по_кролю.m4a',
    },
    answers: NEXT,
  },
  {
    question: {
      content: 't014/q3.jpg',
      audio: '14_3_ТЕС_Катя_смотрит_на_фото_подруги.m4a',
      timeline: [12, 13.5, 15.1, 16.8],
    },
    answers: [
      {
        type: ANSWER.happy,
        content: 't014/01.jpg',
      },
      {
        type: ANSWER.sad,
        content: 't014/02.jpg',
      },
      {
        type: ANSWER.normal,
        content: 't014/03.jpg',
      },
      {
        type: ANSWER.scared,
        content: 't014/04.jpg',
      },
    ],
  },
  {
    question: {
      content: 't014/q3.jpg',
      audio:
        '14_4_ТЕС_Катя_на_самом_деле_рада_это_говорится_тем,_кто_сказал.m4a',
    },
    answers: NEXT,
  },
  {
    question: {
      content: 't014/q4.jpg',
      audio: '14_5_ТЕС_Катя_смотрит_на_фото_кроля.m4a',
      timeline: [6.9, 8.1, 9.4, 10.8],
    },
    answers: [
      {
        type: ANSWER.happy,
        content: 't014/01.jpg',
      },
      {
        type: ANSWER.sad,
        content: 't014/02.jpg',
      },
      {
        type: ANSWER.normal,
        content: 't014/03.jpg',
      },
      {
        type: ANSWER.scared,
        content: 't014/04.jpg',
      },
    ],
  },

  //**********15 Регуляция эмоций ***********
  {
    question: {
      content: 't015/q.jpg',
      audio: '15_1_ТЕС_регуляция_эмоций_введение_в_курс_дела.m4a',
      timeline: [11.9, 17.4, 21.5, 26.8],
    },
    answers: [
      {
        type: ANSWER.handface,
        content: 't015/01.jpg',
      },
      {
        type: ANSWER.distracted,
        content: 't015/02.jpg',
      },
      {
        type: ANSWER.thinking,
        content: 't015/03.jpg',
      },
      {
        type: ANSWER.sad,
        content: 't015/04.jpg',
      },
    ],
  },
  //**********16 шарики***********
  {
    question: {
      content: 't016/q.jpg',
      audio: '16_ТЕС_магнитные_шарики.m4a',
      timeline: [17.4, 18.5, 20, 21.2],
    },
    answers: [
      {
        type: ANSWER.happy,
        content: 't016/01.jpg',
      },
      {
        type: ANSWER.normal,
        content: 't016/02.jpg',
      },
      {
        type: ANSWER.angry,
        content: 't016/03.jpg',
      },
      {
        type: ANSWER.scared,
        content: 't016/04.jpg',
      },
    ],
  },
  //**********17 Велосипед***********
  {
    question: {
      content: 't017/q.jpg',
      audio: '17_ТЕС_Катя_и_велосипед_задание.m4a',
      timeline: [17.1, 19, 21.8, 25.4],
    },
    answers: [
      {
        type: ANSWER.happy,
        content: 't017/01.jpg',
      },
      {
        type: ANSWER.sadscared,
        content: 't017/02.jpg',
      },
      {
        type: ANSWER.happyscared,
        content: 't017/03.jpg',
      },
      {
        type: ANSWER.scared,
        content: 't017/04.jpg',
      },
    ],
  },
  //**********18 Печенье***********
  {
    question: {
      content: 't018/q.jpg',
      audio: '18_1_ТЕС_Шоколадное_печенье_Юля_на_распутье.m4a',
    },
    answers: [
      {
        type: ANSWER.blank,
        content: 'thumbs_up.png',
      },
      {
        type: ANSWER.blank,
        content: 'thumbs_down.png',
      },
    ],
  },
  {
    question: {
      content: 't018/q.jpg',
      audio: '18_2_ТЕС_комментарий_о_морали_для_тех_кто_не_знал.m4a',
    },
    answers: NEXT,
  },
  {
    question: {
      content: 't018/q.jpg',
      audio: '18_3_ТЕС_печенье_пока_не_съедено.m4a',
      timeline: [13.7, 16.4, 19.5, 22.9],
    },
    answers: [
      {
        type: ANSWER.happy,
        content: 't018/01.jpg',
      },
      {
        type: ANSWER.sad,
        content: 't018/02.jpg',
      },
      {
        type: ANSWER.angry,
        content: 't018/03.jpg',
      },
      {
        type: ANSWER.normal,
        content: 't018/04.jpg',
      },
    ],
  },
  {
    question: {
      content: 't018/q1.jpg',
      audio: '18_4_ТЕС_печенье_съедено.m4a',
    },
    answers: NEXT,
  },
  {
    question: {
      content: 't018/q2.jpg',
      audio: '18_5_ТЕС_съела_печенье_не_сказала_маме.m4a',
      timeline: [15.5, 16.7, 18.1, 19.3],
    },
    answers: [
      {
        type: ANSWER.happy,
        content: 't018/01.jpg',
      },
      {
        type: ANSWER.sad,
        content: 't018/02.jpg',
      },
      {
        type: ANSWER.angry,
        content: 't018/03.jpg',
      },
      {
        type: ANSWER.normal,
        content: 't018/04.jpg',
      },
    ],
  },
];

export default quizQuestions;
