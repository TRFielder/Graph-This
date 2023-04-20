/** @jsxImportSource @emotion/react */
import { jsx, css, type SerializedStyles } from "@emotion/react";
import React, { useEffect, useState } from "react";
import Paster from "../components/paster";
import Chart from "../components/chart";

const divStyle: SerializedStyles = css({
  display: "flex",
  justifyContent: "center"
});

const Home: React.FunctionComponent = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [data, setData] = useState<Array<{ x: number; y: number }>>([]);
  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div css={divStyle}>
      <Paster setData={setData} />
      <Chart data={data} />
    </div>
  );
};

export default Home;
