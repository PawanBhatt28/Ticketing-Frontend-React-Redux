import SidebarButton from "../components/SidebarButton";

function Sidebar({ onFilterChange }) {
  return (
    <nav className="m-0 w-48 h-full bg-gray-100 p-4 flex flex-col space-y-2">
      <SidebarButton data={"All Tickets"} filter={"ALL"} />
      <SidebarButton data={"Unassigned"} filter={"ASSIGNED"} />
      <SidebarButton data={"All pending"} filter={"PENDING"} />
      <SidebarButton data={"All junk"} filter={"JUNK"} />
      <SidebarButton data={"All complete"} filter={"COMPLETE"} />
      <SidebarButton data={"Assgined to me"} filter={"ASSIGNED_TO"} />
      <SidebarButton data={"Completed by me"} filter={"COMPLETED_BY"} />
      <SidebarButton data={"Created by me"} filter={"CREATED_BY"} />
    </nav>
  );
}

export default Sidebar;
