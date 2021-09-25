import React, { Component } from 'react';

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        email: '',
        password: '',
      },
      error: '',
    };
    this.changeEmail = this.changeEmail.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.submitSignInForm = this.submitSignInForm.bind(this);
  }

  changeEmail(e) {
    const newData = JSON.parse(JSON.stringify(this.state.data));
    newData.email = e.target.value;
    this.setState({ data: newData });
    this.setState({ error: '' });
  }
  changePassword(e) {
    const newData = JSON.parse(JSON.stringify(this.state.data));
    newData.password = e.target.value;
    this.setState({ data: newData });
    this.setState({ error: '' });
  }

  submitSignInForm(e) {
    e.preventDefault();
    let checkData = JSON.parse(localStorage.getItem(this.state.data.email));
    if (checkData && checkData.password === this.state.data.password) {
      console.log('login');
      this.setState({
        data: {
          email: '',
          password: '',
        },
      });
      this.props.autenficate(checkData.username);
    } else {
      console.log('-');
      this.setState({ error: 'Email or password is incorrect' });
    }
  }

  render() {
    return (
      <>
        <div className="form_block__title">Sign in</div>
        <form onSubmit={this.submitSignInForm} action="" className="form_block__form">
          <div className="email form_element">
            <label htmlFor="email_in">Email</label>
            <input
              onChange={this.changeEmail}
              type="email"
              className="blue default_input"
              id="email_in"
              placeholder="Placeholder"
              required
              value={this.state.data.email}
            />
            <div className="error"></div>
          </div>
          <div className="password form_element">
            <label htmlFor="password_in">Password</label>
            <input
              onChange={this.changePassword}
              type="password"
              className="blue default_input"
              id="password_in"
              placeholder="Placeholder"
              inputMode="numeric"
              required
              value={this.state.data.password}
            />
            <div className="error"></div>
          </div>
          <div className="sumbit">
            <input className="sign__in__btn btn" type="submit" value="SIGN IN" required />
          </div>
          <div className="form-error">{this.state.error}</div>
        </form>
        <div className="forgot__password">
          Forgot your <br />
          password?
        </div>
        <div className="form_block__footer">
          <div className="dont__have">
            Don't have an <br />
            account?
          </div>
          <div className="sign__up__link" onClick={this.props.handleForm}>
            Sign <br />
            up
          </div>
        </div>
      </>
    );
  }
}
