import React, { Component } from 'react';
import StatusBlock from './StatusBlock';

import './Status.css';

export default class Status extends Component {
  render() {
    return (
      <div className="status">
        <div className="status__header title">
          <div className="status__header__text">Status by units</div>
          <div className="status__header__options options">
            <svg viewBox="0 0 384 384">
              <g>
                <g>
                  <circle cx="192" cy="42.667" r="42.667" />
                </g>
              </g>
              <g>
                <g>
                  <circle cx="192" cy="192" r="42.667" />
                </g>
              </g>
              <g>
                <g>
                  <circle cx="192" cy="341.333" r="42.667" />
                </g>
              </g>
            </svg>
          </div>
        </div>
        <div className="status__blocks">
          <StatusBlock text="on livingroom" measure="W" number="745" up />
          <StatusBlock text="outside" measure="°F" number="20" up />
          <StatusBlock text="inside" measure="°F" number="15.3" />
          <StatusBlock text="water" measure="CF" number="493" up />
          <StatusBlock text="internet" measure="MBPS" number="45.3" up />
        </div>
      </div>
    );
  }
}
