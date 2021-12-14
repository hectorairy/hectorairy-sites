import React from "react";

export const Link = ({ link, iconComponent, text, background, color }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <button style={{ background: background, color: color }}>
        {iconComponent}
        {text}
      </button>
    </a>
  );
};
