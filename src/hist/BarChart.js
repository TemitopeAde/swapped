import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  scales: {
    xAxis: {
      display: false,
      barPercentage: 12,
    },
    yAxis: {
      display: false,
    },
  },
  legend: {
    display: false,
  },
  tooltips: {
    enabled: false,
  },
};

class BarChart extends React.Component {
  render() {
    const { data, highlight, domain } = this.props;

    // calculate frequency of data
    var counts = {};
    for (var i = 0; i < data.length; i++)
      counts[data[i]] = counts[data[i]] + 1 || 1;

    // generate data
    // const barDataValues = [];
    const barDataValues = [1600, 1400, 1200, 1000, 800, 600, 400, 300, 100, 20];
    // for (let i = 0; i < domain[1]; i++) {
    //   barDataValues.push(counts[i] || 0);
    // }
    const barData = {
      labels: barDataValues.map((val, i) => i),
      datasets: [
        {
          backgroundColor: barDataValues.map((val, i) =>
            i >= highlight[0] && i <= highlight[1]
              ? "rgba(135, 26, 235, 1)"
              : "rgba(255, 99, 132, 0.2)"
          ),
          hoverBackgroundColor: "rgba(55,99,132,0.4)",
          data: barDataValues,
          barThickness: 15,

          // barPercentage: 2,
        },
      ],
      options: {
        plugins: {
          legend: { display: false },
        },
      },
    };

    return <Bar data={barData} options={options} />;
  }
}

export default BarChart;
