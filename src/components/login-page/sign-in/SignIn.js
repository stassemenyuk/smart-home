import React, { Component } from 'react';

export default class SignIn extends Component {
  render() {
    return (
      <>
        <div class="form_block__title">Sign in</div>
        <form action="" class="form_block__form">
          <div class="email form_element">
            <label for="email_in">Email</label>
            <input
              type="email"
              class="blue default_input"
              id="email_in"
              placeholder="Placeholder"
              required
            />
            <div class="error"></div>
          </div>
          <div class="password form_element">
            <label for="password_in">Password</label>
            <input
              type="password"
              class="blue default_input"
              id="password_in"
              placeholder="Placeholder"
              inputmode="numeric"
              required
            />
            <div class="error"></div>
          </div>
          <div class="sumbit">
            <input class="sign__in__btn btn" type="submit" value="SIGN IN" required />
          </div>
        </form>
        <div class="forgot__password">
          Forgot your <br />
          password?
        </div>
        <div class="form_block__footer">
          <div class="dont__have">
            Don't have an <br />
            account?
          </div>
          <div class="sign__up__link" onClick={this.props.handleForm}>
            Sign <br />
            up
          </div>
        </div>
      </>
    );
  }
}
