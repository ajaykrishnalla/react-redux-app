import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "./actions/authActions";
class AuthComponent extends Component {
  handleChange = () => {
    this.props.login();
  };
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <button onClick={this.handleChange}>Change</button>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { login }
)(AuthComponent);
