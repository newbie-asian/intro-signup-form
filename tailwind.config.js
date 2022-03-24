module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      white: '#fff',
      red: 'hsl(0, 100%, 74%)',
      green: 'hsl(154, 59%, 51%)',
      blue: 'hsl(248, 32%, 49%)',
      'dark-blue': 'hsl(249, 10%, 26%)',
      'grayish-blue': 'hsl(246, 25%, 77%)',
    },

    fontFamily: {
      'pop-regular': 'Poppins Regular',
      'pop-medium': 'Poppins Medium',
      'pop-semibold': 'Poppins SemiBold',
      'pop-bold': 'Poppins Bold',
    },

    fontSize: {
      xs: ['11px', { lineHeight: '21px' }],
      xxs: ['14px', { lineHeight: '26px', letterSpacing: '.27px' }],
      xs2: ['15px', { lineHeight: '26px', letterSpacing: '.27px' }],
      sm: ['16px', { lineHeight: '26px' }],
      m: ['18px', { lineHeight: '26px' }],
      l: ['28px', { lineHeight: '36px', letterSpacing: '-.29px' }],
      xl: ['50px', { lineHeight: '55px', letterSpacing: '-.52px' }],
    },

    backgroundImage: {
      mobileBg: "url('./assets/images/bg-intro-mobile.png')",
      desktopBg: "url('./assets/images/bg-intro-desktop.png')",
    },
    extend: {},
  },
  plugins: [],
};
