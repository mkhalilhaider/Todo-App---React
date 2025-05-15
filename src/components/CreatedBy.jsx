import React from "react";

function CreatedBy() {
  return (
    <marquee
      behavior="scroll"
      direction="left"
      style={{
        backgroundColor: "white",
        color: "black",
        margin: "2rem 0 0 0",
      }}
    >
      6th React Project Made with 💻 by{" "}
      <a
        style={{
          textDecoration: "underline",
        }}
        href="https://www.github.com/mkhalilhaider"
        target="_blank"
      >
        Muhammad Khalil Haider
      </a>
    </marquee>
  );
}

export default CreatedBy;
