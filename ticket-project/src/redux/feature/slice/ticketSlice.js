import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  allTickets: [],
  filteredTickets: [],
};

export const ticketsSlice = createSlice({
  name: "ticketSlice",
  initialState,
  reducers: {
    fetchTickets: (state, action) => {
      const filter = action.payload;
      console.log("filtering tickets based on : ", filter);
      switch (filter) {
        case "ALL":
          state.filteredTickets = state.allTickets;
          break;
        case "ASSIGNED":
          state.filteredTickets = state.allTickets.filter(
            (ticket) => ticket.assigned === 0
          );

          break;
        case "PENDING":
          state.filteredTickets = state.allTickets.filter(
            (ticket) => ticket.progress === "pending"
          );
          break;
        case "COMPLETE":
          state.filteredTickets = state.allTickets.filter(
            (ticket) => ticket.progress === "completed"
          );
          break;
        case "JUNK":
          state.filteredTickets = state.allTickets.filter(
            (ticket) => ticket.junk === 1
          );
          break;
        case "ASSIGNED_TO":
          state.filteredTickets = state.allTickets.filter(
            (ticket) => ticket.assignedTo === "pawan"
          );
          break;
        case "CREATED_BY":
          state.filteredTickets = state.allTickets.filter(
            (ticket) => ticket.createdBy === "pawan"
          );
          break;
        case "COMPLETED_BY":
          state.filteredTickets = state.allTickets.filter(
            (ticket) => ticket.completedBy === "pawan"
          );
          break;
        default:
          state.filteredTickets = state.allTickets;
      }
      console.log("ticket got set, thumbs up.");
    },
    createTicket: (state, action) => {
      state.allTickets.push(action.payload);
      state.filteredTickets.push(action.payload);
    },
    deleteTicket: (state, action) => {
      const allLeftTickets = state.allTickets.filter(
        (ticket) => ticket.id !== action.payload
      );
      const leftFilteredTickets = state.filteredTickets.filter(
        (ticket) => ticket.id != action.payload
      );
      state.allTickets = allLeftTickets;
      state.filteredTickets = leftFilteredTickets;
      console.log("State updated");
    },
    setTickets: (state, action) => {
      state.allTickets = action.payload;
      state.filteredTickets = action.payload;
    },
  },
});

export const { fetchTickets, setTickets, createTicket, deleteTicket } =
  ticketsSlice.actions;

export default ticketsSlice.reducer;
