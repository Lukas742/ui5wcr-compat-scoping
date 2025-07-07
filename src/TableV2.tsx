import {
  Table,
  TableRow,
  TableCell,
  TableHeaderRow,
  TableHeaderCell,
} from "@ui5/webcomponents-react";

export function TableV2() {
  return (
    <Table
      headerRow={
        <TableHeaderRow sticky>
          <TableHeaderCell width={"200px"} minWidth={"200px"}>
            <span>Product</span>
          </TableHeaderCell>
          <TableHeaderCell minWidth={"200px"}>
            <span>Supplier</span>
          </TableHeaderCell>
          <TableHeaderCell minWidth={"200px"}>
            <span>Dimensions</span>
          </TableHeaderCell>
          <TableHeaderCell minWidth={"100px"}>
            <span>Weight</span>
          </TableHeaderCell>
          <TableHeaderCell minWidth="200px">
            <span>Price</span>
          </TableHeaderCell>
        </TableHeaderRow>
      }
    >
      <TableRow>
        <TableCell>
          <span>Notebook Basic</span>
        </TableCell>
        <TableCell>
          <span>Very Best Screens</span>
        </TableCell>
        <TableCell>
          <span>30 x 18 x 3cm</span>
        </TableCell>
        <TableCell>
          <span>4.2KG</span>
        </TableCell>
        <TableCell>
          <span>956EUR</span>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>
          <span>Notebook Basic 17HT-1001</span>
        </TableCell>
        <TableCell>
          <span>Very Best Screens</span>
        </TableCell>
        <TableCell>
          <span>29 x 17 x 3.1cm</span>
        </TableCell>
        <TableCell>
          <span>4.5KG</span>
        </TableCell>
        <TableCell>
          <span>1249EUR</span>
        </TableCell>
      </TableRow>
    </Table>
  );
}
