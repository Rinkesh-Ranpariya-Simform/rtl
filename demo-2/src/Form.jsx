import React, { useState } from "react";

const Form = () => {
  const [selectedOption, setSelectedOption] = useState("");

  return (
    <div>
      <button onClick={() => setSelectedOption("Mobile")}>Mobile</button>

      <button onClick={() => setSelectedOption("Email")}>Email</button>

      {selectedOption === "Email" && (
        <div>
          <div>Enter your Email</div>
          <input type="email" />
        </div>
      )}
      {selectedOption === "Mobile" && (
        <div>
          <div>Enter your Mobile number</div>
          <input type="number" />
        </div>
      )}
    </div>
  );
};

export default Form;
