import React from "react";
import Button from "../Button";
import { connect } from "react-redux";

function Header(props) {
  console.log(props);

  return (
    <div className="btcl_header">
      <a className="btcl_logo" href=""></a>
      <div className="btcl_header_btn_wrapper">
        <Button className="btn_header" content="History" />
        <Button
          clicked={props.signIn}
          className="btn_header"
          content="Sign In"
        />
        <Button className="btn_sign_up" content="Sign Up" />
        <Button
          clicked={props.themeSwitch}
          className="btn_header"
          content="theme"
        />
      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    signIn: () => {
      dispatch({ type: "SIGN_IN_TOGGLED" });
    },
    themeSwitch: () => {
      dispatch({ type: "TOGGLE_SKINNING" });
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Header);
