import React from 'react';
import styled from 'styled-components';
import ReactCardFlip from 'react-card-flip';
import RcmndTicketFront from './RcmndTicketFront';
import RcmndTicketBack from './RcmndTicketBack';

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
    const { name, info, birth } = this.props;
    return (
      <EachTicketContainer>
        <ReactCardFlip
          isFlipped={this.state.isFlipped}
          flipDirection="vertical"
        >
          <FRONT_COMPONENT onClick={this.handleClick}>
            <RcmndTicketFront name={name} type={info.type} birth={birth} />
          </FRONT_COMPONENT>
          <BACK_COMPONENT onClick={this.handleClick}>
            <RcmndTicketBack name={name} type={info.type} sim={info.sim} rank={info.rank} percent={info.percent} />
          </BACK_COMPONENT>
        </ReactCardFlip>
      </EachTicketContainer>
    );
  }
}

export default RcmndCardItems;

const EachTicketContainer = styled.div``;

const BACK_COMPONENT = styled.div``;

const FRONT_COMPONENT = styled.div``;
