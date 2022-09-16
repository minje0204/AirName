import React from 'react';
import styled from 'styled-components';
import ReactCardFlip from 'react-card-flip';
import TicketFront from './TicketFront';
import TicketBack from './TicketBack';

class RcmndCardItems extends React.Component {
  constructor() {
    super();
    this.state = {
      isFlipped: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState((prevState) => ({ isFlipped: !prevState.isFlipped }));
  }

  render() {
    // const { name } = this.props;
    return (
      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
        <FRONT_COMPONENT onClick={this.handleClick}>
          <TicketFront />
        </FRONT_COMPONENT>

        <BACK_COMPONENT onClick={this.handleClick}>
          <TicketBack />
        </BACK_COMPONENT>
      </ReactCardFlip>
    );
  }
}

export default RcmndCardItems;

const FRONT_COMPONENT = styled.div``;

const BACK_COMPONENT = styled.div``;
