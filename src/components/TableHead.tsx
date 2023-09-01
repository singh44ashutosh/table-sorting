export const TableHead = (props: any) => (
  <thead>
    <tr>
      {props.columns.map((column: any) =>
        column.sortable ? (
          <th>
            <button
              onClick={() =>
                props.handleSorting(column.accessor, column.sortByOrder)
              }
            >
              {column.label}
            </button>
          </th>
        ) : (
          <th>{column.accessor}</th>
        )
      )}
    </tr>
  </thead>
);
