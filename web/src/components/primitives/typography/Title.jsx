import { styled } from '../../../styling';

const Title = styled.h2`
  color: ${({ theme }) => theme.colour.neutral.light};
  margin: 0;
  padding: ${({ theme }) => theme.spacing.units(2)} 0;
`;

export default Title;
