import styled from 'styled-components';
import SCREEN_SIZE from '../../styles/screen-size';

export const MainSideBarItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 250px;
  height: 46px;

  border-radius: 8px;

  cursor: pointer;
  transition: all 0.3s ease-out;

  &:hover {
    color: white;
    background-color: var(--color-button);
  }

  margin-bottom: 14px;

  @media screen and (max-width: ${SCREEN_SIZE.SCREEN_TABLET}) {
    width: 100%;
    border-radius: 0;
  }
`;

export const SideBarIconWrapper = styled.div`
  min-width: 28px;
  max-height: 22px;

  margin-right: 20px;
  margin-left: 24px;
`;
