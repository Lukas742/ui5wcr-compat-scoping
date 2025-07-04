import { Table } from "./Table";
import { TableCell } from "./TableCell";
import { TableColumn } from "./TableColumn";
import { TableRow } from "./TableRow";

function App() {
  return (
    <Table
      columns={
        <>
          <TableColumn style={{ width: "12rem" }}>
            <span>Product</span>
          </TableColumn>
          <TableColumn minWidth={800} popinText="Supplier">
            <span>Supplier</span>
          </TableColumn>
          <TableColumn minWidth={600} popinText="Dimensions" demandPopin>
            <span>Dimensions</span>
          </TableColumn>
          <TableColumn minWidth={600} popinText="Weight" demandPopin>
            <span>Weight</span>
          </TableColumn>
          <TableColumn>
            <span>Price</span>
          </TableColumn>
        </>
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

export default App;
