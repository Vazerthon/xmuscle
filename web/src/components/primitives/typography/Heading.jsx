import { styled } from '../../../styling';

const Heading = styled.h1`
  color: ${({ theme }) => theme.colour.neutral.light};
  margin: 0;
  padding: ${({ theme }) => theme.spacing.units(4)} 0;
`;

export default Heading;
