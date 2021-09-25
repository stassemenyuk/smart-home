import React, { Component } from 'react';

import './Consumption.css';

export default class Consumption extends Component {
  render() {
    return (
      <>
        <div className="consumption">
          <div className="consumption__by-room">
            <div className="consumption__by-room__header title">
              <div className="consumption__by-room__header__text">Consumption by room</div>
              <div className="consumption__by-room__header__options options">
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
            <div className="consumption__by-room__content">
              <div className="consumption__by-room__content__circle">
                <svg width="75%" height="75%" viewBox="0 0 42 42">
                  <circle cx="21" cy="21" r="16" fill="transparent"></circle>
                  <circle
                    cx="21"
                    cy="21"
                    r="16"
                    fill="transparent"
                    stroke="#1F8EFA"
                    strokeWidth="4"></circle>
                  <circle
                    cx="21"
                    cy="21"
                    r="16"
                    fill="transparent"
                    stroke="#FFAB4F"
                    strokeWidth="4"
                    strokeDasharray="22 78"
                    strokeDashoffset="25"></circle>
                  <circle
                    cx="21"
                    cy="21"
                    r="16"
                    fill="transparent"
                    stroke="#05C985"
                    strokeWidth="4"
                    strokeDasharray="16 84"
                    strokeDashoffset="41"></circle>
                  <circle
                    cx="21"
                    cy="21"
                    r="16"
                    fill="transparent"
                    stroke="red"
                    strokeWidth="4"
                    strokeDasharray="11 89"
                    strokeDashoffset="3"></circle>
                  <circle
                    cx="21"
                    cy="21"
                    r="16"
                    fill="transparent"
                    stroke="#843FA0"
                    strokeWidth="4"
                    strokeDasharray="12 88"
                    strokeDashoffset="-8"></circle>
                  <text x="30%" y="55%" className="donut__main">
                    304.5
                  </text>
                  <text x="40%" y="65%" className="donut__under">
                    watts
                  </text>
                </svg>
              </div>
              <div className="consumption__by-room__content__room-list">
                <ul className="room-list">
                  <li>Living Room</li>
                  <li>Studio</li>
                  <li>Luca's Bedroom</li>
                  <li>Garage</li>
                  <li>Kitchen</li>
                </ul>
              </div>
              <div className="consumption__by-room__content__percentage-list">
                <ul className="percentage-list">
                  <li>16 %</li>
                  <li>22%</li>
                  <li>11 %</li>
                  <li>39%</li>
                  <li>12%</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="consumption__by-day">
            <div className="consumption__by-day__header title">
              <div className="consumption__by-day__header__text">Consumption by day</div>
              <div className="consumption__by-day__header__options options">
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
            <div className="consumption__by-day__content">
              <div className="consumption__by-day__content__graph">
                <svg width="100%" className="bars">
                  <circle cx="7.5%" cy="110" r="6" fill="#3E4E6C"></circle>
                  <circle cx="19.5%" cy="110" r="6" fill="#1F8EFA"></circle>
                  <circle cx="31.5%" cy="110" r="6" fill="#1F8EFA"></circle>
                  <circle cx="43.5%" cy="110" r="6" fill="#3E4E6C"></circle>
                  <circle cx="55.5%" cy="110" r="6" fill="#1F8EFA"></circle>
                  <circle cx="67.5%" cy="110" r="6" fill="#1F8EFA"></circle>
                  <circle cx="79.5%" cy="110" r="6" fill="#1F8EFA"></circle>
                  <rect x="5%" y="70" width="10" height="30" rx="5" ry="5" fill="#3E4E6C" />
                  <rect x="17%" y="40" width="10" height="60" rx="5" ry="5" fill="#1F8EFA" />
                  <rect x="29%" y="20" width="10" height="80" rx="5" ry="5" fill="#1F8EFA" />
                  <rect x="41%" y="48" width="10" height="52" rx="5" ry="5" fill="#3E4E6C" />
                  <rect x="53%" y="45" width="10" height="55" rx="5" ry="5" fill="#1F8EFA" />
                  <rect x="65%" y="60" width="10" height="40" rx="5" ry="5" fill="#1F8EFA" />
                  <rect x="77%" y="80" width="10" height="20" rx="5" ry="5" fill="#1F8EFA" />
                  <g className="days">
                    <text x="2%" y="130">
                      Mon
                    </text>
                    <text x="15%" y="130">
                      Tue
                    </text>
                    <text x="27%" y="130">
                      Wed
                    </text>
                    <text x="39%" y="130">
                      Thu
                    </text>
                    <text x="51%" y="130">
                      fri
                    </text>
                    <text x="63%" y="130">
                      sat
                    </text>
                    <text x="75%" y="130">
                      sun
                    </text>
                  </g>
                </svg>
              </div>
              <div className="consumption__by-day__footer">
                <div className="consumption__by-day__content__button">
                  <button className="see-more__btn">See more info</button>
                </div>
              </div>
            </div>
          </div>
          <div className="consumption__device-limit">
            <div className="consumption__device-limit__header title">
              <div className="consumption__device-limit__header__text">Device limit</div>
              <div className="consumption__device-limit__header__options options">
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
            <div className="consumption__device-limit__content">
              <div className="consumption__device-limit__content__circle">
                <svg width="50%" height="50%" viewBox="0 0 42 42">
                  <circle
                    cx="21"
                    cy="21"
                    r="16"
                    fill="transparent"
                    stroke="#1F8EFA"
                    strokeWidth="4"></circle>
                  <circle
                    cx="21"
                    cy="21"
                    r="16"
                    fill="transparent"
                    stroke="#3E4E6C"
                    strokeWidth="4"
                    strokeDasharray="40 60"
                    strokeDashoffset="10"></circle>
                  <circle
                    cx="35"
                    cy="30"
                    r="4"
                    fill="#1F8EFA"
                    stroke="#242E42"
                    strokeWidth="2"></circle>
                  <text x="30%" y="65%" className="device-limit__big">
                    10
                  </text>
                  <text x="81%" y="74%" className="device-limit__small">
                    5
                  </text>
                </svg>
              </div>
              <div className="consumption__device-limit__footer">
                <div className="consumption__device-limit__content__button">
                  <button className="see-more__btn">See more info</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
