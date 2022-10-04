import { GridRenderCellParams, GridValueGetterParams } from "@mui/x-data-grid";
import { ReactNode } from "react";

export interface IUserData {
  nome: string;
  email: string;
  status: string;
  cpf: string;
  telefone: string;
  dataNascimento: string;
}

export interface IUserDataProps {
  userData: IUserData;
}
