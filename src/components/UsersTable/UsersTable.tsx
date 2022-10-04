import { useContext } from "react";
import { DataGrid, GridColDef, GridRenderCellParams, GridValueGetterParams } from "@mui/x-data-grid";
import { Container } from "react-bootstrap";
import { UsersInfo } from "../../context/UserContext";
import EditUser from "./menu/EditUser";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70, align: "center", headerAlign: "center" },
  { field: "nome", headerName: "Nome", width: 400 },
  { field: "email", headerName: "Email", width: 400 },
  { field: "status", headerName: "Status", width: 200, align: "center", headerAlign: "center" },
  {
    field: "ações",
    headerName: "Ações",
    width: 150,
    align: "center",
    headerAlign: "center",
    sortable: false,
    renderCell: (params) => {

      return (
        <EditUser index={params.row} />
      )
    }
  }
];

const rows = [
  { id: 1, nome: 'Snow', email: 'Jon', status: 35, cpf: 11122233344 },
  { id: 2, nome: 'Lannister', email: 'Cersei', status: 42, cpf: 11122233344 },
  { id: 3, nome: 'Lannister', email: 'Jaime', status: 45, cpf: 11122233344 },
  { id: 4, nome: 'Stark', email: 'Arya', status: 16, cpf: 11122233344 },
  { id: 5, nome: 'Targaryen', email: 'Daenerys', status: null, cpf: 11122233344 },
  { id: 6, nome: 'Melisandre', email: null, status: 15, cpf: 111222333440 },
  { id: 7, nome: 'Clifford', email: 'Ferrara', status: 44, cpf: 11122233344 },
  { id: 8, nome: 'Frances', email: 'Rossini', status: 36, cpf: 11122233344 },
  { id: 9, nome: 'Roxie', email: 'Harvey', status: 65, cpf: 11122233344 },
];

export default function UsersTable() {
  const { openModal } = useContext(UsersInfo);

  return (
    <Container
      style={{ height: "80vh", width: "100%" }}
      className="ms-4 mt-3"
    >

      <DataGrid
        onCellClick={(params) => openModal(params)}
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
      />

    </Container>
  )
}
