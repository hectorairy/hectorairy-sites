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
          content="Un apasionado por diseñar y desarrollar tecnología impactante. Un entusiasta del long-term thinking. Creyente fiel de que no existe nada que no puedas aprender si te lo propones."
          data-react-helmet="true"
        />
        <meta name="robots" content="index, follow" data-react-helmet="true" />
        <meta name="author" content="Hector Airy" data-react-helmet="true" />
        <meta name="copyright" content="Hector Airy" data-react-helmet="true" />
        <meta
          name="image"
          content="https://scontent.fmex12-1.fna.fbcdn.net/v/t39.30808-1/p320x320/259438470_104459778731870_5383511588016407720_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=0c64ff&_nc_ohc=n9Q8ItcTy3cAX84GgYD&_nc_ht=scontent.fmex12-1.fna&edm=AOf6bZoEAAAA&oh=00_AT8hQF-a1DU2F0x7s4AYBeXPNg_Dxv85FkqPvohUdp1I2Q&oe=61BE160B"
          data-react-helmet="true"
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
        ¡Hola mundo!{"  "}
        <img
          src="https://s.w.org/images/core/emoji/13.1.0/svg/1f44b-1f3fc.svg"
          alt="hello"
          width={30}
        />
        {"  "}mi nombre es Héctor Airy.
      </h1>
      <p>
        <span>
          Soy desarrollador web trabajando con React/Node desde 2018.{" "}
        </span>
      </p>
      <p>
        Apasionado por diseñar y desarrollar tecnología impactante. <br />
        Un entusiasta del long-term thinking. <br />
        Creyente fiel de que no existe nada que no puedas aprender si te lo
        propones.
      </p>
      <p>
        <strong>¡Visitame en cualquiera de mis redes!</strong>
      </p>
      <>
        <Link
          link="https://hectorairy.com/"
          iconComponent={<FaDragon />}
          text="Mi sitio web (in progress...)"
          background="#8F00FF"
          color="white"
        />
        <Link
          link="https://www.linkedin.com/in/hectorairy/"
          iconComponent={<FaLinkedin />}
          text="Encuentrame en LinkedIn"
          background="#0e76a8"
          color="white"
        />
        <Link
          link="https://github.com/hectorairy"
          iconComponent={<FaGithub />}
          text="Conoce mis repos"
          background="#171515"
          color="white"
        />
        <Link
          link="https://twitter.com/hectorairy"
          iconComponent={<FaTwitter />}
          text="Sígueme en Twitter"
          background="#1DA1F2"
          color="white"
        />
        <Link
          link="https://www.youtube.com/channel/UCwPHunzXRBnKsFNuZONt5fw"
          iconComponent={<FaYoutube />}
          text="Aprende Git/GitHub conmigo"
          background="#FF0000"
          color="white"
        />
        <Link
          link="mailto:hola@hectorairy.com"
          iconComponent={<MdEmail />}
          text="¿Necesitas algo? Escríbeme..."
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
