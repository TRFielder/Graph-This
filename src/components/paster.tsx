/** @jsxImportSource @emotion/react */
import { jsx, css, type SerializedStyles } from "@emotion/react";
import React from "react";

// --------- Styles ---------

// Alignment and positioning
const displayAlignment: SerializedStyles = css({
  display: "flex",
  flexDirection: "column"
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
  height: "30px",
  ":hover": {
    borderColor: "#ccc"
  },
  ":focus": {
    borderColor: "#9147ff",
    background: "#fff"
  }
});

// --------- Component ---------
const Paster: React.FunctionComponent = () => {
  const handlePastedData: VoidFunction = () => {
    console.log("click detected!");
  };

  return (
    <div css={displayAlignment}>
      <input css={inputStyle} placeholder="paste your data here"></input>
      <button onClick={handlePastedData}>Submit</button>
    </div>
  );
};

export default Paster;
