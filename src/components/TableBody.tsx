export const TableBody = (props: any) => (
  <tbody>
    {props.tableData.map((row: any) => {
      return (
        <tr>
          {props.columns.map((column: any) => (
            <td>{row[column.accessor]}</td>
          ))}
        </tr>
      );
    })}
  </tbody>
);
