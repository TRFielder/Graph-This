/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import React from "react";
/* import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts"; */

// --------- Styles ---------

interface ChartProps {
  data: Array<{ x: string; y: string }>;
}
// --------- Component ---------

const Chart: React.FunctionComponent<ChartProps> = (props: ChartProps) => {
  return (
    <div>
      {props.data.map((value: { x: string; y: string }) => (
        <p key={value.x}>
          {value.x} {value.y}
        </p>
      ))}
    </div>
  );
};

export default Chart;
