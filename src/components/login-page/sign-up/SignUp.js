import React, { Component } from 'react';

export default class SignUp extends Component {
  render() {
    return (
      <>
        <div class="form_block__title">Sign Up</div>
        <form action="" class="form_block__form">
          <div class="email form_element">
            <label for="email_up">Email</label>
            <input
              type="email"
              class="blue default_input"
              id="email_up"
              placeholder="Placeholder"
              required
            />
            <div class="error"></div>
          </div>
          <div class="password form_element">
            <label for="password_up">Password</label>
            <input
              type="password"
              class="blue default_input"
              id="password_up"
              placeholder="Placeholder"
              required
            />
            <div class="error"></div>
          </div>
          <div class="confirm form_element">
            <label for="confirm_up">Confirm Password</label>
            <input
              type="password"
              class="blue default_input"
              id="confirm_up"
              placeholder="Placeholder"
              required
            />
            <div class="error"></div>
          </div>
          <div class="fullname form_element">
            <label for="fullname_up">Full Name</label>
            <input
              type="text"
              class="blue default_input"
              id="fullname_up"
              placeholder="Placeholder"
              required
            />
            <div class="error"></div>
          </div>
          <div class="sumbit">
            <input class="sign__up__btn btn" type="submit" value="SIGN UP" required />
            <div class="error"></div>
          </div>
          <div class="description">
            By clicking Join now, you agree to the LinkedIn User <br />
            Agreement, Privacy Policy, and Cookie Policy
          </div>
        </form>
        <div class="form_block__footer">
          <div class="dont__have">
            Don't have an <br />
            account?
          </div>
          <div class="sign__up__link" onClick={this.props.handleForm}>
            Sign <br />
            in
          </div>
        </div>
      </>
    );
  }
}
