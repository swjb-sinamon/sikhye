import styled from 'styled-components';
import SCREEN_SIZE from '../../styles/screen-size';

export const MainSidebar = styled.div`
  min-height: 100vh;
  background-color: white;

  font-family: 'NanumSquareRound', sans-serif;
  font-weight: 700;

  display: flex;
  flex-direction: column;

  list-style: none;

  @media screen and (max-width: ${SCREEN_SIZE.SCREEN_TABLET}) {
    min-height: 4rem;
  }
`;

export const SideBarItemList = styled.ul<{ isOpen: boolean }>`
  display: flex;
  justify-content: center;

  @media screen and (max-width: ${SCREEN_SIZE.SCREEN_TABLET}) {
    display: ${(props) => (props.isOpen ? 'block' : 'none')};
  }
`;
