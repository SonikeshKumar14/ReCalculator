import React, { useState, useRef } from "react";
import Output from "./Output";

const Input = () => {
  const [state, setState] = useState({
    prinAmt: 0,
    rate: 0,
    num: 0,
  });
  const outputRef = useRef(null);
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    outputRef.current.eMi();
  };
  let reload = () => {
    window.location.reload();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="PrincipalAmount" className="form-label">
            Principal Amount
          </label>
          <input
            name="prinAmt"
            value={state.prinAmt}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div>
          <label htmlFor="RateofInterest" className="form-label">
            Monthly rate of Interest
          </label>
          <input
            name="rate"
            value={state.rate}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div>
          <label htmlFor="NumberofMonths" className="form-label">
            Number of Months
          </label>
          <input
            name="num"
            value={state.num}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <br />
        <div>
          <label
            htmlFor="EMICalculation"
            className="form-label"
            style={{ marginRight: "5px" }}
          >
            EMI Calculation
          </label>
          <button
            type="submit"
            className="btn btn-primary"
            style={{ marginRight: "5px" }}
          >
            Find
          </button>
          <button
            onClick={reload}
            className="btn btn-secondary"
            style={{ marginRight: "5px" }}
          >
            Reload
          </button>
        </div>
      </form>
      <br />
      <Output
        prinAmt={state.prinAmt}
        rate={state.rate}
        num={state.num}
        ref={outputRef}
      />
    </>
  );
}

export default Input;
