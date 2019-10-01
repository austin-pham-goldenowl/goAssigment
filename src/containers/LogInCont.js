import React from "react";
import { connect } from "react-redux";
import { login, logout } from "../actions/user";
import UserAuthDialogComp from "../components/user/UserAuthDialogComp";

class LogInCont extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    let { userName, password } = this.state;
    this.props.login(userName, password);
    this.setState({
      userName: "",
      password: ""
    });
  }

  handleUserNameChange = e => this.setState({ userName: e.target.value });
  handlePasswordChange = e => this.setState({ password: e.target.value });

  render() {
    let { isLoginSuccess, logout } = this.props;

    return (
      <UserAuthDialogComp
        userName={this.state.userName}
        password={this.state.password}
        loginError={this.props.loginError}
        handleUserNameChange={this.handleUserNameChange}
        handlePasswordChange={this.handlePasswordChange}
        onSubmit={this.onSubmit}
        isLoginSuccess={isLoginSuccess}
        logout={logout}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoginSuccess: state.logIn.isLoginSuccess,
    loginError: state.logIn.loginError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: (userName, password) => dispatch(login(userName, password)),
    logout: () => dispatch(logout())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LogInCont);
