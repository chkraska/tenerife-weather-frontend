import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import {faker} from '@faker-js/faker';

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
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};



export function VerticalBarChart({weathers}) {

    const datas = weathers.map(item => ({
        date: item.timestamp.slice(4,15), 
        min_temp: item.min_temp,
        max_temp: item.max_temp
    }))

    const labels = [...new Set(datas.map(x => x.date))]
    const chartWeathers = []
    
    labels.forEach((label) => {
        const pairedObj = datas.find(data => data.date === label)
        if(pairedObj) {
            chartWeathers.push(pairedObj)
        }
    })
    console.log(chartWeathers)

    const data = {
      labels,
      datasets: [
        {
          label: 'Minimalna',
          data: chartWeathers.map((item) => item.min_temp),
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
          label: 'Maksymalna',
          data: chartWeathers.map((item) => item.max_temp),
          backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
      ],
    };


  return <Bar options={options} data={data} />;
}