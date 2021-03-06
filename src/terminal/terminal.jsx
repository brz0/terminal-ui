import React from 'react';
import cx from 'classnames';
import s from './terminal.scss';
import { Router, Route, Link } from 'react-router';
const materialIcons = "material-icons";

import Nav from '../nav/nav.jsx'

function terminal() {

  let iT = this.refs.terminal.value.toLowerCase();

  if (iT === 'welcome' || iT === 'home' || iT === '0') {
    this.context.router.push('/');
  }
  else if (iT === 'grids' || iT === 'grid' || iT === '1') {
    this.context.router.push('/grid');
  }
  else if (iT === 'component' || iT === 'components' || iT === '2') {
    this.context.router.push('/components');
  }
  else if (iT === 'download' || iT === 'downloads' || iT === '0') {
    this.context.router.push('/');
  }
  else {
     window.alert("Try a page name!");
  }
}

export default class Terminal extends React.Component {

  constructor(props, context) {
      super(props, context);
    this.state = {
      inputValue: ''
    }
  }
  static get contextTypes() {
    return {
      router: React.PropTypes.object.isRequired,
    };
  }
  updateInputValue(evt) {
    this.setState({
      inputValue: evt.target.value
    })
  }

  render() {
    return(
      <div className={s.terminalWrap}>
        <i className={cx(materialIcons, s.arrowIcon)}>keyboard_arrow_right</i>
        <form onSubmit={terminal.bind(this)} className={s.terminalForm}>
          <input className={s.terminalInput} ref='terminal'
            value={this.state.inputValue} onChange={this.updateInputValue.bind(this)}
            placeholder={"type " + this.props.page + " and press ↩ to see the next page"} />
        </form>
        <a href="#"><i className={cx(materialIcons, s.micIcon)}>mic</i></a>
      </div>
    )
  }
}
