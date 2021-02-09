import Citys from '../Citys/Citys';
import Warehouse from '../Warehouse/Warehouse';
import CityWarehouse from '../CityWarehouse/CityWarehouse';
import Transportation from '../Transportation/Transportation';
import Stats from '../Stats/Stats';

import './App.scss';
import { useState } from 'react';

function App() {
  const [currentCity, setCurrentCity] = useState(1);

  const [selectedGood, setSelectedGood] = useState(null)

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
        {
          id: 5,
          productList: 14,
        },
        {
          id: 4,
          productList: 50,
        },
        
      ],
    },
    {
      cityId: 2,
      storage: [
        {
          id: 6,
          productList: 12,
        },
        {
          id: 2,
          productList: 20,
        },
        {
          id: 5,
          productList: 14,
        },
      ],
    },
    {
      cityId: 3,
      storage: [
        {
          id: 1,
          productList: 5,
        },
        {
          id: 6,
          productList: 40,
        },
        {
          id: 2,
          productList: 25,
        },
        {
          id: 5,
          productList: 4,
        },
      ],
    },
  ]);

//   const goods = () => { fetch("../../../public/db.json", {
//     headers : { 
//       'Content-Type': 'application/json',
//       'Accept': 'application/json'
//       }
//      })
//         .then(function(response) {
//           return response.json();
//         })
//         .then(function(data) {
//           console.log(data);
//         })
// }
  
  const goods = [{
    id: 1,
    title: "Золотая руда",
    imageUrl: "../src/assets/img/gold.png"
  }, 
  {
    id: 2,
    title: "Хлеб",
    imageUrl: "../src/assets/img/beard.png"
  },
  {
    id: 3,
    title: "Жаренный ласось",
    imageUrl: "../src/assets/img/lasos.png"
  },
  {
    id: 4,
    title: "Стрелы",
    imageUrl: "../src/assets/img/arrow.png"
  },
  {
    id: 5,
    title: "Яблоко",
    imageUrl: "../src/assets/img/apple.png"
  },
  {
    id: 6,
    title: "Железная руда",
    imageUrl: "../src/assets/img/iron.png"
  }]

  const [money, setMoney] = useState(1000);
  const [days, setDays] = useState(1);

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

  function liveProcess() {
    setTimeout(() => {
      setDays(days + 1)
    }, 5000)
  }

  liveProcess()

  const sellGoods = (goodId, qty) => {
    const storagesNew = storages;
    let moneyNew = money
    
    const index = storagesNew.findIndex((storage) => {
      return storage.cityId === currentCity
    })
    

    if(index > -1) {
      const goodIndex = storagesNew[index].storage.findIndex((good) => {
        return good.id === goodId
      })

      if(goodIndex > -1) {
        storagesNew[index]. storage[goodIndex].productList -= qty
        moneyNew += qty * 10
        setMoney(moneyNew)
      }
    }

    setStorages(storagesNew)
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
            selectedGood={selectedGood}
            onSelectedGood={(goodId) => {
              setSelectedGood(goodId)
            }}
            onSell={(id, qty) => {
              sellGoods(id, qty)
            }}
            />
          </div>

          <div className="transportation">
            <Transportation/>
          </div>

          <div className="stats">
            <Stats
              days={days}
              money={money}
            />
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
