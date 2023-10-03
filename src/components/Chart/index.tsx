"use client";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Tooltip,
  PointElement,
  BarElement,
  ChartData
} from "chart.js";
import { Bar } from "react-chartjs-2";

// Register ChartJS components using ChartJS.register
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Tooltip
);

const labels = ["Mai", "Jun", "Jul", "Ago"]


const data = {
  labels,
  datasets: [
    {
      data: [550, 1500, 2000, 500],
      backgroundColor: "rgb(158, 110, 254)",
      borderRadius: 16,
      maxBarThickness: 64,
    },
  ],
} as ChartData<"bar">

export default function Chart() {
  return (
    <Bar
      options={{
        backgroundColor: "rgba(255, 255, 255, 0)",
        font: {
          size: 16
        }
      }}
      data={data}
    />
  )
}