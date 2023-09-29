import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Opady deszczu w tym tygodniu",
    },
  },
};

export function RainChart({ weathers }) {
  const datas = weathers.map((item) => ({
    date: item.timestamp.slice(4, 15),
    humidity: item.humidity
  }));

  const labelsSet = [...new Set(datas.map((x) => x.date))];
  const labels = labelsSet.slice(labelsSet.length - 7, labelsSet.length);
  const chartWeathers = [];

  labels.forEach((label) => {
    const pairedObj = datas.find((data) => data.date === label);
    if (pairedObj) {
      chartWeathers.push(pairedObj);
    }
  });

  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: "Opady deszczu",
        data: chartWeathers.slice(chartWeathers.length - 7,chartWeathers.length).map((item) => item.humidity),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
      
    ],
    
  };

  return <Line options={options} data={data} />;
}
