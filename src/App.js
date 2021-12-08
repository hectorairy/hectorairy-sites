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
        A Passionate about designing and developing impactful technology. An
        enthusiastic of long term thinking. Faithful believer that there’s
        nothing you cannot learn.
      </p>
      {/* 49263990584 */}
    </div>
  );
}

export default App;
