/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import styled from 'styled-components';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { loadRepos } from '../App/actions';
import { changeUsername } from './actions';
import reducer from './reducer';
import saga from './saga';
import MainScreen from '../../components/MainScreen';
import DrinkService from '../../components/DrinkService';

const Wrapper = styled.div`
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
      selectedService: 'drinks',
      selectedDrink: null,
    };
  }

  // componentDidMount() {
  //   if (this.state.loading) {
  //     setTimeout(() => {
  //       this.setState({
  //         loading: false,
  //       });
  //     }, 10000);
  //   }
  // }

  selectService = serviceName => {
    this.setState({
      selectedService: serviceName,
    });
  };

  selectDrink = drink => {
    this.setState({
      selectedDrink: drink,
    });
  };

  // renderDrinkService = () => (
  // );

  render() {
    // if (this.state.loading) {
    //   return (
    //     <Wrapper>
    //       <WelcomeScreen />
    //     </Wrapper>
    //   );
    // }
    const { selectedService } = this.state;
    if (selectedService === 'drinks') {
      return (
        <Wrapper>
          <DrinkService selectDrink={this.selectDrink} />
        </Wrapper>
      );
    }

    return (
      <Wrapper>
        <MainScreen selectService={this.selectService} />
      </Wrapper>
    );
  }
}

HomePage.propTypes = {};

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadRepos());
    },
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
