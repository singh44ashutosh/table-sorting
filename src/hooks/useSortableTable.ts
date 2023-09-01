import { useState } from "react";

function getDefaultSorting(defaultTableData: any[], columns: any) {
  return [...defaultTableData].sort((a, b) => {
    const filterColumn = columns.filter(
      (column: { sortByOrder: boolean }) => column.sortByOrder
    );

    // Merge all array objects into single object and extract accessor and sortByOrder keys
    let { accessor = "id", sortByOrder = "asc" } = Object.assign(
      {},
      ...filterColumn
    );

    if (a[accessor] === null) return 1;
    if (b[accessor] === null) return -1;
    if (a[accessor] === null && b[accessor] === null) return 0;

    const ascending = a[accessor]
      .toString()
      .localeCompare(b[accessor].toString(), "en", {
        numeric: true,
      });

    return sortByOrder === "asc" ? ascending : -ascending;
  });
}

export const useSortableTable = (data: any, columns: any) => {
  const [tableData, setTableData] = useState(getDefaultSorting(data, columns));
  console.log(tableData);

  const handleSorting = (sortField: any, sortOrder: string) => {
    if (sortField) {
      const sorted = [...tableData].sort((a, b) => {
        if (a[sortField] === null) return 1;
        if (b[sortField] === null) return -1;
        if (a[sortField] === null && b[sortField] === null) return 0;
        return (
          a[sortField].toString().localeCompare(b[sortField].toString(), "en", {
            numeric: true,
          }) * (sortOrder === "asc" ? 1 : -1)
        );
      });
      setTableData(sorted);
    }
  };

  return { tableData, setTableData, handleSorting };
};
