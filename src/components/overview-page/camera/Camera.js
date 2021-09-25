import React, { Component } from 'react';

import './Camera.css';

export default class Camera extends Component {
  render() {
    return (
      <div className="camera">
        <div className="camera__header title">
          <div className="camera__header__text">Camera</div>
          <div className="camera__header__options options">
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
          <div className="switcher">
            <button className="switcher__btn switcher__btn__active">C1</button>
            <button className="switcher__btn">C2</button>
            <button className="switcher__btn">C3</button>
            <button className="switcher__btn">C4</button>
            <button className="switcher__btn">C5</button>
          </div>
        </div>
        <div className="camera__content content">
          <div className="camera__content__video">
            <div className="cameras_time">
              <div className="date">12/05/2018</div>
              <div className="time">09:43AM</div>
            </div>
            <div className="recording">
              <div className="recording__icon">
                <svg viewBox="0 0 426.667 426.667">
                  <g>
                    <g>
                      <g>
                        <path
                          fill="#1F8EFA"
                          d="M213.333,106.667c-58.88,0-106.667,47.787-106.667,106.667S154.453,320,213.333,320S320,272.213,320,213.333
					S272.213,106.667,213.333,106.667z"
                        />
                        <path
                          fill="#fff"
                          d="M213.333,0C95.467,0,0,95.467,0,213.333s95.467,213.333,213.333,213.333S426.667,331.2,426.667,213.333
					S331.2,0,213.333,0z M213.333,384c-94.293,0-170.667-76.373-170.667-170.667S119.04,42.667,213.333,42.667
					S384,119.04,384,213.333S307.627,384,213.333,384z"
                        />
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
              <div className="recording__text">Recording</div>
            </div>
            <div className="camera__video"></div>
          </div>
        </div>
      </div>
    );
  }
}
