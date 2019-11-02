import React from "react";

export default function SidebarItem({ icon, text, arrow, factor, className }) {
  return (
    <div className={"btcl_sidebar_item " + (className && className)}>
      <i className="btcl_icon">{icon}</i>
      <span className="btcl_text">{text}</span>
      <span className="btcl_factor">{factor}</span>
      <i className="btcl_arrow">{arrow}</i>
    </div>
  );
}
