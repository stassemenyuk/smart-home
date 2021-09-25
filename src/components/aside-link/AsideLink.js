import React, { Component } from 'react';

export default class AsideLink extends Component {
  render() {
    const { svg, title, active, changeActivePage, id } = this.props;
    let classNames = 'aside__link';
    if (active) {
      classNames += ' aside__link__active';
    }
    return (
      <div className={classNames} onClick={() => changeActivePage(id)}>
        <div className="aside__link__icon">{svg}</div>
        <div className="aside__link__text">{title}</div>
      </div>
    );
  }
}
