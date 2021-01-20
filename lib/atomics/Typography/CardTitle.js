import styled from 'styled-components';
import { SCREEN_SIZE } from '../../styles';
const CardTitle = styled.h2 `
  font-size: 26px;
  font-weight: 800;
  font-family: 'NanumSquareRound', sans-serif;

  margin-bottom: 12px;

  @media screen and (max-width: ${SCREEN_SIZE.SCREEN_MOBILE}) {
    font-size: 24px;
  }
`;
export default CardTitle;
