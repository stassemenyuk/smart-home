import React, { Component } from 'react';

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        email: '',
        password: '',
        username: '',
      },
      success: '',
    };
    this.changeEmail = this.changeEmail.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.changeUsername = this.changeUsername.bind(this);
    this.submitRegistrationForm = this.submitRegistrationForm.bind(this);
  }

  changeEmail(e) {
    const newData = JSON.parse(JSON.stringify(this.state.data));
    newData.email = e.target.value;
    this.setState({ data: newData });
    this.setState({ success: '' });
  }
  changePassword(e) {
    const newData = JSON.parse(JSON.stringify(this.state.data));
    newData.password = e.target.value;
    this.setState({ data: newData });
    this.setState({ success: '' });
  }
  changeUsername(e) {
    const newData = JSON.parse(JSON.stringify(this.state.data));
    newData.username = e.target.value;
    this.setState({ data: newData });
    this.setState({ success: '' });
  }

  submitRegistrationForm(e) {
    e.preventDefault();
    console.log(this.state.data);
    localStorage.setItem(this.state.data.email, JSON.stringify(this.state.data));
    this.setState({
      data: {
        email: '',
        password: '',
        username: '',
      },
      success: 'Successfull registration!',
    });
  }

  render() {
    return (
      <>
        <div className="form_block__title">Sign Up</div>
        <form onSubmit={this.submitRegistrationForm} action="" className="form_block__form">
          <div className="email form_element">
            <label htmlFor="email_up">Email</label>
            <input
              onChange={this.changeEmail}
              type="email"
              className="blue default_input"
              id="email_up"
              placeholder="Placeholder"
              value={this.state.data.email}
              required
            />
            <div className="error"></div>
          </div>
          <div className="password form_element">
            <label htmlFor="password_up">Password</label>
            <input
              onChange={this.changePassword}
              type="password"
              className="blue default_input"
              id="password_up"
              placeholder="Placeholder"
              required
              value={this.state.data.password}
            />
            <div className="error"></div>
          </div>
          <div className="confirm form_element">
            <label htmlFor="confirm_up">Confirm Password</label>
            <input
              type="password"
              className="blue default_input"
              id="confirm_up"
              placeholder="Placeholder"
              required
            />
            <div className="error"></div>
          </div>
          <div className="fullname form_element">
            <label htmlFor="fullname_up">Username</label>
            <input
              onChange={this.changeUsername}
              type="text"
              className="blue default_input"
              id="fullname_up"
              placeholder="Placeholder"
              value={this.state.data.username}
              required
            />
            <div className="error"></div>
          </div>
          <div className="sumbit">
            <input className="sign__up__btn btn" type="submit" value="SIGN UP" required />
            <div className="error"></div>
          </div>
          <div className="description">
            By clicking Join now, you agree to the LinkedIn User <br />
            Agreement, Privacy Policy, and Cookie Policy
          </div>
          <div className="form-success">{this.state.success}</div>
        </form>
        <div className="form_block__footer">
          <div className="dont__have">
            Don't have an <br />
            account?
          </div>
          <div className="sign__up__link" onClick={this.props.handleForm}>
            Sign <br />
            in
          </div>
        </div>
      </>
    );
  }
}
