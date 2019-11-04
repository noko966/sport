import React from "react";
import Button from "../Button";

export default function Header() {
  return (
    <div className="btcl_header">
      <a className="btcl_logo" href=""></a>
      <div className='btcl_header_btn_wrapper'>
        <Button className="btn_header" content='History' />
        <Button className="btn_header" content='Sign In'/>
        <Button className="btn_sign_up" content='Sign Up'/>
      </div>
    </div>
  );
}
