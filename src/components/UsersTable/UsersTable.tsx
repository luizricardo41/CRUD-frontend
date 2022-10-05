import { useContext } from "react";

import { DataGrid, GridColDef, GridRenderCellParams, GridValueGetterParams } from "@mui/x-data-grid";
import { Container } from "react-bootstrap";

import { UsersInfo } from "../../context/UserContext";
import EditUser from "./menu/EditUser";
import { IRow } from "../../interfaces/IUserData";

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

export default function UsersTable() {
  const { openModal, userFilter, rows } = useContext(UsersInfo);

  const verifyData = (data: IRow[] | undefined, filtered: IRow[] | undefined) => {
    if (filtered && filtered.length > 0) {
      return filtered;
    };
    if (data && data.length > 0) {
      return data;
    };
    return [];
  }

  return (
    <Container
      style={{ height: "80vh", width: "100%" }}
      className="ms-4 mt-3"
    >

      <DataGrid
        onCellClick={(params) => openModal(params)}
        rows={verifyData(rows, userFilter)}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
      />

    </Container>
  )
}
