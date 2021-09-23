import React, { Component } from 'react';
import DescriptionSide from '../description-side/DescriptionSide';
import FormBlock from '../form-block/FormBlock';

import './LoginPage.css';

export default class LoginPage extends Component {
  render() {
    return (
      <div className="main">
        <DescriptionSide />
        <FormBlock />
      </div>
    );
  }
}
