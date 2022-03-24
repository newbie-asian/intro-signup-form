import React from 'react';
import Block from './Block';
import IntroForm from './IntroForm';

const Container = () => {
  return (
    <div className="flex flex-col justify-center min-h-full lg:flex-row font-pop-regular bg-cover bg-mobileBg lg:bg-cover lg:items-center lg:bg-no-repeat lg:bg-desktopBg bg-red lg:px-24">
      <Block />
      <IntroForm />
    </div>
  );
};

export default Container;
