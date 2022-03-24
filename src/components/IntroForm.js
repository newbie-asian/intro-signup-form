import React from 'react';
import Header from './Header';
import Buttons from './Buttons';
import error from '../assets/images/icon-error.svg';
import { useState } from 'react';

const IntroForm = () => {
  const [isFirstName, setFirstName] = useState('');
  const [isLastName, setLastName] = useState('');
  const [isEmail, setEmail] = useState('');
  const [isPassword, setPassword] = useState('');

  const [isError, setError] = useState({ fName: false, lName: false, email: false, password: false });

  const onSubmitHandler = (e) => {
    e.preventDefault();

    // error for first name
    if (isFirstName === '') {
      setError((previousState) => {
        return { ...previousState, fName: true };
      });
    } else {
      setError((previousState) => {
        return { ...previousState, fName: false };
      });
    }

    // error for last name
    if (isLastName === '') {
      setError((previousState) => {
        return { ...previousState, lName: true };
      });
    } else {
      setError((previousState) => {
        return { ...previousState, lName: false };
      });
    }

    // error for last name
    if (isEmail === '') {
      setError((previousState) => {
        return { ...previousState, email: true };
      });
    } else if (isEmail.includes('@') && isEmail.includes('.com')) {
      console.log('works');
      setError((previousState) => {
        return { ...previousState, email: false };
      });
    } else {
      setError((previousState) => {
        return { ...previousState, email: true };
      });
    }

    console.log(typeof isEmail);

    // error for password
    if (isPassword === '') {
      setError((previousState) => {
        return { ...previousState, password: true };
      });
    } else {
      setError((previousState) => {
        return { ...previousState, password: false };
      });
    }
  };

  return (
    <div className="px-6 mb-20 xl:mb-0 text-white drop-shadow-xl lg:basis-3/6">
      <Header />

      <div className="p-6 mt-8 bg-white rounded-md text-right">
        <form className="width-100%" onSubmit={onSubmitHandler}>
          <div className="mb-5 relative ">
            <input
              type="text"
              className="introInput"
              placeholder="First Name"
              onInput={(e) => {
                setFirstName(e.target.value);
              }}
            />
            <i className={`absolute right-6 top-[.9rem] ${isError.fName ? 'inline-block' : 'hidden'}`}>
              <img src={error} alt="" />
            </i>
            <span className={`error ${isError.fName ? 'inline-block' : 'hidden'}`}>First Name cannot be empty</span>
          </div>

          <div className="mb-5 relative">
            <input
              type="text"
              className="introInput"
              placeholder="Last Name"
              onInput={(e) => {
                setLastName(e.target.value);
              }}
            />
            <i className={`absolute right-6 top-[.9rem] ${isError.lName ? 'inline-block' : 'hidden'}`}>
              <img src={error} alt="" />
            </i>
            <span className={`error ${isError.lName ? 'inline-block' : 'hidden'}`}>Last Name cannot be empty</span>
          </div>

          <div className="mb-5 relative">
            <input type="email" className="introInput" placeholder="Email Address" onInput={(e) => setEmail(e.target.value)} />
            <i className={`absolute right-6 top-[.9rem] ${isError.email ? 'inline-block' : 'hidden'}`}>
              <img src={error} alt="" />
            </i>
            <span className={`error ${isError.email ? 'inline-block' : 'hidden'}`}>Looks like this is not an email</span>
          </div>

          <div className="mb-5 relative">
            <input type="password" className="introInput" placeholder="Password" onInput={(e) => setPassword(e.target.value)} />
            <i className={`absolute right-6 top-[.9rem] ${isError.password ? 'inline-block' : 'hidden'}`}>
              <img src={error} alt="" />
            </i>
            <span className={`error ${isError.password ? 'inline-block' : 'hidden'}`}>Password cannot be empty</span>
          </div>

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
