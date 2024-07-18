import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Tickets from "../components/Tickets";
import { setTickets } from "../redux/feature/slice/ticketSlice";
import Sidebar from "./Sidebar";

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
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Tickets />
      </div>
    </div>
  );
}

export default TicketPage;
