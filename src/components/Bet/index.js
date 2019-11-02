import React from "react";
import Input from "../Input";
import Button from "../Button";


export default function Bet({
  type,

}) {
  return (
    <div className="btcl_bet">
      <div className="btcl_flac btcl_bet_info_cont">asd asd as</div>
      <div className="btcl_flac">
        <div className="btcl_bet_heading">
          <div className='btcl_bet_typee'>type</div>
          <div className='btcl_bet_name'>name</div>
        </div>
        <Input className='btcl_input_bet' type='number'/>
        <Input className='btcl_input_bet' type='number'/>
        <Button content={type==='sell' ? 'sell' : 'buy'} className={'btcl_btn_bet ' + (type==='sell' ? 'btcl_btn_bet_sell' : 'btcl_btn_bet_buy')}/>
      </div>
      <i className='btcl_close'>x</i>
    </div>
  );
}
