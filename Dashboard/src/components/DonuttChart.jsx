import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 2],
  ["Watch TV", 2],
  ["Sleep", 7], // CSS-style declaration
];

export const options = {
  title: "My Daily Activities",
  pieHole: 0.8,
  is3D: false,
};

export default function DonuttChart() {
  return (
    <Chart
      chartType="PieChart"
      width="50%"
      height="100px"
      data={data}
      options={options}
    />
  );
}
