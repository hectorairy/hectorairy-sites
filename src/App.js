import React from "react";
import Avatar from "react-avatar";

import "./App.css";

function App() {
  return (
    <div className="container">
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
        A passionate about designing and developing impactful technology. An
        enthusiastic of long term thinking. Faithful believer that there’s
        nothing you cannot learn.
      </p>
      <p>Welcome!</p>
      {/* <div>
        <Button
          size={"lg"}
          block
          color="violet"
          className="bold"
          appearance="primary"
        >
          <Web /> Web
        </Button>
        <Button size={"lg"} block color="violet" appearance="primary">
          <EmailFillIcon /> YouTube
        </Button>
        <Button size={"lg"} block color="blue" appearance="primary">
          <FacebookOfficial /> Facebook
        </Button>
        <Button size={"lg"} block appearance="default">
          <Github /> GitHub
        </Button>
        <Button size={"lg"} block color="red" appearance="primary">
          <Youtube /> YouTube
        </Button>
        <Button size={"lg"} block color="cyan" appearance="primary">
          <Twitter /> Twitter
        </Button>
        <Button
          href="https://www.linkedin.com/in/hectorairy/"
          target="_blank"
          rel="noreferrer"
          size={"lg"}
          block
          color="blue"
          appearance="primary"
        >
          <Linkedin /> LinkedIn
        </Button>
      </div> */}

      <footer>
        ♤ The World Is Yours ♤ <br />
        <span>
          Site created by <a href="https://hectorairy.com/">Héctor Airy</a> 🐉
        </span>
      </footer>
    </div>
  );
}

export default App;
