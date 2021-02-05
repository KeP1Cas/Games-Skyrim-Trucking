import Citys from '../Citys/Citys';
import Warehouse from '../Warehouse/Warehouse';
import CityWarehouse from '../CityWarehouse/CityWarehouse';
import Transportation from '../Transportation/Transportation';

import './App.scss';
import { useState } from 'react';

function App() {
  const [currentCity, setCurrentCity] = useState(1);

const [storages, setStorages] = useState([
    {
      cityId: 1,
      storage: [
        {
          id: 1,
          productList: 10,
        },
        {
          id: 2,
          productList: 20,
        },
      ],
    },
    {
      cityId: 2,
      storage: [
        {
          id: 1,
          productList: 5,
        },
      ],
    },
  ]);

  const goods = [{
    id: 1,
    title: 'Железо'
  }, 
  {
    id: 2,
    title: 'Дерево'
  },
  {
    id: 3,
    title: 'Еда'
  }]

  function getStorageByCity() {
    const store = storages.find((storage) => {
      return storage.cityId === currentCity;
    });

    if (store) {
      return store.storage;
    } else {
      return [];
    }
  }


  return (
    <div className="app">
      <div className="app-name">
          <h1>SKYRIM</h1>
      
      <Citys currentCity={currentCity} 
      onChange={(city) => {
        setCurrentCity(city);
      }}/>

      <div className="content">
        <div className="column">
          <div className="storage">
            <Warehouse 
            currentCity={currentCity}
            storage={getStorageByCity()}
            goods={goods}
            />
          </div>

          <div className="transportation">
            <Transportation/>
          </div>
    
        </div>
        <div className="column">
          <div className="city__warehouse">
            <CityWarehouse/>
          </div>
        </div>
      </div>

      
      </div>
    </div>
  );
}

export default App;
