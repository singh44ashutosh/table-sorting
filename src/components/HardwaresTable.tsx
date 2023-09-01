import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { useSortableTable } from "../hooks/useSortableTable";
import { TableHead } from "./TableHead";
import { TableBody } from "./TableBody";

const HardwaresTable = () => {
  const hardwaresColumns = [
    {
      label: "ID",
      accessor: "id",
      sortable: true,
      sortByOrder: "asc",
      type: "int",
    },
    {
      label: "Hardware Name",
      accessor: "hardwareName",
      sortable: false,
      type: "string",
    },
    {
      label: "Display Name",
      accessor: "displayName",
      sortable: true,
      type: "string",
    },
    {
      label: "Hardware Make",
      accessor: "hardwareMake",
      sortable: true,
      type: "enum",
    },
    {
      label: "Hardware Type",
      accessor: "hardwareType",
      sortable: true,
      type: "enum",
    },
    {
      label: "Multiplier",
      accessor: "multiplier",
      sortable: true,
      type: "double",
    },
    {
      label: "Average PPD",
      accessor: "averagePpd",
      sortable: true,
      type: "int",
    },
  ];

  const [loadingData, setLoadingData] = useState(true);
  const { tableData, setTableData, handleSorting } = useSortableTable(
    [],
    hardwaresColumns
  );

  useEffect(() => {
    async function getData() {
      await axios
        .get("https://internal.axihub.ca/folding/hardware")
        .then((response: AxiosResponse) => {
          // console.log(response.data);
          setTableData(response.data);
        });
    }
    if (loadingData) {
      getData().then((r) => {
        setLoadingData(false);
      });
    }
  }, [loadingData, setTableData]);

  console.log("tableData", tableData);

  return (
    <table className="table">
      <caption>Hardwares on the system</caption>
      <TableHead columns={hardwaresColumns} handleSorting={handleSorting} />
      {loadingData ? (
        ""
      ) : (
        <TableBody tableData={tableData} columns={hardwaresColumns} />
      )}
    </table>
  );
};

export default HardwaresTable;
