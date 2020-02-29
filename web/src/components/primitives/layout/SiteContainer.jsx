import { styled } from '../../../styling';

const SiteContainer = styled.div`
  ${({ theme }) => theme.colour.gradient.primary};
  padding: ${({ theme }) => theme.spacing.units(4)};
  height: calc(100vh - ${({ theme }) => theme.spacing.units(8)});
  overflow-y: auto;
`;

export default SiteContainer;
