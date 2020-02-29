import { styled } from '../../../styling';

const sizes = {
  sm: 10,
  md: 20,
  lg: 30,
};

const Button = styled.button`
  border: none;
  background: none;
  outline: none;
  color: ${({ theme }) => theme.colour.highlight};
  border-radius: ${({ theme }) => theme.spacing.units(4)};
  background: ${({ theme }) => theme.colour.primary};
  min-width: ${({ theme }) => theme.spacing.units(40)};
  min-height: ${({ theme }) => theme.spacing.units(20)};
  margin: ${({ theme }) => theme.spacing.units(4)};

  ${({ theme }) => theme.colour.softUI.boxShadow};

  :active {
    ${({ theme }) => theme.colour.softUI.activeBoxShadow};
  }

  :focus, :hover {
    ${({ theme }) => theme.colour.gradient.primary};
  }

  width: ${({ theme, size }) => theme.spacing.units(sizes[size] || sizes.md)};
`;

export default Button;
