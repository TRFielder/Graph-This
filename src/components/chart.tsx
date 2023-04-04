/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import React from "react";
// --------- Styles ---------

interface ChartProps {
  data: string[];
}

// --------- Component ---------

const Chart: React.FunctionComponent<ChartProps> = (props: ChartProps) => {
  return (
    <div>
      {props.data.map((value: string) => (
        <p key={value}>{value}</p>
      ))}
    </div>
  );
};

export default Chart;
