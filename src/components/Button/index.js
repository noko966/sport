import React from "react";

export default function Button({ className, onClick, content }) {
  return (
    <button
      onClick={onClick}
      className={"btcl_btn " + (className ? className : "")}
    >{content}</button>
  );
}
