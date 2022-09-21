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
    const { name, type } = this.props;
    return (
      <EachTicketContainer>
        <ReactCardFlip
          isFlipped={this.state.isFlipped}
          flipDirection="vertical"
        >
          <FRONT_COMPONENT onClick={this.handleClick}>
            <TicketFront name={name} />
          </FRONT_COMPONENT>
          <BACK_COMPONENT onClick={this.handleClick}>
            <TicketBack name={name} type={type} />
          </BACK_COMPONENT>
        </ReactCardFlip>
      </EachTicketContainer>
    );
  }
}

export default RcmndCardItems;

const EachTicketContainer = styled.div`
`;

const BACK_COMPONENT = styled.div``;

const FRONT_COMPONENT = styled.div``;
