import { styled } from '../../../styling';

const sizes = {
  sm: 10,
  md: 20,
  lg: 30,
};

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: none;
  outline: none;
  color: ${({ theme }) => theme.colour.highlight};
  border-radius: ${({ theme }) => theme.spacing.units(4)};
  background: ${({ theme }) => theme.colour.primary};
  margin: ${({ theme }) => theme.spacing.units(4)};

  ${({ theme }) => theme.colour.softUI.boxShadow};
  
  min-height: ${({ theme, round }) => round || theme.spacing.units(20)};
  min-width: ${({ theme, size }) => theme.spacing.units(sizes[size] || sizes.md)};
  width: ${({ theme, size }) => theme.spacing.units(sizes[size] || sizes.md)};
  ${({ round }) => round && 'border-radius: 50%'};
  ${({ theme, size, round }) => round && `height: ${theme.spacing.units(sizes[size] || sizes.md)}`};

  :active {
    ${({ theme }) => theme.colour.softUI.activeBoxShadow};
  }

  :focus, :hover {
    ${({ theme }) => theme.colour.gradient.primary};
  }

`;

export default Button;
