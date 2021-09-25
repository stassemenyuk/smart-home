import React, { Component } from 'react';
import FooterCard from './FooterCard';

import './Footer.css';

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeCards: [true, false, true, false, true, true],
    };
    this.turnOn = this.turnOn.bind(this);
  }

  turnOn(id) {
    let newArr = this.state.activeCards;
    newArr[id] = !newArr[id];
    this.setState({ activeCards: newArr });
  }

  render() {
    const { activeCards } = this.state;
    return (
      <footer className="footer">
        <div className="footer-cards">
          <div className="footer-card__add-new">
            <button className="add_new">
              <svg viewBox="0 0 512 512">
                <path
                  d="m256 0c-141.164062 0-256 114.835938-256 256s114.835938 256 256 256 256-114.835938 256-256-114.835938-256-256-256zm0 0"
                  fill="#2196f3"
                />
                <path
                  d="m368 277.332031h-90.667969v90.667969c0 11.777344-9.554687 21.332031-21.332031 21.332031s-21.332031-9.554687-21.332031-21.332031v-90.667969h-90.667969c-11.777344 0-21.332031-9.554687-21.332031-21.332031s9.554687-21.332031 21.332031-21.332031h90.667969v-90.667969c0-11.777344 9.554687-21.332031 21.332031-21.332031s21.332031 9.554687 21.332031 21.332031v90.667969h90.667969c11.777344 0 21.332031 9.554687 21.332031 21.332031s-9.554687 21.332031-21.332031 21.332031zm0 0"
                  fill="#fafafa"
                />
              </svg>
            </button>
          </div>
          <FooterCard
            turnOn={this.turnOn}
            id={0}
            active={activeCards[0]}
            title="Outlets"
            date="June 28, 2017"
            icon={
              <svg viewBox="0 0 64 64">
                <path d="m14.998 64h34.004c2.757 0 5-2.243 5-5v-1h1.998c.553 0 1-.447 1-1v-30.002c0-.553-.447-1-1-1h-1.998v-1.001c0-2.757-2.243-5-5-5h-4.004v-4.99c0-1.655-1.347-3.002-3.002-3.002h-1.996v-9.005c0-1.654-1.346-3-3-3s-3 1.346-3 3v9.005h-4v-9.005c0-1.654-1.346-3-3-3s-3 1.346-3 3v9.005h-1.994c-1.655 0-3.002 1.347-3.002 3.002v4.99h-4.006c-2.757 0-5 2.243-5 5v1.001h-1.998c-.553 0-1 .447-1 1v30.002c0 .553.447 1 1 1h1.998v1c0 2.757 2.243 5 5 5zm40.002-36.002v28.002h-.998v-28.002zm-19-24.998c0-.552.448-1 1-1s1 .448 1 1v9.005h-2zm-10 0c0-.552.448-1 1-1s1 .448 1 1v9.005h-2zm-4.996 12.007c0-.553.449-1.002 1.002-1.002h19.99c.553 0 1.002.449 1.002 1.002v4.99h-21.994zm-9.006 9.99c0-1.654 1.346-3 3-3h34.004c1.654 0 3 1.346 3 3v34.003c0 1.654-1.346 3-3 3h-34.004c-1.654 0-3-1.346-3-3zm-2.998 31.003v-28.002h.998v28.002z" />
                <path d="m32 57.998c8.822 0 16-7.178 16-16s-7.178-16-16-16-16 7.178-16 16 7.178 16 16 16zm0-30c7.72 0 14 6.28 14 14s-6.28 14-14 14-14-6.28-14-14 6.28-14 14-14z" />
                <path
                  className="blue"
                  d="m32 54.998c7.168 0 13-5.832 13-13s-5.832-13-13-13-13 5.832-13 13 5.832 13 13 13zm0-24c6.065 0 11 4.935 11 11s-4.935 11-11 11-11-4.935-11-11 4.935-11 11-11z"
                />
                <path d="m27 44.999c1.654 0 3-1.346 3-3s-1.346-3-3-3-3 1.346-3 3 1.346 3 3 3zm0-4c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z" />
                <path d="m37 44.999c1.654 0 3-1.346 3-3s-1.346-3-3-3-3 1.346-3 3 1.346 3 3 3zm0-4c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z" />
              </svg>
            }
          />
          <FooterCard
            turnOn={this.turnOn}
            id={1}
            active={activeCards[1]}
            title="Camera"
            date="June 28, 2017"
            icon={
              <svg x="0px" y="0px" viewBox="0 0 420.8 420.8">
                <g>
                  <g>
                    <g>
                      <path
                        d="M406.8,96.4c-8.4-8.8-20-14-33.2-14h-66.4v-0.8c0-10-4-19.6-10.8-26c-6.8-6.8-16-10.8-26-10.8h-120
				c-10.4,0-19.6,4-26.4,10.8c-6.8,6.8-10.8,16-10.8,26v0.8h-66c-13.2,0-24.8,5.2-33.2,14c-8.4,8.4-14,20.4-14,33.2v199.2
				C0,342,5.2,353.6,14,362c8.4,8.4,20.4,14,33.2,14h326.4c13.2,0,24.8-5.2,33.2-14c8.4-8.4,14-20.4,14-33.2V129.6
				C420.8,116.4,415.6,104.8,406.8,96.4z M400,328.8h-0.4c0,7.2-2.8,13.6-7.6,18.4s-11.2,7.6-18.4,7.6H47.2
				c-7.2,0-13.6-2.8-18.4-7.6c-4.8-4.8-7.6-11.2-7.6-18.4V129.6c0-7.2,2.8-13.6,7.6-18.4s11.2-7.6,18.4-7.6h77.2
				c6,0,10.8-4.8,10.8-10.8V81.2c0-4.4,1.6-8.4,4.4-11.2s6.8-4.4,11.2-4.4h119.6c4.4,0,8.4,1.6,11.2,4.4c2.8,2.8,4.4,6.8,4.4,11.2
				v11.6c0,6,4.8,10.8,10.8,10.8H374c7.2,0,13.6,2.8,18.4,7.6s7.6,11.2,7.6,18.4V328.8z"
                      />
                      <path
                        className="blue"
                        d="M210.4,130.8c-27.2,0-52,11.2-69.6,28.8c-18,18-28.8,42.4-28.8,69.6s11.2,52,28.8,69.6c18,18,42.4,28.8,69.6,28.8
				s52-11.2,69.6-28.8c18-18,28.8-42.4,28.8-69.6s-11.2-52-28.8-69.6C262.4,142,237.6,130.8,210.4,130.8z M264.8,284
				c-14,13.6-33.2,22.4-54.4,22.4S170,297.6,156,284c-14-14-22.4-33.2-22.4-54.4c0-21.2,8.8-40.4,22.4-54.4
				c14-14,33.2-22.4,54.4-22.4s40.4,8.8,54.4,22.4c14,14,22.4,33.2,22.4,54.4C287.6,250.8,278.8,270,264.8,284z"
                      />
                      <circle cx="352.8" cy="150" r="19.6" className="blue" />
                    </g>
                  </g>
                </g>
              </svg>
            }
          />
          <FooterCard
            turnOn={this.turnOn}
            id={2}
            active={activeCards[2]}
            title="Lights"
            date="June 28, 2017"
            icon={
              <svg x="0px" y="0px" viewBox="0 0 432.4 432.4">
                <g>
                  <g>
                    <g>
                      <path
                        d="M216.529,93.2c-61.2,0-111.2,50-111.2,111.2c0,32,14,62.8,37.6,83.6c17.6,17.6,16,55.2,15.6,55.6
				c0,2,0.4,3.6,2,5.2c1.2,1.2,3.2,2,4.8,2h102c2,0,3.6-0.8,4.8-2c1.2-1.2,2-3.2,2-5.2c0-0.4-2-38,15.6-55.6
				c0.4-0.4,0.8-0.8,1.2-1.2c23.2-21.2,36.8-51.2,36.8-82.4C327.729,143.2,277.729,93.2,216.529,93.2z M280.529,277.6
				c-0.4,0.4-1.2,1.2-1.2,1.6c-15.6,16.8-18.4,44.4-18.8,57.6h-88.4c-0.4-13.2-3.2-42-20-59.2c-21.2-18.4-33.6-45.2-33.6-73.6
				c0-54,43.6-97.6,97.6-97.6s97.6,43.6,97.6,97.6C313.729,232.4,301.729,259.2,280.529,277.6z"
                      />
                      <path
                        d="M216.129,121.6c-3.6,0-6.8,3.2-6.8,6.8c0,3.6,3.2,6.8,6.8,6.8c40.4,0,72.8,32.8,72.8,72.8
				c0,3.6,3.2,6.8,6.8,6.8c3.6,0,6.8-3.2,6.8-6.8C302.929,160.4,264.129,121.6,216.129,121.6z"
                      />
                      <path
                        d="M260.529,358.4h-88.8c-9.2,0-16.8,7.6-16.8,16.8s7.6,16.8,16.8,16.8h88.4
				c9.6-0.4,17.2-7.6,17.2-16.8C277.329,366,269.729,358.4,260.529,358.4z M260.529,378h-88.8c-1.6,0-3.2-1.2-3.2-3.2
				s1.2-3.2,3.2-3.2h88.4c1.6,0,3.2,1.2,3.2,3.2S262.129,378,260.529,378z"
                      />
                      <path
                        d="M247.329,398.8h-62.4c-9.2,0-16.8,7.6-16.8,16.8s7.6,16.8,16.8,16.8h62.4
				c9.2,0,16.8-7.6,16.8-16.8C264.129,406,256.529,398.8,247.329,398.8z M247.329,418.4h-62.4c-1.6,0-3.2-1.2-3.2-3.2
				s1.2-3.2,3.2-3.2h62.4c1.6,0,3.2,1.2,3.2,3.2S248.929,418.4,247.329,418.4z"
                      />
                      <path
                        className="blue"
                        d="M216.129,60c4,0,6.8-3.2,6.8-6.8V6.8c0-3.6-3.2-6.8-6.8-6.8c-3.6,0-6.8,3.2-6.8,6.8v46.4
				C209.329,56.8,212.529,60,216.129,60z"
                      />
                      <path
                        className="blue"
                        d="M329.329,34.4c-3.2-2.4-7.2-1.2-9.2,1.6l-25.6,38.4c-2.4,3.2-1.6,7.6,1.6,9.6
				c1.2,0.8,2.4,1.2,3.6,1.2c2.4,0,4.4-1.2,5.6-3.2l25.6-38.4C333.329,40.8,332.529,36.4,329.329,34.4z"
                      />
                      <path
                        className="blue"
                        d="M134.929,83.6c1.2,0,2.4-0.4,3.6-1.2c3.2-2,4-6.4,2-9.6l-24.8-38.8c-2-3.2-6.4-4-9.6-2
				s-4,6.4-2,9.6l24.8,38.8C130.529,82.8,132.529,83.6,134.929,83.6z"
                      />
                      <path
                        className="blue"
                        d="M86.529,126l-40.4-22c-3.2-1.6-7.6-0.4-9.2,2.8c-2,3.2-0.8,7.6,2.8,9.2l40.4,22
				c1.2,0.4,2,0.8,3.2,0.8c2.4,0,4.8-1.2,6-3.6C90.929,132,89.729,127.6,86.529,126z"
                      />
                      <path
                        className="blue"
                        d="M395.729,106.8c-1.6-3.2-6-4.4-9.2-2.8l-40.8,22c-3.2,1.6-4.4,6-2.8,9.2c1.2,2.4,3.6,3.6,6,3.6
				c1.2,0,2.4-0.4,3.2-0.8l40.8-22C396.129,114.4,397.329,110,395.729,106.8z"
                      />
                    </g>
                  </g>
                </g>
              </svg>
            }
          />
          <FooterCard
            turnOn={this.turnOn}
            id={3}
            active={activeCards[3]}
            title="Wifi"
            date="June 28, 2017"
            icon={
              <svg x="0px" y="0px" viewBox="0 0 502.181 502.181">
                <g>
                  <g>
                    <path
                      className="blue"
                      d="M499.846,162.304C362.8,24.895,140.311,24.601,2.903,161.647c-0.219,0.219-0.438,0.438-0.657,0.657
			c-3.069,3.178-2.981,8.243,0.197,11.312c3.1,2.994,8.015,2.994,11.115,0c130.816-131.148,343.179-131.417,474.327-0.601
			c0.201,0.2,0.401,0.401,0.601,0.601c3.124,3.137,8.199,3.148,11.336,0.024C502.959,170.516,502.969,165.441,499.846,162.304z"
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <path
                      d="M454.622,207.528c-53.86-54.201-127.165-84.601-203.576-84.424c-76.411-0.177-149.716,30.223-203.576,84.424
			c-3.069,3.178-2.981,8.243,0.197,11.312c3.1,2.994,8.015,2.994,11.115,0c105.998-106.184,278.006-106.335,384.191-0.337
			c0.113,0.112,0.225,0.225,0.337,0.337c3.178,3.07,8.242,2.982,11.312-0.196C457.616,215.543,457.616,210.628,454.622,207.528z"
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <path
                      className="blue"
                      d="M409.35,252.808c-41.858-42.191-98.873-65.855-158.304-65.704c-59.431-0.151-116.446,23.513-158.304,65.704
			c-3.122,3.128-3.116,8.195,0.012,11.316c3.128,3.121,8.195,3.116,11.316-0.012c80.929-81.173,212.339-81.37,293.511-0.441
			c0.147,0.147,0.294,0.294,0.441,0.441c3.122,3.128,8.188,3.133,11.316,0.012C412.466,261.002,412.471,255.936,409.35,252.808z"
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <path
                      d="M364.142,298.008c-29.921-30.113-70.646-47.003-113.096-46.904c-42.45-0.099-83.175,16.791-113.096,46.904
			c-3.07,3.178-2.982,8.242,0.196,11.312c3.1,2.994,8.015,2.994,11.116,0c56.107-56.214,147.161-56.3,203.375-0.193
			c0.064,0.064,0.129,0.128,0.193,0.193c3.178,3.07,8.242,2.982,11.312-0.196C367.136,306.024,367.136,301.108,364.142,298.008z"
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <path
                      className="blue"
                      d="M319.12,343.385c-0.064-0.066-0.129-0.13-0.195-0.194c-17.987-18.023-42.417-28.132-67.88-28.088
			c-25.463-0.044-49.893,10.065-67.88,28.088c-3.186,3.061-3.287,8.125-0.226,11.311c3.061,3.186,8.125,3.287,11.311,0.226
			c0.066-0.063,0.131-0.128,0.195-0.194c31.266-31.244,81.934-31.244,113.2,0c3.079,3.169,8.144,3.241,11.313,0.162
			S322.199,346.554,319.12,343.385z"
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <path
                      d="M273.685,388.511c-0.008-0.008-0.015-0.015-0.023-0.023c-12.648-12.103-32.584-12.103-45.232,0
			c-12.503,12.49-12.513,32.752-0.023,45.255c12.49,12.503,32.752,12.513,45.255,0.023
			C286.165,421.275,286.175,401.014,273.685,388.511z M251.046,427.104c-8.837,0-16-7.163-16-16s7.163-16,16-16
			c8.837,0,16,7.163,16,16S259.882,427.104,251.046,427.104z"
                    />
                  </g>
                </g>
              </svg>
            }
          />
          <FooterCard
            turnOn={this.turnOn}
            id={4}
            active={activeCards[4]}
            title="Thermostats"
            date="June 28, 2017"
            icon={
              <svg viewBox="0 0 512 512">
                <g>
                  <path d="m201.887 350.368v-270.267c0-8.284-6.716-15-15-15s-15 6.716-15 15v270.267c-20.718 6.414-35.811 25.752-35.811 48.549 0 28.017 22.793 50.811 50.811 50.811s50.811-22.793 50.811-50.811c0-22.798-15.093-42.135-35.811-48.549zm-15 69.36c-11.475 0-20.811-9.335-20.811-20.811s9.335-20.811 20.811-20.811 20.811 9.336 20.811 20.811-9.336 20.811-20.811 20.811z" />
                  <path d="m263.356 315.611v-238.996c0-42.165-34.304-76.469-76.469-76.469s-76.469 34.304-76.469 76.469v9.866h-34.741c-8.284 0-15 6.716-15 15s6.716 15 15 15h34.742v30.877h-34.742c-8.284 0-15 6.716-15 15s6.716 15 15 15h34.742v30.07h-34.742c-8.284 0-15 6.716-15 15s6.716 15 15 15h34.742v30.867h-34.742c-8.284 0-15 6.716-15 15s6.716 15 15 15h34.742v17.316c-23.357 21.412-36.614 51.376-36.614 83.305 0 30.503 11.962 59.098 33.682 80.519 21.332 21.037 49.467 32.565 79.384 32.564.539 0 1.081-.004 1.621-.011 29.607-.412 57.491-12.289 78.515-33.445 21.022-21.153 32.728-49.11 32.96-78.72.254-32.285-13.003-62.579-36.611-84.212zm-75.282 166.381c-22.457.305-43.568-8.182-59.523-23.917-15.958-15.738-24.747-36.748-24.747-59.158 0-25.27 11.307-48.868 31.022-64.745 3.536-2.847 5.592-7.143 5.592-11.683v-245.874c0-25.623 20.846-46.469 46.469-46.469s46.469 20.846 46.469 46.469v245.874c0 4.54 2.056 8.835 5.592 11.683 19.915 16.038 31.221 39.881 31.02 65.416-.353 44.815-37.09 81.781-81.894 82.404z" />
                  <path
                    className="blue"
                    d="m324.284 54.557c-8.284 0-15 6.716-15 15s6.716 15 15 15c23.425 0 42.482 19.057 42.482 42.482 0 8.284 6.716 15 15 15s15-6.716 15-15c0-39.967-32.515-72.482-72.482-72.482z"
                  />
                  <path
                    className="blue"
                    d="m324.284 0c-8.284 0-15 6.716-15 15s6.716 15 15 15c53.507 0 97.039 43.532 97.039 97.039 0 8.284 6.716 15 15 15s15-6.716 15-15c0-70.05-56.989-127.039-127.039-127.039z"
                  />
                  <circle className="blue" cx="324.284" cy="127.039" r="15" />
                </g>
              </svg>
            }
          />
          <FooterCard
            turnOn={this.turnOn}
            id={5}
            active={activeCards[5]}
            title="Device"
            date="June 28, 2017"
            icon={
              <svg x="0px" y="0px" viewBox="0 0 469.333 469.333">
                <g>
                  <g>
                    <g>
                      <path
                        d="M206.885,43.544c-3.875-1.698-8.448-0.896-11.542,2.042L85.49,149.336H10.667C4.771,149.336,0,154.107,0,160.002v149.333
				c0,5.896,4.771,10.667,10.667,10.667H85.49l109.854,103.75c2.021,1.917,4.656,2.917,7.323,2.917c1.427,0,2.865-0.281,4.219-0.875
				c3.917-1.677,6.448-5.531,6.448-9.792V53.336C213.333,49.075,210.802,45.221,206.885,43.544z M192,391.252l-94.948-89.667
				c-1.979-1.875-4.604-2.917-7.323-2.917H21.333v-128h68.396c2.719,0,5.344-1.042,7.323-2.917L192,78.086V391.252z"
                      />
                      <path
                        className="blue"
                        d="M372.063,44.7c-4.813-3.469-11.469-2.385-14.896,2.375c-3.458,4.771-2.396,11.438,2.375,14.896
				C414.938,102.096,448,166.659,448,234.669c0,68.01-33.063,132.573-88.458,172.698c-4.771,3.458-5.833,10.125-2.375,14.896
				c2.083,2.875,5.344,4.406,8.646,4.406c2.167,0,4.354-0.656,6.25-2.031c60.906-44.125,97.271-115.146,97.271-189.969
				C469.333,159.846,432.969,88.825,372.063,44.7z"
                      />
                      <path
                        className="blue"
                        d="M314.01,108.304c-4.948-3.125-11.563-1.635-14.708,3.354c-3.135,4.979-1.635,11.563,3.354,14.708
				c37.573,23.646,60.01,64.135,60.01,108.302c0,44.167-22.438,84.656-60.01,108.302c-4.99,3.146-6.49,9.729-3.354,14.708
				c2.031,3.229,5.5,4.99,9.042,4.99c1.938,0,3.906-0.531,5.667-1.635C357.833,333.45,384,286.221,384,234.669
				C384,183.117,357.833,135.888,314.01,108.304z"
                      />
                      <path
                        className="blue"
                        d="M272.75,183.45c-4.729-3.531-11.406-2.531-14.927,2.177c-3.521,4.729-2.542,11.417,2.177,14.927
				c11.021,8.208,17.333,20.635,17.333,34.115c0,13.479-6.313,25.906-17.333,34.115c-4.719,3.51-5.698,10.198-2.177,14.927
				c2.094,2.813,5.302,4.292,8.563,4.292c2.208,0,4.448-0.688,6.365-2.115c16.469-12.26,25.917-30.937,25.917-51.219
				S289.219,195.711,272.75,183.45z"
                      />
                    </g>
                  </g>
                </g>
              </svg>
            }
          />
        </div>
      </footer>
    );
  }
}
