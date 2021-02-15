import React, { useState } from "react";
import "./CityWarehouse.scss";

import { Line } from "react-chartjs-2";

function CityWarehouse({ storages, buyBtn }) {
  // const data = {
  //   labels: ["1", "2", "3", "4", "5", "6", "7", "8"],
  //   datasets: [
  //     {
  //       label: "Цена за шт.",
  //       data: [12, 19, 3, 5, 2, 3, 23],
  //       fill: false,
  //       backgroundColor: "#d48816",
  //       borderColor: "rgba(255, 99, 132, 0.2)",
  //     },
  //   ],
  // };

  const options = {
    legend: {
      display: false,
    },
    maintainAspectRatio: false,

    tooltips: {
      mode: "index",
      intersect: false,
      casetSize: 3,

      backgroundColor: "#44200c",
      bodyFontColor: "#a68156",
      borderColor: "#877f72",
      borderWidth: 1,
      displayColors: false,

      callbacks: {
        title() {
          return "";
        },
      },
    },

    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: false,
          },
          gridLines: {
            display: false,
          },
        },
      ],
      xAxes: [
        {
          ticks: {
            display: false,
          },
        },
      ],
    },
  };

  function getGoodData(priceStats) {
    return {
      labels: ["1", "2", "3", "4", "5", "6", "7", "8"],
      datasets: [
        {
          label: "Цена за шт.",
          data: priceStats,
          fill: false,
          backgroundColor: "#d48816",
          borderColor: "rgba(255, 99, 132, 0.2)",
        },
      ],
    };
  }

  let [number, setNumber] = useState('');

  return (
    <div>
      <h2 className="title">Городской склад</h2>

      <div className="panel">
        <div className="city-goods">
          {storages.map((good) => {
            return (
              <div className="goods-item-wrappre">
                <div className="good-item-discription">
                  <div className={"goods-item item-" + good.id}></div>
                  {number}
                  <input
                    className="input-number"
                    name="count"
                    value={number}
                    maxLength={3}
                    autoComplete={false}
                    onChange={(e) => {
                      setNumber(e.currentTarget.value)

                    }}
                  />

                  <button className="btn" 
                    onClick={() => {
                      buyBtn(good.id, number, good.priceStats[good.priceStats.length -1])
                      setNumber(0)
                    }}
                  >Купить</button>

                  <p className="price-description">{good.priceStats[good.priceStats.length -1]} за шт.</p>
                </div>
                <div className="goods-item-stats">
                  <Line data={getGoodData(good.priceStats)} options={options} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CityWarehouse;
