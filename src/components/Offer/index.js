import React from "react";
import Button from "../Button";
import Input from "../Input";

export default function Offer({ title, type, teamName, payout }) {
  return (
    <div className="btcl_offer">

      <div className="btcl_flac btcl_mb_m">
        <div className="btcl_take_all_space">
          <div className="btcl_title">{title}</div>
        </div>
        <div className="btcl_aw_space">
          <div className="btcl_type">{type}</div>
        </div>
      </div>

      <div className='btcl_separator btcl_mb_m'></div>

      <div className="btcl_flac btcl_mb_m">
        <div className="btcl_take_all_space">
          <div className="btcl_team_name">{teamName}</div>
        </div>
        <div className="btcl_aw_space">
          <Button content="buy" />
        </div>
      </div>

      <div className="btcl_flac btcl_mb_m">
        <div className="btcl_take_all_space">
          <div className="btcl_price">price:</div>
        </div>
        <div className="btcl_aw_space">
          <Input className="btcl_input_offer" />
        </div>
      </div>
      <div className="btcl_flac btcl_mb_m">
        <div className="btcl_take_all_space">
          <div className="btcl_price">count:</div>
        </div>
        <div className="btcl_aw_space">
          <Input className="btcl_input_offer" />
        </div>
      </div>
      <div className="btcl_flac btcl_mb_m">
        <div className="btcl_take_all_space">
          <div className="btcl_price">payout:</div>
        </div>
        <div className="btcl_aw_space">
          <div className="btcl_payout">{payout}</div>
        </div>
      </div>
      <div className='btcl_separator_akcent'></div>
    </div>
  );
}
