import React from "react";
import "./CityWarehouse.scss";

import {Line} from 'react-chartjs-2'

function CityWarehouse() {

  const data = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8'],
    datasets: [
      {
        label: 'Цена за шт.',
        data: [12, 19, 3, 5, 2, 3, 23],
        fill: false,
        backgroundColor: '#d48816',
        borderColor: 'rgba(255, 99, 132, 0.2)',
      },
    ],
  }
  
  const options = {
    legend: {
      display: false
    },
    maintainAspectRatio: false,

    tooltips: {
      mode: 'index',
      intersect: false,
      casetSize: 3,

      backgroundColor: '#44200c',
      bodyFontColor: '#a68156',
      borderColor: '#877f72',
      borderWidth: 1,
      displayColors: false,

      callbacks: {
        title() {
          return "";
        }
      },

    },

    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
          gridLines: {
            display: false
          }
        },
      ],
      xAxes: [
        {
          ticks: {
            display: false
          }
        }
      ]
    },
  }

  return (
    <div>
      <h2 className="title">Городской склад</h2>

      <div className="panel">
        <div className="city-goods">
          <div className="goods-item-wrappre">
            <div className="goods-item item-1"></div>
            <div className="goods-item-stats">
              <Line data={data} options={options}/>
            </div>
          </div>

          <div className="goods-item-wrappre">
            <div className="goods-item item-5"></div>
            <div className="goods-item-stats">
              <Line data={data} options={options}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CityWarehouse;
