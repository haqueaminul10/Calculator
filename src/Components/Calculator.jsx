import React, { useState } from "react";

import "./calculator.scss";

function Calculator() {
  const [input, setInput] = useState("");

  // for all clear
  const handleClear = () => {
    setInput("");
  };

  //for handle input

  const handleInput = (number) => {
    //console.log(typeof number);

    //for not two times decimal
    if (number == "." && input.includes(".")) {
      return;
    }

    setInput((prevValue) => prevValue + number);
  };
  //for onedigit remove
  const handleRemove = (number) => {
    setInput(input.substring(0, input.length - 1));
  };
  // for submitted result
  const handleSubmit = () => {
    const inputFloat = parseFloat(input);
    //console.log(inputFloat);
    setInput(eval(input));
  };
  // for root
  const handleRoot = () => {
    setInput(Math.sqrt(input));
  };
  //for parcentage
  const handleParcentage = () => {
    setInput();
  };

  return (
    <>
      <h1>Calculator App</h1>

      <div className="calculator">
        <section className="screen">
          <input type="text" value={input} />
        </section>

        <section className="buttonSet">
          <div onClick={() => handleClear("")} className="button">
            AC
          </div>
          <div className="button" onClick={handleParcentage}>
            %
          </div>
          <div className="button" onClick={handleRoot}>
            √
          </div>
          <div className="button" onClick={handleRemove}>
            ←
          </div>
          <div onClick={() => handleInput("7")} className="button">
            7
          </div>
          <div onClick={() => handleInput("8")} className="button">
            8
          </div>
          <div onClick={() => handleInput("9")} value="9" className="button">
            9
          </div>
          <div onClick={() => handleInput("/")} className="button">
            /
          </div>
          <div onClick={() => handleInput("4")} className="button">
            4
          </div>
          <div onClick={() => handleInput("5")} className="button">
            5
          </div>
          <div onClick={() => handleInput("6")} className="button">
            6
          </div>
          <div onClick={() => handleInput("*")} className="button">
            *
          </div>
          <div onClick={() => handleInput("1")} className="button">
            1
          </div>
          <div onClick={() => handleInput("2")} className="button">
            2
          </div>
          <div onClick={() => handleInput("3")} className="button">
            3
          </div>
          <div onClick={() => handleInput("-")} className="button">
            -
          </div>
          <div onClick={() => handleClear("")} className="button">
            C
          </div>
          <div onClick={() => handleInput("0")} className="button">
            0
          </div>
          <div onClick={() => handleInput(".")} className="button">
            .
          </div>
          <div onClick={() => handleInput("+")} className="button">
            +
          </div>
          <div onClick={handleSubmit} className="button_result">
            =
          </div>
        </section>
      </div>
    </>
  );
}

export default Calculator;
