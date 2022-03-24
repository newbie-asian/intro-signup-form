import React from 'react';

const Buttons = (props) => {
  const submitHandler = props.onSubmit;
  return (
    <button
      onSubmit={(e) => {
        submitHandler(e);
      }}
      className="w-full py-4 text-xs2 tracking-wider uppercase rounded-md hover:bg-opacity-80 drop-shadow-lg bg-green font-pop-semibold"
    >
      Claim your free trial
    </button>
  );
};

export default Buttons;
