/** @jsxImportSource @emotion/react */
import { jsx, css, type SerializedStyles } from "@emotion/react";
import React, { useState } from "react";

// --------- Styles ---------

// Component-level alignment and positioning
const displayAlignment: SerializedStyles = css({
  display: "flex",
  flexDirection: "column",
  width: "25%",
  height: "auto"
});

// Input styling
const inputStyle: SerializedStyles = css({
  fontSize: "13px",
  borderRadius: "4px",
  lineHeight: 1.5,
  padding: "5px 10px",
  transition:
    "box-shadow 100ms ease-in, border 100ms ease-in, background-color 100ms ease-in",
  border: "2px solid #dee1e2",
  background: "#dee1e2",
  display: "block",
  height: "600px",
  resize: "none",
  ":hover": {
    borderColor: "#ccc"
  },
  ":focus": {
    borderColor: "#9147ff",
    background: "#fff"
  }
});

// Button styling
const buttonStyle: SerializedStyles = css({
  backgroundColor: "#dee1e2",
  borderRadius: "8px",
  borderWidth: "2px solid #dee1e2",
  color: "#333333",
  cursor: "pointer",
  display: "inline-block",
  fontSize: "14px",
  fontWeight: 500,
  lineHeight: "20px",
  listStyle: "none",
  margin: "5px",
  padding: "10px 12px",
  textAlign: "center",
  transition: "all 200ms",
  verticalAlign: "baseline",
  whiteSpace: "nowrap",
  userSelect: "none",
  ":hover": {
    borderColor: "#9147ff"
  }
});

// --------- Component ---------
const Paster: React.FunctionComponent = () => {
  const [text, setText] = useState("");

  const handleTextArea: React.ChangeEventHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setText(e.currentTarget.value);
  };

  const handlePastedData: React.MouseEventHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    // This regex checks for carriage return + newline, or carriage return, or newline.
    // Should catch blank lines which we want to detect for user specified header lines
    console.log(text.split(/\r?\n|\r|\n/g));
  };

  return (
    <form css={displayAlignment}>
      <textarea
        css={inputStyle}
        placeholder="paste your data here"
        onChange={handleTextArea}
      ></textarea>
      <button css={buttonStyle} onClick={handlePastedData}>
        Submit
      </button>
    </form>
  );
};

export default Paster;
