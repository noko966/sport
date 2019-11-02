import React from "react";

export default function Odd({ price, factor, type }) {
  return (
    <div className={"btcl_odd " + (type==='buy' && "btcl_odd_buy ") + (type==='sell' && "btcl_odd_sell ")}>
      <span className="btcl_price">{price}</span>
      <span className="btcl_factor">{factor}</span>
    </div>
  );
}
