import React, { Component } from 'react';
import Header from '../header/Header';
import OverviewPage from '../overview-page/OverviewPage';

import './MainPage.css';

export default class MainPage extends Component {
  render() {
    // let CurrentPage = '';
    return (
      <div className="wrapper">
        <Header />
        <OverviewPage />
      </div>
    );
  }
}
