import React from 'react';
import Accordion from './accordion.jsx';
import s from './rows.scss';

export default class Rows extends React.Component {

  render() {
    return (
      <div>
        <Accordion selected="1">
          <Accordion.Section title="Section 1" id="1">
            <p className={s.accordionText}>
              {this.props.textOne}
            </p>
          </Accordion.Section>
          <Accordion.Section title="Section 2" id="2">
            <p className={s.accordionText}>
              {this.props.textTwo}
            </p>
          </Accordion.Section>
          <Accordion.Section title="Section 3" id="3">
            <p className={s.accordionText}>
              {this.props.textThree}
            </p>
          </Accordion.Section>
        </Accordion>
      </div>
    );
  }
}
