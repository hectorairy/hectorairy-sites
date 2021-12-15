import React from "react";
import Avatar from "react-avatar";
import { Helmet } from "react-helmet";
import {
  FaDragon,
  FaGithub,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "./App.css";
import { Link } from "./components/Link";

function App() {
  return (
    <div className="container">
      <Helmet>
        <meta
          name="description"
          content="Find all the best quality products your pet may need"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Amcelium" />
        <meta name="copyright" content="Amcelium" />
        <meta
          name="image"
          content="https://scontent.fmex12-1.fna.fbcdn.net/v/t39.30808-1/p320x320/259438470_104459778731870_5383511588016407720_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=0c64ff&_nc_ohc=n9Q8ItcTy3cAX84GgYD&_nc_ht=scontent.fmex12-1.fna&edm=AOf6bZoEAAAA&oh=00_AT8hQF-a1DU2F0x7s4AYBeXPNg_Dxv85FkqPvohUdp1I2Q&oe=61BE160B"
        />
      </Helmet>
      <Avatar
        facebookId="104457655398749"
        size="150"
        style={{ marginTop: 50 }}
        round
      />
      <p className="bold">@hectorairy</p>
      <h1>
        Hello world!{"  "}
        <img
          src="https://s.w.org/images/core/emoji/13.1.0/svg/1f44b-1f3fc.svg"
          alt="hello"
          width={30}
        />
        {"  "}my name is Hector Airy.
      </h1>
      <p>
        <span>I'm a React Developer since 2018.</span>
      </p>
      <p>
        A passionate about designing and developing impactful technology. An
        enthusiastic of long term thinking. Faithful believer that there’s
        nothing you cannot learn.
      </p>
      <p>
        <strong>Welcome!</strong>
      </p>
      <>
        <Link
          link="https://hectorairy.com/"
          iconComponent={<FaDragon />}
          text="My website (in progress...)"
          background="#8F00FF"
          color="white"
        />
        <Link
          link="https://www.linkedin.com/in/hectorairy/"
          iconComponent={<FaLinkedin />}
          text="Find me on LinkedIn "
          background="#0e76a8"
          color="white"
        />
        <Link
          link="https://github.com/hectorairy"
          iconComponent={<FaGithub />}
          text="Check my code"
          background="#171515"
          color="white"
        />
        <Link
          link="https://hectorairy.com/"
          iconComponent={<FaTwitter />}
          text="Follow me on Twitter"
          background="#1DA1F2"
          color="white"
        />
        <Link
          link="https://www.youtube.com/channel/UCwPHunzXRBnKsFNuZONt5fw"
          iconComponent={<FaYoutube />}
          text="Git Course"
          background="#FF0000"
          color="white"
        />
        <Link
          link="mailto:hola@hectorairy.com"
          iconComponent={<MdEmail />}
          text="Can I help you?"
          background="#0489C9"
          color="white"
        />
      </>

      <footer>
        ♤ The World Is Yours ♤ <br />
        <span>
          Site created by{" "}
          <a href="https://hectorairy.com/" target="_blank" rel="noreferrer">
            Héctor Airy
          </a>{" "}
          🐉
        </span>
      </footer>
    </div>
  );
}

export default App;
