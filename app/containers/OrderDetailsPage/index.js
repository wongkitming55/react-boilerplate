/*
 *
 * ProjectsPage
 *
 */

import React from 'react';

import styled from 'styled-components';





export class OrderDetailsPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
  }

  componentWillUpdate(nextProps) {
    if (!nextProps.isLogged) {
      nextProps.routeToHome();
    }
  }

  render() {
    const { orderslist } = this.props;

    return (
      <Layout currentPage={'projectList'}>
        {content}
      </Layout>
    );
  }
}

OrderDetailsPage.propTypes = {
  orderslist: PropTypes.array,
};



export default OrderDetailsPage;
