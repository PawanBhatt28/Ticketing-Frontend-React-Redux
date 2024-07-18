import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Tickets from "../components/Tickets";
import { setTickets } from "../redux/feature/slice/ticketSlice";
import Sidebar from "./Sidebar";
import SearchBar from "./SearchBar";

function TicketPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchJsonData = async () => {
      const response = await fetch("/tickets.json");
      const jsonData = await response.json();

      dispatch(setTickets(jsonData));
    };
    fetchJsonData();
  }, [dispatch]);

  return (
    <div className="flex flex-col h-screen">
      <SearchBar />
      <div className="flex flex-1">
        <Sidebar className="w-1/4" />
        <div className="flex-1 p-4">
          <Tickets />
        </div>
      </div>
    </div>
  );
}

export default TicketPage;
