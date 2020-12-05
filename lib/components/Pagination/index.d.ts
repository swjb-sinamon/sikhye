import React from 'react';
interface PaginationProps {
    readonly onPageChange: (currentOffset: number) => void;
    readonly pageNumber: number[];
}
declare const Pagination: React.FC<PaginationProps>;
export default Pagination;
