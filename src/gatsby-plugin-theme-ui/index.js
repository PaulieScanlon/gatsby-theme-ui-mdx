import { tailwind, dark } from '@theme-ui/presets';

const theme = {
  ...tailwind,
  colors: {
    ...tailwind.colors,
    modes: {
      dark: {
        ...dark.colors
      }
    }
  },

  styles: {
    ...tailwind.styles,
    p: {
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
      fontSize: 1
    }
  }
};

export default theme;
