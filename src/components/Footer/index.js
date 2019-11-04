import React from "react";

export default function Footer() {
  return (
    <div className="btcl_footer">
      <a className="btcl_logo" href=""></a>
      <ul>
        <li>
          <a className="btcl_footer_link" href="">
            about
          </a>
        </li>
        <li>
          <a className="btcl_footer_link" href="">
            Careers
          </a>
        </li>
        <li>
          <a className="btcl_footer_link" href="">
            Contact Us
          </a>
        </li>
        <li>
          <a className="btcl_footer_link" href="">
            Terms of Privacy
          </a>
        </li>
        <li>
          <a className="btcl_footer_link" href="">
            Betting Rules
          </a>
        </li>
      </ul>
      <div className="btcl_footer_copy_wrapper">
        <div className="btcl_footer_copy">
          {" "}
          ⓒ 2019 Beticle . All rights reserved.
        </div>
      </div>
    </div>
  );
}
