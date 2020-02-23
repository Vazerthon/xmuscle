import { styled } from '../../../styling';

const SiteContainer = styled.div`
  ${({ theme }) => theme.colour.gradient.primary};
  height: 100vh;
`;

export default SiteContainer;
