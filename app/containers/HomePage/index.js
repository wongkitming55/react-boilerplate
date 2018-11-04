/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import styled from 'styled-components';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { requestService } from './actions';
import reducer from './reducer';
import saga from './saga';
import MainScreen from '../../components/MainScreen';
import DrinkService from '../../components/DrinkService';
import ChatBox from '../../components/ChatBot';
import Notification from '../../components/Notification';
import WelcomeScreen from '../../components/WelcomeScreen';
import { apiCall } from '../../api';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

/* eslint-disable react/prefer-stateless-function */
export class HomePage extends React.PureComponent {
  /**
   * when initial state username is not null, submit the form to load repos
   */
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      selectedService: null,
      selectedDrink: null,
      showNoti: false,
    };
  }

  componentDidMount() {
    if (this.state.loading) {
      setTimeout(() => {
        this.setState({
          loading: false,
        });
      }, 1000);
    }
  }

  requestService = service => {
    let s;
    if (service.indexOf(' ') > 0) {
      s = service.split(' ');
      s = service[0].concat(service[1]);
    }
    let serviceNo;
    let url;
    switch (s) {
      case 'MedicalHelp': {
        serviceNo = 1;
        break;
      }
      case 'HouseWine': {
        serviceNo = 2;
        break;
      }
      case 'HotWater': {
        serviceNo = 3;
        break;
      }
      default:
        break;
    }
    if (serviceNo === 1) {
      url =
        'https://m8blugyzih.execute-api.us-east-1.amazonaws.com/HackStage/ResponseQuestion';
    } else if (serviceNo === 2) {
      url = `https://m8blugyzih.execute-api.us-east-1.amazonaws.com/HackStage/ask2`;
    } else {
      url = `https://m8blugyzih.execute-api.us-east-1.amazonaws.com/HackStage/ask4`;
    }
    const request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.setRequestHeader('Accept', '*/*');
    request.setRequestHeader('Content-Type', 'text/x-gwt-rpc; charset=UTF-8');
    // request.setRequestHeader('Access-Control-Allow-Origin', '*');
    request.setRequestHeader('Access-Control-Allow-Headers', '*');
    // request.withCredentials = true;
    request.send();
  };

  selectService = serviceName => {
    this.setState({
      selectedService: serviceName,
      showNoti: serviceName === 'Medical Help',
    });
    if (serviceName !== 'Drinks' && serviceName !== 'Blanket') {
      this.requestService(serviceName);
    }
  };

  selectDrink = drink => {
    this.setState({
      selectedDrink: drink,
      showNoti: true,
    });
    this.requestService(drink);
  };

  render() {
    if (this.state.loading) {
      return (
        <Wrapper>
          <WelcomeScreen />
        </Wrapper>
      );
    }
    const { selectedService } = this.state;
    if (selectedService === 'Drinks' && !this.state.selectedDrink) {
      return (
        <Wrapper>
          <DrinkService selectDrink={this.selectDrink} />
        </Wrapper>
      );
    }
    return (
      <Wrapper>
        <MainScreen selectService={this.selectService} />
        {selectedService === 'Blanket' ? (
          <ChatBox requestService={this.selectDrink} />
        ) : null}
        <Notification active={this.state.showNoti} />
      </Wrapper>
    );
  }
}

HomePage.propTypes = {
  requestService: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    requestService: service => dispatch(requestService(service)),
  };
}

const mapStateToProps = createStructuredSelector({});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
