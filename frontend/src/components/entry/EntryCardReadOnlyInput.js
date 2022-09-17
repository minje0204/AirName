import { TextField } from '@mui/material';
import styled from 'styled-components';

export default function ReadOnlyInput({ q, a }) {
  return (
    <StyledWrapper>
      <div id="qAndA">
        <div className="question">{q}</div>
        <TextField
          variant="outlined"
          id="answer"
          color="warning"
          defaultValue={a}
          InputProps={{
            readOnly: true
          }}
        />
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  #qAndA {
    margin: 2px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  .question {
    width: 150px;
    margin: auto 0;
  }
  #answer {
    font-family: 'Daheng';
    width: 200px;
  }
`;
