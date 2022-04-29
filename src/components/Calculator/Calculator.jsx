import React, { useRef, useState } from "react";
import "./_calculator.scss";
import Button from "@mui/material/Button";
const Calculator = () => {
  const createDigits = () => {
    const digits = [];
    for (let i = 1; i < 10; i++) {
      digits.push(
        <Button
        className="first btn"
          onClick={() => {
            updateCalc(i.toString());
          }}
          key={i}
        >
          {i}
        </Button>
      );
    }
    return digits;
  };

  const [calc, setCalc] = useState("");

  const ops = ["/", "*", "+", "-", "."];

  const updateCalc = (value) => {
    if (
      (ops.includes(value) && calc === "") ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }

    setCalc(calc + value);
  };

  const calculate = () => {
    setCalc(eval(calc).toString());
  };

  const deleteLast = () => {
    if (calc === "") return;
    const value = calc.slice(0, -1);

    setCalc(value);
  };

  return (
    <div className="calculator">
      <div className="display">
        {calc || "0"}
      </div>

      <div className="operators">
        <Button
          onClick={() => {
            updateCalc("/");
          }}
          className="btn"
        >
          
          <span>/</span>
        </Button>

        <Button
          onClick={() => {
            updateCalc("*");
          }}
          className="btn"
        >
         
          <span>*</span>
        </Button>

        <Button
          onClick={() => {
            updateCalc("+");
          }}
          className="btn"
        >
          
          <span>+</span>
        </Button>

        <Button
          onClick={() => {
            updateCalc("-");
          }}
          className="btn"
        >
          
          <span>-</span>
        </Button>

        <Button className="btn" onClick={deleteLast}>
          
          <span>DEL</span>
        </Button>
      </div>

      <div className="digits">
        {createDigits()}
        <Button
          onClick={() => {
            updateCalc("0");
          }}
        >
          0
        </Button>
        <Button
          onClick={() => {
            updateCalc(".");
          }}
        >
          .
        </Button>
        <Button onClick={calculate}>=</Button>
      </div>
    </div>
  );
};

export default Calculator;
