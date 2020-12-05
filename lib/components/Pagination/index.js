import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
const PaginationWrapper = styled.ul `
  display: flex;
  flex-direction: row;

  justify-content: center;
  flex-wrap: wrap;
`;
const PaginationItem = styled.li `
  list-style-type: none;

  border-radius: 3px;
  border: 1px solid var(--color-gray);

  background-color: ${(props) => (props.active ? 'var(--color-button)' : 'white')};
  color: ${(props) => (props.active ? 'white' : 'black')};

  font-size: 14px;

  padding: 0.35rem 0.75rem;

  cursor: pointer;

  &:hover {
    background-color: var(--color-button-hover);
    color: white;
  }

  &:first-child {
    margin-right: 5px;
  }

  &:last-child {
    margin-left: 5px;
  }
`;
const Pagination = ({ onPageChange, pageNumber }) => {
    const [offset, setOffset] = useState(1);
    const onPrevClick = () => {
        if (offset === 1) {
            onPageChange(1);
            return;
        }
        setOffset((current) => {
            onPageChange(current - 1);
            return current - 1;
        });
    };
    const onNextClick = () => {
        if (offset === pageNumber.length) {
            onPageChange(pageNumber.length);
            return;
        }
        setOffset((current) => {
            onPageChange(current + 1);
            return current + 1;
        });
    };
    return (React.createElement(PaginationWrapper, null,
        React.createElement(PaginationItem, { onClick: onPrevClick },
            React.createElement(FontAwesomeIcon, { icon: faAngleLeft }),
            " \uC774\uC804"),
        pageNumber.map((pageNum) => (React.createElement(PaginationItem, { key: pageNum, onClick: () => {
                setOffset(pageNum);
                onPageChange(pageNum);
            }, active: pageNum === offset }, pageNum))),
        React.createElement(PaginationItem, { onClick: onNextClick },
            "\uB2E4\uC74C ",
            React.createElement(FontAwesomeIcon, { icon: faAngleRight }))));
};
export default Pagination;
