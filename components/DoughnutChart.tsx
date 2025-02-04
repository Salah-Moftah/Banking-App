'use client'

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);



const DoughnutChart = ({accounts}: DoughnutChartProps ) => {

  const accountNames = accounts.map((a) => a.name);

  const balances = accounts.map((a) => a.currentBalance)

  const data = {
    datasets: [
      {
        label: 'Banks',
        data: balances,
        backgroundColor: ['#0747b6', '#2265dB', '#2f91fa', '#59b7ff', '#8fd6ff'],
      },
    ],
    labels: accountNames
  }
  return <Doughnut data={data} options={{
    cutout: '60%',
    plugins: {
      legend: {
        display: false
      }
    }
  }} />
}

export default DoughnutChart