import React from "react";

export default function Button({ className, clicked, content }) {
  return (
    <button
      onClick={clicked}
      className={"btcl_btn " + (className ? className : "")}
    >
      {content}
    </button>
  );
}
