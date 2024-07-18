import { useDispatch, useSelector } from "react-redux";
import { deleteTicket } from "../redux/feature/slice/ticketSlice";

function Ticket({ ticketData }) {
  const dispatch = useDispatch();

  const deleteTicketHandler = (id) => {
    console.log("starting to delete ticket.");
    dispatch(deleteTicket(id));
    console.log("ticket deleted");
  };

  return (
    <div className="flex items-center justify-center m-122 space-x-1 p-1 h-10 border rounded-md shadow-sm bg-white">
      <div className="border p-2 flex-1 font-bold truncate text-center">
        {ticketData.id}
      </div>
      <div className="border p-2 flex-1 truncate text-center">
        {ticketData.channel}
      </div>
      <div className="p-2 flex-1 truncate text-center">
        {ticketData.description}
      </div>
      <div className="p-2 flex-1 truncate text-center">{ticketData.status}</div>
      <div className="p-2 flex-1 truncate text-center">
        {ticketData.escalated}
      </div>
      <div className="p-2 flex-1 truncate text-center">
        {ticketData.archived}
      </div>
      <div className="p-2 flex-1 truncate text-center">
        {ticketData.priority}
      </div>
      <div className="p-2 flex-1 truncate text-center">
        {ticketData.assigned_date}
      </div>
      <button onClick={() => deleteTicketHandler(ticketData.id)}>Delete</button>
    </div>
  );
}

export default Ticket;
