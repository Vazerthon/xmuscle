import { linearGradient } from 'polished';

const spacingUnit = 0.25;

const primary = '#212e4e';
const secondary = '#6c372c';
const highlight = '#54d3e9';
const shadow = '#1f181d';

export default {
  colour: {
    primary,
    secondary,
    highlight,
    shadow,
    neutral: {
      dark: '#111316',
    },
    gradient: {
      primary: linearGradient({
        colorStops: [primary, shadow],
        toDirection: 'to bottom right',
        fallback: primary,
      }),
    },
  },
  spacing: {
    unit: spacingUnit,
    units: multiple => `${multiple * spacingUnit}rem`,
  },
  typography: {
    fontFamily: 'sans-serif',
  },
};
