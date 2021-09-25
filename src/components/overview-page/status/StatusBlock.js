import React, { Component } from 'react';

export default class StatusBlock extends Component {
  render() {
    let icon;
    const { text, number, measure, up } = this.props;
    if (up) {
      icon = (
        <svg viewBox="0 0 512.171 512.171">
          <g>
            <g>
              <path
                d="M476.723,216.64L263.305,3.115C261.299,1.109,258.59,0,255.753,0c-2.837,0-5.547,1.131-7.552,3.136L35.422,216.64
				c-3.051,3.051-3.947,7.637-2.304,11.627c1.664,3.989,5.547,6.571,9.856,6.571h117.333v266.667c0,5.888,4.779,10.667,10.667,10.667
				h170.667c5.888,0,10.667-4.779,10.667-10.667V234.837h116.885c4.309,0,8.192-2.603,9.856-6.592
				C480.713,224.256,479.774,219.691,476.723,216.64z"
              />
            </g>
          </g>
        </svg>
      );
    } else {
      icon = (
        <svg viewBox="0 0 512.171 512.171">
          <g>
            <g>
              <path
                d="M479.046,283.925c-1.664-3.989-5.547-6.592-9.856-6.592H352.305V10.667C352.305,4.779,347.526,0,341.638,0H170.971
				c-5.888,0-10.667,4.779-10.667,10.667v266.667H42.971c-4.309,0-8.192,2.603-9.856,6.571c-1.643,3.989-0.747,8.576,2.304,11.627
				l212.8,213.504c2.005,2.005,4.715,3.136,7.552,3.136s5.547-1.131,7.552-3.115l213.419-213.504
				C479.793,292.501,480.71,287.915,479.046,283.925z"
              />
            </g>
          </g>
        </svg>
      );
    }
    return (
      <div className="status__block">
        <div className="status__block__header">{text}</div>
        <div className="status__block__content">
          <div className="status__number">{number}</div>
          <div className="status__measures">
            <div className="status__measures__text">{measure}</div>
            <div className="status__measures__icon">{icon}</div>
          </div>
        </div>
      </div>
    );
  }
}
