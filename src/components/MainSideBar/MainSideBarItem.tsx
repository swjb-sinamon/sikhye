import styled from 'styled-components';
import SCREEN_SIZE from '../../styles/screen-size';

export const MainSideBarItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;

  padding: 1.2rem 2rem;

  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 30px rgba(169, 169, 169, 0.4);
    background-image: linear-gradient(135deg, #fccf31 10%, #f55555 100%);
  }

  @media screen and (max-width: ${SCREEN_SIZE.SCREEN_TABLET}) {
    transition: none;
    &:hover {
      transform: none;
    }
  }
`;

export const SideBarIconWrapper = styled.div`
  min-width: 28px;
  height: auto;

  margin-right: 10px;
`;
