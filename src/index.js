import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Helmet } from "react-helmet";

import "./index.css";

ReactDOM.render(
  <>
    <Helmet>
      <meta
        property="image"
        content="https://scontent.fmex12-1.fna.fbcdn.net/v/t39.30808-1/p320x320/259438470_104459778731870_5383511588016407720_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=0c64ff&_nc_ohc=n9Q8ItcTy3cAX84GgYD&_nc_ht=scontent.fmex12-1.fna&edm=AOf6bZoEAAAA&oh=00_AT8hQF-a1DU2F0x7s4AYBeXPNg_Dxv85FkqPvohUdp1I2Q&oe=61BE160B"
      />
      <meta
        property="description"
        content="Card presentation from Hector Airy"
      />
    </Helmet>
    <App />
  </>,
  document.getElementById("root")
);
