import { useState } from "react";
import DataTable from "react-data-table-component";

function Table() {
  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Department",
      selector: (row) => row.Department,
      sortable: true,
    },
    {
      name: "Position",
      selector: (row) => row.Position,
      sortable: true,
    },
    {
      name: "Contact",
      selector: (row) => row.Contact,
      sortable: true,
    },
  ];

  const initialData = [
    {
      id: 1,
      name: "Beet",
      Department: "HR",
      Position: "optiona1",
      Contact: 7878786,
    },
    {
      id: 2,
      name: "Ghost",
      Department: "TL",
      Position: "optiona1",
      Contact: 7878786,
    },
    {
      id: 3,
      name: "yeet",
      Department: "HR",
      Position: "optiona1",
      Contact: 7878786,
    },
    {
      id: 4,
      name: "most",
      Department: "TL",
      Position: "optiona1",
      Contact: 7878786,
    },
    {
      id: 5,
      name: "jeet",
      Department: "HR",
      Position: "optiona1",
      Contact: 7878786,
    },
    {
      id: 6,
      name: "host",
      Department: "TL",
      Position: "optiona1",
      Contact: 7878786,
    },
  ];

  const [data, setData] = useState(initialData);

  const handleSearch = (event) => {
    const searchValue = event.target.value.toLowerCase();
    const filteredData = initialData.filter((row) =>
      row.name.toLowerCase().includes(searchValue)
    );
    setData(filteredData);
  };

  return (
    <div style={{ width: "70%", margin: "auto", marginTop: "15px" }}>
      <div>
        <input type="text" onChange={handleSearch} placeholder="Search by Name" />
      </div>
      <DataTable
        columns={columns}
        data={data}
        selectableRows
        fixedHeader
        pagination
      />
    </div>
  );
}

export default Table;
