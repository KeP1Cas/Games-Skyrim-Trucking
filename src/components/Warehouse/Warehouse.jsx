import React, { useState } from "react";
import "./Warehouse.scss";

function Warehouse({ goods, storage, selectedGood, onSelectedGood, onSell }) {
  const [qty, setQty] = useState(0)

  function findGoodById(itemId) {
    return goods.find((item) => {
      return item.id === itemId;
    }).title;
  }

  function getEmptyCells() {
    if (storage.length < 8) {
      return Array(8 - storage.length)
        .fill()
        .map(() => {
          return <li className="goods-item no-item"></li>;
        });
    }
  }

  return (
    <div>
      <h2 className="title">Мой склад</h2>

      <div className="panel">
        <ul className="goods">
          {storage.map((item) => {
            return (
              <li
                key={item.id}
                className={
                  "goods-item item-" +
                  item.id +
                  (selectedGood === item.id ? " selected" : "")
                }
                onClick={() => {
                  onSelectedGood(item.id)
                }}
              >
                <span className="good-description">
                  {" "}
                  {item.productList} шт.
                </span>
              </li>
            );
          })}

          {getEmptyCells()}
        </ul>

        {selectedGood ? (
          <div className="sell-panel">
            <div>{findGoodById(selectedGood)}</div>
            <div className="controls">
              <input 
                type="text" 
                className="input" 
                value={qty}
                onChange={(e) => {
                  setQty(parseInt(e.target.value))
                }}
                /> шт. 
              <button 
                className="button"
                onClick={() => {
                  onSell(selectedGood, qty)
                }}
              > Продать </button>
            </div>
          </div>
        ) : '' }
      </div>
    </div>
  );
}

export default Warehouse;
