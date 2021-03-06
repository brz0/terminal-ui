import React from 'react';
import cx from 'classnames';
import s from './toggle.scss';

export default class ToggleDisabled extends React.Component {
  render() {
    return(
      <div className={s.toggleWrap}>
        <input type="checkbox" className={cx(s.toggleInput, s.toggleInputDisabled)}
        id={this.props.id} name={this.props.name} />
        <label className={cx(s.toggleLabel, s.toggleLabelDisabled)}>Toggle</label>
      </div>
    )
  }
}
