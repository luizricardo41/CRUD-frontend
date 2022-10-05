import { GridRenderCellParams, GridValueGetterParams } from "@mui/x-data-grid";
import { ReactNode } from "react";

export interface IUserData {
  id?: number;
  nome: string;
  email: string;
  status: string;
  cpf: string;
  telefone: string;
  dataNascimento: string;
  password: string;
  endereco: string;
  cidade: string;
}

export interface IUserDataProps {
  userData: IUserData;
}

export interface IIndexProps {
  index: IUserData;
}

export interface IRow {
  id: number;
  nome: string;
  email: string;
  status: number;
  cpf: number;
}
