/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import React from "react";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

// --------- Styles ---------

interface ChartProps {
  data: Array<{ x: number; y: number }>;
}
// --------- Component ---------

const Chart: React.FunctionComponent<ChartProps> = (props: ChartProps) => {
  console.log(props.data);
  return (
    <LineChart width={1000} height={800} data={props.data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="x" />
      <YAxis />
      <Line type="monotone" dataKey="y" stroke="#8884d8" />
    </LineChart>
  );
};

export default Chart;
