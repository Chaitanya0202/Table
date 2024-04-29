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
      Contact: 9996878786,
    },
    {
      id: 3,
      name: "yeet",
      Department: "HR",
      Position: "optiona1",
      Contact: 8977878786,
    },
    {
      id: 4,
      name: "most",
      Department: "TL",
      Position: "optiona1",
      Contact: 767878786,
    },
    {
      id: 5,
      name: "jeet",
      Department: "HR",
      Position: "optiona1",
      Contact: 9077878786,
    },
    {
      id: 6,
      name: "host",
      Department: "TL",
      Position: "optiona1",
      Contact: 9127878786,
    },
    {
      id: 7,
      name: "rock",
      Department: "CEO",
      Position: "optiona1",
      Contact: 7127878786,
    },
    {
      id: 8,
      name: "tom",
      Department: "manager",
      Position: "optiona1",
      Contact: 927878786,
    },
    {
      id: 9,
      name: "ford",
      Department: "Support associate",
      Position: "optiona1",
      Contact: 997878786,
    },
    {
      id: 10,
      name: "carl",
      Department: "engineer",
      Position: "optiona1",
      Contact: 9007878786,
    },
    {
      id: 11,
      name: "harry",
      Department: "youtube",
      Position: "youtuber",
      Contact: 927878799,
    },
    {
      id: 10,
      name: "carl",
      Department: "engineer",
      Position: "optiona1",
      Contact: 9007878786,
    },
    {
      id: 11,
      name: "harry",
      Department: "youtube",
      Position: "youtuber",
      Contact: 927878799,
    },
    {
      id: 10,
      name: "carl",
      Department: "engineer",
      Position: "optiona1",
      Contact: 9007878786,
    },
    {
      id: 11,
      name: "harry",
      Department: "youtube",
      Position: "youtuber",
      Contact: 927878799,
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
const handleSearchByDept=(event)=>{
  const searchValue = event.target.value.toLowerCase();
  const filteredData = initialData.filter((row) =>
  row.Department.toLowerCase().includes(searchValue)
);
setData(filteredData);
  
  }

  return (
    <div style={{ width: "70%", margin: "auto", marginTop: "50px"}}>
      <div >
        <input type="text" onChange={handleSearch} placeholder="Search by Name"  />
    
        <input type="text" onChange={handleSearchByDept} placeholder="Search by Dept" style={{marginLeft:"20px"}} />
      </div>
      <DataTable
        columns={columns}
        data={data}
        // expandableRows
        selectableRows
        fixedHeader
        pagination
      />
    </div>
  );
}

export default Table;
