import React from "react";

const PaginationNav = ({ totalPages, currentPage, setCurrentPage }) => {
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="flex items-center space-x-4 mt-4 text-white">
      <button
        onClick={handlePreviousPage}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:opacity-50"
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <span>{`Page ${currentPage} of ${totalPages}`}</span>
      <button
        onClick={handleNextPage}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:opacity-50"
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default PaginationNav;
