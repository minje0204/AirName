import styled from 'styled-components';

export default function ReadOnlyInput({ q, a }) {
  return (
    <StyledWrapper>
      <div id="qAndA">
        <div className="question">{q}</div>
        <div className="answer">{a}</div>
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
  .answer {
    font-size: clamp(12px, 1.3vw, 16px);
    width: 200px;
  }
`;
