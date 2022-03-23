import React from 'react';
import Header from './Header';
import Buttons from './Buttons';
import { useState } from 'react';

const IntroForm = () => {
  const [isFormSubmitted, setForm] = useState(false);

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (!isFormSubmitted) {
      setForm(false);
    }
  };

  return (
    <div className="px-6 text-white drop-shadow-xl">
      <Header />

      <div className="p-6 my-8 bg-white rounded-md">
        <form className="width-100%" onSubmit={onSubmitHandler}>
          <input type="text" className="introInput" placeholder="First Name" />
          <input type="text" className="introInput" placeholder="Last Name" />
          <input type="text" className="introInput" placeholder="Email Address" />
          <input type="text" className="introInput" placeholder="Password" />

          <Buttons />

          <p className="px-4 mt-4 text-xs text-center font-pop-medium text-grayish-blue">
            By clicking the button, you are agreeing to our{' '}
            <a href="/" className="font-pop-bold text-red">
              Terms and Services
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default IntroForm;
