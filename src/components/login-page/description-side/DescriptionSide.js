import React, { Component } from 'react';

import './DescriptionSide.css';

export default class DescriptionSide extends Component {
  render() {
    return (
      <div className="description-side">
        <div className="logo"></div>
        <div className="text">
          Control your home <br />
          Connect your life
        </div>
        <a href="https://www.google.com.ua/?hl=ru">
          <div className="video">
            <div className="video__img"></div>
            <div className="video__link">See how it works</div>
          </div>
        </a>
      </div>
    );
  }
}
