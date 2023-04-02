/** @jsxImportSource @emotion/react */
import { Global, css, jsx } from "@emotion/react";
import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";

const App: React.FunctionComponent = () => {
  return (
    <>
      <Global
        styles={css`
          @import url("https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap");
          body {
            background-color: #344966;
            font-size: 40px;
            font-family: "Noto Sans", sans-serif;
          }
        `}
      />
      <HashRouter>
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </HashRouter>
    </>
  );
};

export default App;
