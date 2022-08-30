import React, { forwardRef, useImperativeHandle, useState } from "react";

const Output = forwardRef((props, ref) => {
  const { prinAmt, rate, num } = props;
  const [emi, setEmi] = useState("");
  const eMi = () => {
    let emi =
      (prinAmt * rate * Math.pow(1 + rate, num)) /
      (Math.pow(1 + rate, num) - 1);
    setEmi(emi.toFixed(1));
  };
  useImperativeHandle(ref, () => ({
    eMi,
  }));

  return (
    <>
      <h4>Your EMI is {emi}</h4>
    </>
  );
});

export default Output;
