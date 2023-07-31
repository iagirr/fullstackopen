import React from "react";

const SuccessNot = ({ message }) => {
  if (message === '') {
    return null;
  }

  return (
    <div className="success">
      {message}
    </div>
  );
};

export default SuccessNot;