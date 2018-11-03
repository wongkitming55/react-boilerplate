import React, { Component } from 'react';
import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 5rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 900px;
  overflow: auto;
`;

const Title = styled.div`
  color: ${COLOR_TITLE};
  font-size: 2.2rem;
  font-weight: bold;
  animation: ${fadeIn} ${duration}s;
`;

const Subtitle = styled.div`
  color: ${COLOR_SUBTITLE};
  font-size: 1.2rem;
  font-weight: 100;
  animation: ${fadeIn} ${duration * 1.5}s;
`;

const List = styled.div`
  margin-top: 2.67rem;
  width: 83.4rem;
  display: flex;
  align-content: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  overflow: auto;
`;

const AddNewButton = styled.button`
  background-color: transparent;
  border: 2px dashed #aedd00;
  border-radius: 0.7rem;
  color: #aedd00;
  width: 15.33rem;
  height: 20.67rem;
  margin: 0.67rem;
  cursor: pointer;
  font-size: 1.2em;
  font-family: 'FuturaBT';
`;

const ProjectWrapper = styled.div`
  margin: 0.67rem;
`;

export const SearchBar = styled.div`
  margin-top: 1.67rem;
  padding: 0.33rem;
  width: 83.4rem;
  height: 3.33rem;
`;

class OrderList extends Component {
  static propTypes = {
    orders: PropTypes.object.isRequired,
  };

  handleClick = () => {
    this.props.loadingProject();
    this.props.routeTo(`/project/${encode64(this.props.projectId)}`);
  };

  // renderOrders = (orders) => orders.map((order) => (
  //   <OrderWrapper>
  //     <ProjectListItem
  //       orderId={order.Id}
  //       projectName={this.textTruncate(displayProj.projectName, 22)}
  //       project={displayProj}
  //       modified={displayProj.modificationDate}
  //       loadingProject={this.loadingSpinner}
  //     />
  //   </OrderWrapper>
  // ));

  render() {
    return (
      <Wrapper>
        <Title>Please choose to order</Title>
        <List>
          <Listrapper>dfdsfdsfds</Listrapper>
        </List>
      </Wrapper>
    );
  }
}

export default OrderList;
