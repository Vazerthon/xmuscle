import { styled, media } from '../../../styling';

const TabletOrLess = styled.div`
  display: none;

  ${media('<=tablet')} {
    display: block;
  }
`;

export default TabletOrLess;
