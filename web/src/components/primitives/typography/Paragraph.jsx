import { styled } from '../../../styling';

const Paragraph = styled.p`
  color: ${({ theme }) => theme.colour.neutral.light};
  margin: 0;
  padding: ${({ theme }) => theme.spacing.units(2)} 0;
`;

export default Paragraph;
