import "../Styles/GetHM.css";

function GetHM({ weight, height, disabled, updateH, updateW }) {
  return (
    <div className="main">
      <div className="setHeight">
        <h2>Height {"(cm)"} </h2>
        <p>{height} cm</p>
        <input
          className="slider"
          type="range"
          min={0}
          max={220}
          value={height}
          disabled={disabled}
          onChange={updateH}
        />
      </div>
      <div className="setWeight">
        <h2>Weight {"(Kg)"}</h2>
        <p>{weight} kg</p>
        <input
          className="slider"
          type="range"
          disabled={disabled}
          min={0}
          max={200}
          value={weight}
          onChange={updateW}
        />
      </div>
    </div>
  );
}

export default GetHM;
