import React from 'react';

export default function DeviceBlock(props) {
  return (
    <tr>
      <td className="device-icon">{props.device}</td>
      <td>{props.name}</td>
      <td>{props.location}</td>
      <td>
        <label className="switch">
          <input onChange={() => props.turnOn(props.id)} type="checkbox" checked={props.status} />
          <span className="slider round"></span>
        </label>
      </td>
      <td>{props.battery}</td>
      <td>{props.date}</td>
      <td>
        <div className="options">
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
      </td>
    </tr>
  );
}
