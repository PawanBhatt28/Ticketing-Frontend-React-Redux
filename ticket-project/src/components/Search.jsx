import { useDispatch } from "react-redux";
import { searchTicket } from "../redux/feature/slice/ticketSlice";

function Search() {
  const dispatch = useDispatch();
  const handleChange = (searchObject) => {
    dispatch(searchTicket(searchObject.target.value));
  };

  return (
    <div className="relative flex items-center w-full max-w-xs">
      <input
        type="text"
        placeholder="Search..."
        onChange={handleChange}
        className="w-full px-4 py-2 pr-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <div className="absolute right-0 top-0 mt-2 mr-2">
        <svg
          className="w-6 h-6 text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    </div>
  );
}

export default Search;
