/** @jsxImportSource @emotion/react */
import { jsx, css, type SerializedStyles } from "@emotion/react";
import React from "react";
import Paster from "../components/paster";

const divStyle: SerializedStyles = css({
  display: "flex",
  justifyContent: "center"
});

const Home: React.FunctionComponent = () => {
  return (
    <div css={divStyle}>
      <Paster />
    </div>
  );
};

export default Home;
