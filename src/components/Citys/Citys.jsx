import React from 'react'
import './Citys.scss'


function Citys({currentCity, onChange}) {
    const cities = [{
        id: 1,
        title: 'Рифтен'
    },
    {
        id: 2,
        title: 'Вайтран'
    },
    {
        id: 3,
        title: 'Солитьюд'
    }
]


    return (
        <div className="citys-list">
            {cities.map(items => {
                return (
                    <li key={items.id} className={"city " + (currentCity === items.id ? 'active' : '')}
                     onClick={() => {
                        onChange(items.id)
                     }}
                     >
                        {items.title}
                    </li>
                )
            })}
        </div>
    )
}

export default Citys
