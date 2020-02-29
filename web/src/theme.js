import { linearGradient, lighten, darken } from 'polished';

const spacingUnit = 0.25;

const primary = '#212e4e';
const highlight = '#54d3e9';
const shadow = '#1f181d';

const spacing = {
  unit: spacingUnit,
  units: multiple => `${multiple * spacingUnit}rem`,
};

export default {
  colour: {
    primary,
    highlight,
    shadow,
    neutral: {
      dark: '#111316',
      light: '#ede9ce',
    },
    alert: {
      confirm: '#63c843',
      error: '#c84345',
    },
    gradient: {
      primary: linearGradient({
        colorStops: [primary, shadow],
        toDirection: 'to bottom right',
        fallback: primary,
      }),
    },
    softUI: {
      boxShadow: `box-shadow: ${spacing.units(2)} ${spacing.units(2)} ${spacing.units(4)} ${darken(
        0.1,
        primary,
      )}, ${spacing.units(-2)} ${spacing.units(-2)} ${spacing.units(4)} ${lighten(0.05, primary)}`,
      activeBoxShadow: `box-shadow: inset ${spacing.units(2)} ${spacing.units(2)} ${spacing.units(4)} ${darken(
        0.1,
        primary,
      )}, inset ${spacing.units(-2)} ${spacing.units(-2)} ${spacing.units(4)} ${lighten(0.05, primary)}`,
    },
  },
  spacing,
  typography: {
    fontFamily: 'sans-serif',
  },
};
