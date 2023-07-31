import React from "react";

const ErrorNot = ({ message }) => {
  if (message === '') {
    return null;
  }

  return (
    <div className="error">
      {message}
    </div>
  );
};

export default ErrorNot;