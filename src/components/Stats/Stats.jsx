import React from "react";
import "./Stats.scss";
function Stats({ money, days}) {
  return (
    <div>
      <h2 className="title">Статистика</h2>

      <div className="panel stats-panel">
        <div className="money">{money}</div>
        <div className="days">Количество дней: {days}</div>
        
      </div>
    </div>
  );
}

export default Stats;
