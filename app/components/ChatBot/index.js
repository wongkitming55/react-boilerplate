import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ChatFeed, Message } from 'react-chat-ui';
import { duration, fadeInUp } from '../../animations';
import { HomePage } from '../../containers/HomePage';

const Wrapper = styled.div`
  position: absolute;
  animation: ${fadeInUp} ${duration}s;
  bottom: 0;
  right: 0;
  width: 430px;
`;

const Header = styled.div`
  text-align: center;
  background: #006465;
  color: white;
  border-radius: 0.667rem 0.667rem 0px 0px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding-bottom: 5px;
  width: 365px;
`;

const ReplyButton = styled.div`
  border-radius: 0.666rem;
  width: 90px;
  background-color: #006564;
  color: white;
  text-align: center;
  &: hover {
    cursor: pointer;
  }
`;

const newMessage = [
  new Message({
    id: 3,
    message: 'Yes, please!',
    senderName: 'You',
  }),
  new Message({
    id: 4,
    message: 'We have received your request.',
    senderName: 'Cathay Pacific',
  }),
  new Message({
    id: 5,
    message: 'Please wait and we will get back to you as soon as possible.',
  }),
];

class ChatBox extends Component {
  state = {
    yesNo: true,
    messages: [
      new Message({
        id: 1,
        message: 'Sorry, we have distributed all blankets already.',
        senderName: 'Cathay Pacific',
      }),
      new Message({
        id: 2,
        message: 'Would you like to have a cup of hot water instead?',
      }),
    ],
  };

  handleKeyPress = (e, input) => {
    if (e.key === 'Enter') {
      this.submitMessage(input);
    }
  };

  submitMessage = input => {
    const messages = [...this.state.messages, newMessage[input]];

    this.setState({
      messages,
    });
  };

  handleOk = async () => {
    await this.handleKeyPress({ key: 'Enter' }, 0);
    await this.handleKeyPress({ key: 'Enter' }, 1);
    await this.handleKeyPress({ key: 'Enter' }, 2);
    this.setState({
      yesNo: false,
    });
  };

  renderYesNo = () => (
    <ButtonWrapper>
      <ReplyButton
        onClick={() => {
          this.handleOk();
          this.props.requestService('HotWater');
        }}
      >
        Yes
      </ReplyButton>
      <ReplyButton>No</ReplyButton>
    </ButtonWrapper>
  );

  render() {
    return (
      <Wrapper>
        <Header>ChatBox</Header>
        <div style={styles.messagesContainer}>
          <ChatFeed
            messages={this.state.messages}
            hasInputField={false}
            bubbleStyles={styles.bubbleStyles}
            showSenderName
          />
          {this.state.yesNo ? this.renderYesNo() : null}
        </div>
      </Wrapper>
    );
  }
}

ChatBox.propTypes = {
  requestService: PropTypes.func,
};

const styles = {
  bubbleStyles: {
    text: {
      fontSize: 16,
      color: '#fcf6ea',
    },
    chatbubble: {
      borderRadius: 30,
      margin: '5px',
      backgroundColor: '#006465',
    },
  },
  header: {
    backgroundColor: 'rgb(0, 132, 255)',
    padding: 20,
    borderTop: '12px solid rgb(204, 204, 204)',
  },
  messagesContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#ebedec',
    overflow: 'scroll',
    height: '400px',
  },
};

export default ChatBox;
