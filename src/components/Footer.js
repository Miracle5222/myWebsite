import React from "react";
import { Footers } from "./styles/Footer.styled";
import fb from "../Images/fb.svg";
import linkedin from "../Images/in.svg";
import instagram from "../Images/ins.svg";

function Footer() {
  return (
    <Footers justify="center" align="center">
      <div>
        <div>
          <img src={fb} alt="facebook" />
          <img src={instagram} alt="instagram" />
          <img src={linkedin} alt="linkedin" />
        </div>

        <span>Copyright &#169; 2121 | Roneil G. Bansas</span>
      </div>
    </Footers>
  );
}

export default Footer;
