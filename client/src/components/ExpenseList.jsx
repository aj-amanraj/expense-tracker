import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import { getExpense } from "../api/expense";
import { useExpense } from "../hooks/useExpense";


export default function ExpenseList() {
  const { reload } = useExpense();
  const [expense, setExpense] = useState([]);

  const fetchExpenseList = async () => {
    const result = await getExpense();

    if(result) setExpense(result)
  }

  useEffect( () => {
    fetchExpenseList()
  },[reload])

  return (
    <TableContainer className="p-5 pb-20 mt-5" component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">

        <TableHead className="flex flex-col justify-between">
          <TableRow>
            <h2 className="text-2xl font-bold mx-3 mb-3">Recent Expenses</h2>
          </TableRow>
        </TableHead>

        <TableHead>
          <TableRow>
            <TableCell>category</TableCell>
            <TableCell align="right">amount</TableCell>
            <TableCell align="right">description</TableCell>
            <TableCell align="right">createdAt</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {expense.map((row) => (
            <TableRow
              key={row.category}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.category}
              </TableCell>
              <TableCell align="right">{row.amount}</TableCell>
              <TableCell align="right">{row.description}</TableCell>
              <TableCell align="right">{new Date(row.createdAt).toLocaleDateString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
