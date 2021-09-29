import React, { Component } from 'react';
import Aside from '../aside/Aside';
import Header from '../header/Header';
import OverviewPage from '../overview-page/OverviewPage';
import DevicesPage from '../devices-page/DevicesPage';
import Footer from '../overview-page/footer/Footer';

import './MainPage.css';

export default class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 'overview',
    };
    this.changeActivePage = this.changeActivePage.bind(this);
  }

  changeActivePage(id) {
    switch (id) {
      case 0:
        this.setState({ currentPage: 'overview' });
        break;
      case 1:
        this.setState({ currentPage: 'devices' });
        break;
      case 2:
        this.setState({ currentPage: 'analytics' });
        break;
      case 3:
        this.setState({ currentPage: 'rules' });
        break;
      case 4:
        this.setState({ currentPage: 'gallery' });
        break;
      case 5:
        this.setState({ currentPage: 'history' });
        break;
      case 6:
        this.setState({ currentPage: 'settings' });
        break;
      default:
        this.setState({ currentPage: 'overview' });
    }
  }

  render() {
    let CurrentPage, CurrentPageFooter;
    switch (this.state.currentPage) {
      case 'overview':
        CurrentPage = <OverviewPage />;
        CurrentPageFooter = <Footer />;
        break;
      case 'devices':
        CurrentPage = <DevicesPage />;
        CurrentPageFooter = '';
        break;
      default:
        CurrentPage = <EmptyPage />;
        CurrentPageFooter = '';
    }
    return (
      <div className="wrapper">
        <Header username={this.props.username} logOut={this.props.logOut} />
        <main>
          <Aside changeActivePage={this.changeActivePage} />
          {CurrentPage}
        </main>
        {CurrentPageFooter}
      </div>
    );
  }
}

function EmptyPage() {
  return (
    <div className="empty-page">
      <div className="empty-page__text">Sorry , this page is not finished yet :(</div>
    </div>
  );
}
