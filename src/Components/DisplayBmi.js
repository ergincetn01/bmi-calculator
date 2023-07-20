import "../Styles/DisplayBmi.css";

function DisplayBmi({ prompt, bmi, isResultShown, reset, handleClick }) {
  return (
    <div>
      {isResultShown ? (
        <div className="bmi-result">
          <p>YOUR BMI: {bmi}</p>
          <p>{prompt}</p>
          <button type="reset" className="rst" onClick={reset}>
            Reset All
          </button>
        </div>
      ) : (
        <div className="resNotShown">
          <button className="btn-calc" onClick={handleClick}>
            Calculate BMI
          </button>
        </div>
      )}
    </div>
  );
}

export default DisplayBmi;
