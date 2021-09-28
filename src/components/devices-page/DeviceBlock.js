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
      <td></td>
    </tr>
  );
}
