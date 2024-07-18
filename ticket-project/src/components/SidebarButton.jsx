import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTickets } from "../redux/feature/slice/ticketSlice";

function SidebarButton({ data, filter }) {
  const dispatch = useDispatch();
  const filterHandler = (filter) => {
    dispatch(fetchTickets(filter));
  };

  return (
    <div
      className="w-full py-2 px-4 bg-white rounded-lg shadow hover:bg-blue-100 cursor-pointer"
      onClick={() => filterHandler(filter)}
    >
      <span className="text-gray-700">{data}</span>
    </div>
  );
}

export default SidebarButton;
