
import { useState } from "react";
import React from "react";
import { useEffect } from "react";
import DataTable from "react-data-table-component";
import axios from "axios";
import * as Tooltip from "@radix-ui/react-tooltip";
import { PlusIcon } from "@radix-ui/react-icons";



const Table = () => {
  const column = [
    {
      name: "ID",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
  ];
  const customStyles = {
    header: {
      style: {
        backgroundColor: "red",
      },
    },
  };

  useEffect(() => {
    const fetData = async () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res);

        setRecords(res.data);
         setFilterRecords(res.data);
      })
      .catch((err) => console.log(err));
    };
    fetData();
  }, []);

  const [records, setRecords] = useState([]);
  const [filterRecords, setFilterRecords] = useState([]);
  const [query,setQuery]=useState('');
  
   const handleFilter = (e) => {
    console.log("enterd  value",e.target.value)
    console.log(records)

      const filterRecords = records.filter((row) =>
      row.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    console.log("fileted data",filterRecords);
   {/*setRecords(filterRecords);*/}
    setFilterRecords(filterRecords)
   }
   
  return (
    <div style={{ padding: "0px 10%", backgroundColor: "gray" }}>
      <div style={{ display: "flex", justifyContent: "right" }}>  
      
   
      <input type="text" placeholder="search..." onChange={handleFilter} style={{padding: '6px 10px'}}></input>
   </div>
    <Tooltip.Provider>
    <Tooltip.Root>
      <Tooltip.Trigger asChild>
        <button className="IconButton">
          <PlusIcon />
        </button>
      </Tooltip.Trigger>
      <Tooltip.Portal>
        <Tooltip.Content className="TooltipContent" sideOffset={5}>
          Add
          <Tooltip.Arrow className="TooltipArrow" />
        </Tooltip.Content>
      </Tooltip.Portal>
    </Tooltip.Root>
  </Tooltip.Provider>
      <DataTable
        columns={column}
        data={filterRecords}
        customStyles={customStyles}
        pagination
        selectableRows
      ></DataTable>     
    </div>
  );
};

export default Table;