import styled from 'styled-components';

const ButtonGroup = styled.div`
  & button {
    margin-right: 1rem;
  }

  & button:last-child {
    margin-right: 0;
  }
`;

export default ButtonGroup;
