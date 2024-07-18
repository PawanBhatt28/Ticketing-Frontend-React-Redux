import Ticket from "../components/Ticket";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

function Tickets() {
  const storedTickets = useSelector((state) => state.filteredTickets);

  return (
    <div className="m-0 p-4 bg-blue-50 space-y-4">
      {storedTickets.map((ticket, index) => (
        <Ticket key={index} ticketData={ticket} />
      ))}
    </div>
  );
}

export default Tickets;
