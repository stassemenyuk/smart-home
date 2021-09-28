import React from 'react';

export default function PagesHeader(props) {
  return (
    <div className="main__content__header">
      <div className="main__content__header__text">{props.title}</div>
      <div className="main__content__header__options" onClick={props.onClick}>
        {props.icon}
      </div>
    </div>
  );
}
