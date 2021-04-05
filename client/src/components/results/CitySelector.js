import React from 'react';
import { Dropdown } from 'semantic-ui-react';

const CitySelector = ({ changeCitiesHandler, cityOptions, defaultCity }) => {
  return (
    <>
      <h4>Выберете города...</h4>
      <Dropdown
        placeholder='Выберете города для отображения'
        fluid
        multiple
        selection
        options={cityOptions}
        onChange={(event, data) =>
          changeCitiesHandler(event.target, data.value)
        }
        defaultValue={defaultCity}
      />
    </>
  );
};

export default CitySelector;
