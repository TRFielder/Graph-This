/** @jsxImportSource @emotion/react */
import { jsx, css, type SerializedStyles } from "@emotion/react";
import React from "react";

const divStyle: SerializedStyles = css({
  display: "flex",
  justifyContent: "center"
});

const Home: React.FunctionComponent = () => {
  return (
    <div css={divStyle}>
      <p>Here is some text!</p>
    </div>
  );
};

export default Home;
