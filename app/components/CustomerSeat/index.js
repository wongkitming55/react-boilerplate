import React from 'react';
import styled from 'styled-components';

const Seat = styled.div`
  width: 54px;
  height: 54px;
  padding: 10px 10px;
  border: 2px solid black;
  text-align: center;
  float: left;
  margin: 5px;
`;
const EmptySeat = styled.div`
  width: 54px;
  height: 54px;
  padding: 10px 10px;
  border: 0px solid black;
  text-align: center;
  float: left;
  margin: 5px;
`;
const SeatWrapper = styled.div`
  flex-wrap: wrap-reverse;
`;

const Medical = styled.div`
  width: 54px;
  height: 54px;
  padding: 10px 10px;
  border: 2px solid red;
  text-align: center;
  float: left;
  margin: 5px;
`;
const GeneralReq = styled.div`
  width: 54px;
  height: 54px;
  padding: 10px 10px;
  border: 2px solid #8e8573;
  text-align: center;
  float: left;
  margin: 5px;
`;

class CustomerSeat extends React.Component {
  render() {
    return (
      <SeatWrapper>
        <EmptySeat>54</EmptySeat>
        <Seat />
        <Seat />
        <Seat />
        <EmptySeat />
        <Seat />
        <Seat />
        <Seat />
        <Seat />
        <EmptySeat />
        <Seat />
        <Seat />
        <Seat />
        <EmptySeat>53</EmptySeat>
        <Seat />
        <Seat />
        <Seat />
        <EmptySeat />
        <GeneralReq />
        <Seat />
        <Seat />
        <Seat />
        <EmptySeat />
        <Seat />
        <Seat />
        <Seat />
        <EmptySeat>52</EmptySeat>
        <Seat />
        <Seat />
        <Seat />
        <EmptySeat />
        <Seat />
        <Seat />
        <Seat />
        <Seat />
        <EmptySeat />
        <Seat />
        <Seat />
        <Seat />
        <EmptySeat>51</EmptySeat>
        <Seat />
        <Seat />
        <Seat />
        <EmptySeat />
        <Seat />
        <Seat />
        <Seat />
        <Seat />
        <EmptySeat />
        <Seat />
        <Seat />
        <Seat />
        <EmptySeat>50</EmptySeat>
        <Seat />
        <Seat />
        <Seat />
        <EmptySeat />
        <Seat />
        <Seat />
        <Seat />
        <Seat />
        <EmptySeat />
        <Seat />
        <Seat />
        <Seat />
        <EmptySeat>49</EmptySeat>
        <Seat />
        <Seat />
        <Seat />
        <EmptySeat />
        <Seat />
        <Seat />
        <Seat />
        <Seat />
        <EmptySeat />
        <Seat />
        <Seat />
        <Seat />
        <EmptySeat>48</EmptySeat>
        <Seat />
        <Seat />
        <Seat />
        <EmptySeat />
        <Seat />
        <Seat />
        <Seat />
        <Seat />
        <EmptySeat />
        <Seat />
        <Seat />
        <Seat />
        <EmptySeat>47</EmptySeat>
        <Seat />
        <GeneralReq />
        <Seat />
        <EmptySeat />
        <Seat />
        <Seat />
        <Seat />
        <Seat />
        <EmptySeat />
        <Seat />
        <Seat />
        <Seat />
        <EmptySeat>46</EmptySeat>
        <Seat />
        <Seat />
        <Medical />
        <EmptySeat />
        <Seat />
        <Seat />
        <Seat />
        <Seat />
        <EmptySeat />
        <Seat />
        <Seat />
        <Seat />
        <EmptySeat />
        <EmptySeat>A</EmptySeat>
        <EmptySeat>B</EmptySeat>
        <EmptySeat>C</EmptySeat>
        <EmptySeat />
        <EmptySeat>D</EmptySeat>
        <EmptySeat>E</EmptySeat>
        <EmptySeat>F</EmptySeat>
        <EmptySeat>G</EmptySeat>
        <EmptySeat />
        <EmptySeat>H</EmptySeat>
        <EmptySeat>I</EmptySeat>
        <EmptySeat>J</EmptySeat>
      </SeatWrapper>
    );
  }
}

export default CustomerSeat;
