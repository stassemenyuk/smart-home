import React, { Component } from 'react';
import SignIn from '../sign-in/SignIn';
import SignUp from '../sign-up/SignUp';

import './FormBlock.css';

export default class FormBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentForm: 'sign-in',
    };
    this.handleForm = this.handleForm.bind(this);
  }

  handleForm() {
    if (this.state.currentForm === 'sign-in') {
      this.setState({ currentForm: 'sign-up' });
    } else {
      this.setState({ currentForm: 'sign-in' });
    }
  }

  render() {
    const { currentForm } = this.state;
    let Form;
    if (currentForm === 'sign-in') {
      Form = <SignIn handleForm={this.handleForm} />;
    } else {
      Form = <SignUp handleForm={this.handleForm} />;
    }
    return (
      <div class="form-side">
        <div class="form_block">
          <div class="form_block__logo"></div>
          {Form}
        </div>
      </div>
    );
  }
}
