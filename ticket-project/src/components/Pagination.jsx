import React, { useState } from "react";
import PaginationNav from "./PaginationNav";

const Pagination = ({ totalTickets = 994 }) => {
  const [ticketsPerPage, setTicketsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(totalTickets / ticketsPerPage);
  const startTicket = (currentPage - 1) * ticketsPerPage + 1;
  const endTicket = Math.min(startTicket + ticketsPerPage - 1, totalTickets);

  const handleTicketsPerPageChange = (event) => {
    setTicketsPerPage(Number(event.target.value));
    setCurrentPage(1); // Reset to the first page whenever tickets per page change
  };

  return (
    <div className="flex flex-col items-center space-y-4 text-white">
      <div className="flex items-center space-x-4">
        <div>
          <label htmlFor="ticketsPerPage" className="mr-2">
            Show
          </label>
          <select
            id="ticketsPerPage"
            value={ticketsPerPage}
            onChange={handleTicketsPerPageChange}
            className="px-2 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
        </div>
        <div>
          <span>
            {startTicket}-{endTicket} of {totalTickets}
          </span>
        </div>
      </div>
      <PaginationNav
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default Pagination;
