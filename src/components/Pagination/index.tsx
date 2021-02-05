import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const PaginationWrapper = styled.ul`
  display: flex;
  flex-direction: row;

  justify-content: center;
  flex-wrap: wrap;
`;

const PaginationItem = styled.li<{ active?: boolean }>`
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

interface PaginationProps {
  readonly onPageChange: (currentOffset: number) => void;
  readonly dataCount: number;
  readonly pageLimit: number;
}

const PAGE_PER_GROUP = 5; // 한 그룹당 표시되는 페이지 개수

const Pagination: React.FC<PaginationProps> = ({ onPageChange, dataCount, pageLimit }) => {
  const [numberComponents, setNumberComponents] = useState<JSX.Element[]>([]);

  const [offset, setOffset] = useState<number>(1);
  const pageCount = Math.ceil(dataCount / pageLimit);

  const maxPageGroupCount = Math.ceil(pageCount / PAGE_PER_GROUP);
  const [pageGroup, setPageGroup] = useState<number>(1);

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
      const nextOffset = (current + 1) * PAGE_PER_GROUP - (PAGE_PER_GROUP - 1);
      setOffset(nextOffset);
      onPageChange(nextOffset);
      return current + 1;
    });
  };

  useEffect(() => {
    setNumberComponents([]);

    for (
      let page = (pageGroup - 1) * PAGE_PER_GROUP;
      page < Math.min(pageCount, pageGroup * PAGE_PER_GROUP);
      page += 1
    ) {
      setNumberComponents((current) => [
        ...current,
        <PaginationItem
          key={page + 1}
          onClick={() => {
            setOffset(page + 1);
            onPageChange(page + 1);
          }}
          active={page + 1 === offset}
        >
          {page + 1}
        </PaginationItem>
      ]);
    }
  }, [offset, pageGroup, pageCount, maxPageGroupCount]);

  return (
    <PaginationWrapper>
      <PaginationItem onClick={onPrevClick}>
        <FontAwesomeIcon icon={faAngleLeft} /> 이전
      </PaginationItem>

      {numberComponents.map((i) => i)}

      <PaginationItem onClick={onNextClick}>
        다음 <FontAwesomeIcon icon={faAngleRight} />
      </PaginationItem>
    </PaginationWrapper>
  );
};

export default Pagination;
