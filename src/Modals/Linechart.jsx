import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, Legend, plugins } from "chart.js/auto";

function LineChart() {

  const chartData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "My Dataset",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: "rgba(75,192,192,1)",
        tension: 0.1
      }
    ]
  };

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