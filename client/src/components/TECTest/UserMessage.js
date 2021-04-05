import React from 'react';
import { Card } from 'semantic-ui-react';

export const UserMessage = ({ name, date }) => (
  <Card
    centered={true}
    image='./images/great.jpg'
    header='Поздравляем!'
    meta={`${name}, вы успешно прошли тест`}
    description={`Результаты сохранены.`}
    extra={date}
  />
);

// {/*<CSSTransitionGroup*/}
// {/*className="containerapp result"*/}
// {/*component="div"*/}
// {/*transitionName="fade"*/}
// {/*transitionEnterTimeout={800}*/}
// {/*transitionLeaveTimeout={500}*/}
// {/*transitionAppear*/}
// {/*transitionAppearTimeout={500}*/}
// {/*>*/}

// </CSSTransitionGroup>
