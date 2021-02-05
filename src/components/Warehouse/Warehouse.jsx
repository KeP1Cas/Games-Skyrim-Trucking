import React from 'react'
import './Warehouse.scss'


function Warehouse({goods, storage}) {
    
    function findGoodById(itemId) {
        return goods.find((item) => {
          return item.id === itemId;
        }).title;
      }

    return (
        <>
        {storage.map((item) => {
            return (
              <span>
                {item.id}. {findGoodById(item.id)} - {item.productList} шт.
                <br />
              </span>
            );
          })}
        </>
    )
}

export default Warehouse
