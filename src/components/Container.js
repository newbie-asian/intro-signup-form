import React from 'react';
import Block from './Block';
import IntroForm from './IntroForm';

const Container = () => {
  return (
    <div className="flex flex-col items-center h-screen lg:flex-row font-pop-regular bg-mobileBg bg-red lg:px-24">
      <Block />
      <IntroForm />
    </div>
  );
};

export default Container;
