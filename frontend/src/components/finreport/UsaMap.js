import React, { useState, useEffect } from 'react';
import USAMap from 'react-usa-map';
import states from './state.json';
import styled from 'styled-components';
import { toast } from 'react-toastify';

const UsaMap = ({ abState, userName }) => {
  const [usa, setUsa] = useState([]);

  const mapHandler = (event) => {
    alert(event.target.dataset.name);
  };

  useEffect(() => {
    setUsa([...states.data]);
  }, []);

  const statesFilling = () => {
    const something = {};
    usa.forEach((state, i) => {
      const { abbreviation, name } = state.attributes;
      let fill = '#CCE5F1';
      let alertString = `Hello ${userName}! this is ${name}`;
      if (abbreviation === abState) {
        fill = '#0071e3';
        alertString = `Hello ${userName}! ${name} is your state`;
      }

      something[abbreviation] = {
        fill,
        clickHandler: () => toast(alertString, { position: 'top-center' })
      };
    });

    return { ...something };
  };

  return (
    <StyledWrapper>
      <USAMap
        id="usa-map"
        customize={statesFilling()}
        width="100%"
        height="100%"
        onClick={mapHandler}
      />
    </StyledWrapper>
  );
};

export default UsaMap;

const StyledWrapper = styled.div`
  display
  path {
    pointer-events: all;
  }
  path:hover {
    opacity: 0.5;
    cursor: pointer;
  }
  #usa-map{
    width=600px;
  }
}
`;
