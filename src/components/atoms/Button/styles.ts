const buttonVariantsStyle = {
  contrast: {
    buttonStyle: 'bg-contrast',
    textStyle: 'text-white',
  },
  modal: {
    buttonStyle: 'bg-black',
    textStyle: 'text-white',
  },
  menu: {
    buttonStyle: 'bg-transparent',
    textStyle: 'text-contrast hover:text-opacity-95',
  },
  'menu-active': {
    buttonStyle: 'bg-white',
    textStyle: 'text-black font',
  },
  'opt-1': {
    buttonStyle: 'bg-transparent border-2',
    textStyle: 'text-black',
  },
};

export type ButtonVariantOptions = keyof typeof buttonVariantsStyle;

export default buttonVariantsStyle;
