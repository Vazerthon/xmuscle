import emotionStyled from '@emotion/styled/macro';
import mediaQueries from 'css-in-js-media';
import { useTheme as useThemeHook } from 'emotion-theming';

export const styled = emotionStyled;
export const media = mediaQueries;
export const useTheme = useThemeHook;
