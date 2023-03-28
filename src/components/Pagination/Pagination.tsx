import classNames from "classnames";
import React from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { Pagination as PaginationHeadless } from "react-headless-pagination";

interface PaginationProps {
  page: number;
  setPage: (page: number) => void;
  isMobile: boolean;
  totalPage: number;
  className?: string;
}

export const Pagination = ({
  page,
  totalPage,
  setPage,
  isMobile,
  className,
}: PaginationProps) => {
  const handlePageChange = (page: number) => {
    setPage(page);
  };
  if (isMobile) {
    return (
      <div className="flex items-center w-full">
        <FiArrowLeft
          size={20}
          className={classNames("mr-3 text-gray-500", {
            "cursor-pointer": page !== 0,
            "opacity-50": page === 1,
          })}
          onClick={() => {
            page > 1 ? setPage(page - 1) : setPage(1);
          }}
        />
        <div className="flex justify-center flex-grow text-sm text-gray-700 select-none">
          Page {page} of {totalPage}
        </div>
        <FiArrowRight
          size={20}
          className={classNames("mr-3 text-gray-500", {
            "cursor-pointer": page !== totalPage,
            "opacity-50": page === totalPage,
          })}
          onClick={() => {
            page < totalPage ? setPage(page + 1) : setPage(page);
          }}
        />
      </div>
    );
  }
  return (
    <PaginationHeadless
      currentPage={page}
      totalPages={totalPage}
      setCurrentPage={handlePageChange}
      className={classNames(
        "flex items-center w-full h-10 text-sm select-none",
        className
      )}
      truncableText="..."
      truncableClassName="w-10 px-0.5 text-center "
      edgePageCount={1}
      middlePagesSiblingCount={1}
    >
      <PaginationHeadless.PrevButton
        className={classNames(
          "h-10 font-medium flex items-center mr-2 text-gray-500  hover:text-gray-600 focus:outline-none",
          {
            "cursor-pointer": page !== 0,
            "opacity-50": page === 0,
          }
        )}
      >
        <FiArrowLeft size={20} className={classNames("mr-3")} />
        Previous
      </PaginationHeadless.PrevButton>

      <div className="flex items-center justify-center flex-grow list-none">
        <PaginationHeadless.PageButton
          activeClassName="bg-primary-50 text-primary-600 "
          inactiveClassName="text-gray-500"
          className={
            "flex items-center justify-center h-10 w-10 rounded-full cursor-pointer font-medium"
          }
        />
      </div>

      <PaginationHeadless.NextButton
        className={classNames(
          "h-10 font-medium flex items-center mr-2 text-gray-500  hover:text-gray-600  focus:outline-none",
          {
            "cursor-pointer": page !== totalPage - 1,
            "opacity-50": page === totalPage - 1,
          }
        )}
      >
        Next
        <FiArrowRight size={20} className={classNames("ml-3")} />
      </PaginationHeadless.NextButton>
    </PaginationHeadless>
  );
};
