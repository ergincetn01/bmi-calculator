import DisplayBmi from "./Components/DisplayBmi";
import GetHM from "./Components/GetHM";
import "./Styles/App.css";
import { useEffect, useState } from "react";

function App() {
  const [status, setStatus] = useState();
  const [prompt, setPrompt] = useState();
  const [height, setHeight] = useState(150);
  const [weight, setWeight] = useState(75);
  const [isResult, setIsResult] = useState(false);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    updateStatus();
  });
  let bmi;
  bmi = weight / (height / 100) ** 2;

  const updateStatus = () => {
    if (bmi <= 18.5) {
      setStatus(status_prompt[0].status);
      setPrompt(status_prompt[0].prompt);
    } else if (bmi > 18.5 && bmi <= 24.9) {
      setStatus(status_prompt[1].status);
      setPrompt(status_prompt[1].prompt);
    } else if (bmi > 24.9 && bmi <= 29.9) {
      setStatus(status_prompt[2].status);
      setPrompt(status_prompt[2].prompt);
    } else if (bmi > 30) {
      setStatus(status_prompt[3].status);
      setPrompt(status_prompt[3].prompt);
    }
  };
  const status_prompt = [
    {
      status: "underweight",
      prompt: "You are underweight, you should be careful!",
    },
    { status: "healthy", prompt: "You have a healhty body, good work!" },
    {
      status: "overweight",
      prompt: "You are overweight. We advise you to go on a balanced diet!",
    },
    {
      status: "obese",
      prompt:
        "You are unfortunately obese. Consult a healthcare expert as soon as possible!",
    },
  ];

  const updateHeight = (e) => {
    setHeight(e.target.value);
  };

  const updateWeight = (e) => {
    setWeight(e.target.value);
  };

  const handleClick = () => {
    setIsResult(true);
    setDisabled(true);
  };
  const resetAll = () => {
    setHeight(150);
    setWeight(75);
    setIsResult(false);
    setDisabled(false);
  };
  return (
    <div className="main">
      <div className="title">BMI CALCULATOR</div>
      <div className="getHM">
        <GetHM
          weight={weight}
          updateH={updateHeight}
          updateW={updateWeight}
          height={height}
          disabled={disabled}
        />
      </div>

      <div className="displayBmi">
        <DisplayBmi
          bmi={bmi.toFixed(2)}
          handleClick={handleClick}
          prompt={prompt}
          status={status}
          isResultShown={isResult}
          reset={resetAll}
        />
      </div>
    </div>
  );
}

export default App;
