import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, Legend, plugins } from "chart.js/auto";

function LineChart({ chartData }) {
  return <Line data={chartData} options={{
    scales: {
      y: {
        ticks: { color: 'rgba(28, 29, 34, 1)', beginAtZero: true }
      },
      x: {
        ticks: { color: 'rgba(28, 29, 34, 1)', beginAtZero: true }
      }
    },
    plugins:{
      legend:{
        display:false}
      }
    }
  }/>
}

export default LineChart;