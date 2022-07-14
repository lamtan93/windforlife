import React from "react";
import Proptypes from 'prop-types';
import { Bar } from "react-chartjs-2";
// eslint-disable-next-line
import Chart from 'chart.js/auto';

const SpeedWindChart = ({
    dataAnemometer,
}) => {
return (
    <Bar
    data={{
      labels: dataAnemometer?.datesLabel,
      datasets: [
        {
          label: "Win force (knots)",
          backgroundColor: [
            "#3e95cd",
            "#8e5ea2",
            "#3cba9f",
            "#e8c3b9",
            "#c45850"
          ],
          data: dataAnemometer?.data
        }
      ]
    }}
    options={{
        plugins: {
            title: {
              display: true,
              text: "Wind Speed (knots)"
            },
            legend: {
              display: false,
            }
          },
    }}
  />
    )
}

SpeedWindChart.propTypes = {
  dataAnemometer: Proptypes.shape({}),
}

SpeedWindChart.defaultTypes = {
  dataAnemometer: null,
}

export default SpeedWindChart;