import React from "react";
import "./Warehouse.scss";

function Warehouse({ goods, storage }) {
  function findGoodById(itemId) {
    return goods.find((item) => {
      return item.id === itemId;
    }).title;
  }

  function getEmptyCells() {
    if (storage.length < 8 ){
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
              <li key={item.id} className={"goods-item item-" + item.id}>
                <span className="good-description"> {item.productList} шт.</span>
              </li>
            );
          })}

          {getEmptyCells()}
        </ul>
      </div>
    </div>
  );
}

export default Warehouse;
