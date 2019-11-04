import React from "react";
import Button from "../Button";
import Input from "../Input";

export default function Login({}) {
  return (
    <div className="btcl_popup btcl_popup_login">
      <div className="btcl_popup_heading btcl_mb_l">Sing in</div>
      <div className='btcl_popup_form_grp btcl_mb_l'>
        <label>email</label>
        <Input className='btcl_input_popup'/>
      </div>
      <div className='btcl_popup_form_grp btcl_mb_m'>
        <label>paddword</label>
        <Input className='btcl_input_popup'/>
      </div>
      <div className='btcl_flje btcl_mb_l'>
      <a href='#' className='btcl_popup_link'>Forgot password?</a>
      </div>
     
      <Button content='SIGN IN' className='btn_popup_main btcl_mb_l'/>
      <div className='btcl_fljc'>DON’T HAVE AN ACCOUNT?<div>&nbsp;</div><a href='#' className='btcl_popup_link'> SIGN UP</a></div>
      <i className='btcl_close '>✖</i>
    </div>
  );
}
