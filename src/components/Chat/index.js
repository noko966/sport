import React from "react";

export default function Chat({ messages }) {
  return (
    <div className="btcl_chat">
      <div className="btcl_chat_head"></div>
      <div className="btcl_chat_content">
        <div className="btcl_chat_header">
          <i className="btcl_close">✖</i>
        </div>
        <div className="btcl_chat_messages">
          <div className="btcl_chat_message btcl_chat_message_incoming">
            some long text
          </div>
          <div className="btcl_chat_message btcl_chat_message_outgoing">
            some long text
          </div>
        </div>
        <div className="btcl_chat_footer"></div>
      </div>
    </div>
  );
}
