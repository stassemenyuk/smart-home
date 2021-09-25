import React, { Component } from 'react';

export default class FooterCard extends Component {
  render() {
    const { title, date, icon, active, turnOn, id } = this.props;
    let classNames = 'footer-card',
      activeMessage,
      input = <input onChange={() => turnOn(id)} type="checkbox" />;
    if (active) {
      classNames += ' active__card';
      input = <input onChange={() => turnOn(id)} type="checkbox" checked />;
      activeMessage = 'Active since';
    } else {
      activeMessage = 'Inactive since';
    }
    return (
      <div className={classNames}>
        <div className="footer-card__content">
          <div className="footer-card__content__icon">{icon}</div>
          <div className="footer-card__content__text">
            <div className="footer-card__content__text__title">{title}</div>
            <div className="footer-card__content__text__under">{activeMessage}</div>
            <div className="footer-card__content__text__date">{date}</div>
          </div>
          <div className="footer-card__content__switcher">
            <label className="switch">
              {input}
              <span className="slider round"></span>
            </label>
          </div>
        </div>
      </div>
    );
  }
}
