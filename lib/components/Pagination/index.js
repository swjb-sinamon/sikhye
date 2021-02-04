import React, { useEffect, useState } from 'react';
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
const PAGE_PER_GROUP = 5; // 한 그룹당 표시되는 페이지 개수
const Pagination = ({ onPageChange, dataCount, pageLimit }) => {
    const [numberComponents, setNumberComponents] = useState([]);
    const [offset, setOffset] = useState(1);
    const pageCount = Math.ceil(dataCount / pageLimit);
    const maxPageGroupCount = Math.ceil(pageCount / PAGE_PER_GROUP);
    const [pageGroup, setPageGroup] = useState(1);
    const onPrevClick = () => {
        if (pageGroup === 1) {
            setPageGroup(1);
            return;
        }
        setPageGroup((current) => {
            const prevOffset = (current - 1) * PAGE_PER_GROUP;
            setOffset(prevOffset);
            onPageChange(prevOffset);
            return current - 1;
        });
    };
    const onNextClick = () => {
        if (pageGroup === maxPageGroupCount) {
            return;
        }
        setPageGroup((current) => {
            const nextOffset = Math.min(pageCount, (current + 1) * PAGE_PER_GROUP);
            setOffset(nextOffset);
            onPageChange(nextOffset);
            return current + 1;
        });
    };
    useEffect(() => {
        setNumberComponents([]);
        for (let page = (pageGroup - 1) * PAGE_PER_GROUP; page < Math.min(pageCount, pageGroup * PAGE_PER_GROUP); page += 1) {
            setNumberComponents((current) => [
                ...current,
                React.createElement(PaginationItem, { key: page + 1, onClick: () => {
                        setOffset(page + 1);
                        onPageChange(page + 1);
                    }, active: page + 1 === offset }, page + 1)
            ]);
        }
    }, [offset, pageGroup, pageCount, maxPageGroupCount]);
    return (React.createElement(PaginationWrapper, null,
        React.createElement(PaginationItem, { onClick: onPrevClick },
            React.createElement(FontAwesomeIcon, { icon: faAngleLeft }),
            " \uC774\uC804"),
        numberComponents.map((i) => i),
        React.createElement(PaginationItem, { onClick: onNextClick },
            "\uB2E4\uC74C ",
            React.createElement(FontAwesomeIcon, { icon: faAngleRight }))));
};
export default Pagination;
