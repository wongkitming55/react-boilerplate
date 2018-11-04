import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody,
} from 'react-accessible-accordion';
import header from './header.css';
import normalHeader from './normalHeader.css';

const MedicUnderWrapper = {
  background: 'red',
  height: '50px',
  paddingTop: '15px',
  paddingLeft: '20px',
};
const NormalWrapper = {
  background: '#4C4C4C',
  height: '50px',
  paddingTop: '15px',
  paddingLeft: '20px',
};

class ExpandPanel extends React.PureComponent {
  render() {
    return (
      <Accordion>
        <AccordionItem className="header">
          <AccordionItemTitle className="header">
            <div style={MedicUnderWrapper}>Medical </div>
          </AccordionItemTitle>
          <AccordionItemBody>
            <p>46C</p>
          </AccordionItemBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemTitle className="header">
            <div style={NormalWrapper}>Blanket</div>
          </AccordionItemTitle>
        </AccordionItem>
        <AccordionItem classNmae="normalHeader">
          <AccordionItemTitle className="normalHeader">
            <div style={NormalWrapper}>Drinks </div>
          </AccordionItemTitle>
          <AccordionItemBody>
            <p>
              46C&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cold
              Water
            </p>
          </AccordionItemBody>
          <AccordionItemBody>
            <p>
              47B&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Orange
              Juice
            </p>
          </AccordionItemBody>
          <AccordionItemBody>
            <p>
              53D&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;House
              Wine
            </p>
          </AccordionItemBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemTitle className="header">
            <div style={NormalWrapper}>Food</div>
          </AccordionItemTitle>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemTitle className="header">
            <div style={NormalWrapper}>Forms</div>
          </AccordionItemTitle>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemTitle className="header">
            <div style={NormalWrapper}>Shopping Enquiry</div>
          </AccordionItemTitle>
        </AccordionItem>
      </Accordion>
    );
  }
}

export default ExpandPanel;
