import { styled, media } from '../../../styling';

const MoreThanTablet = styled.div`
  display: none;

  ${media('>tablet')} {
    display: block;
  }
`;

export default MoreThanTablet;
