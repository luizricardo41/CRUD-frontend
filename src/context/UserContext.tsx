import React,
{
  createContext, Dispatch, MouseEvent, SetStateAction, useEffect, useState,
} from "react";
import { GridCellParams } from "@mui/x-data-grid";

import { IRow, IUserData } from "../interfaces/IUserData";
import apiAxios from "../api/apiUsers";

interface IUsersInfoData {
  editUser: boolean;
  setEditUser: Dispatch<SetStateAction<boolean>>;
  openEdit: boolean;
  setOpenEdit: Dispatch<SetStateAction<boolean>>;
  userModal: boolean;
  setUserModal: Dispatch<SetStateAction<boolean>>;
  editPassword: boolean;
  setEditPassword: Dispatch<SetStateAction<boolean>>;
  openModal: (params: GridCellParams) => void;
  handleClickEditUser: (event: MouseEvent<HTMLButtonElement>, index: IUserData) => void;
  anchorEl: null | HTMLElement;
  setAnchorEl: Dispatch<React.SetStateAction<HTMLElement | null>>;
  userData: IUserData;
  setUserData: Dispatch<React.SetStateAction<IUserData>>;
  passwordConfirm: string;
  setPasswordConfirm: Dispatch<React.SetStateAction<string>>;
  userFilter: IRow[] | undefined;
  setUserFilter: Dispatch<React.SetStateAction<IRow[] | undefined>>;
  rows?: IRow[]
  setRows: Dispatch<React.SetStateAction<IRow[] | undefined>>;
};

export const UsersInfo = createContext<IUsersInfoData>({} as IUsersInfoData);

interface IUserInfoProviderProps {
  children: React.ReactNode;
}

export const UsersInfoProvider: React.FC<IUserInfoProviderProps> = ({ children }) => {
  const [editUser, setEditUser] = useState(false);
  const [userModal, setUserModal] = useState(false)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [openEdit, setOpenEdit] = useState(false);
  const [userFilter, setUserFilter] = useState<IRow[] | undefined>();
  const [rows, setRows] = useState<IRow[]>();
  const [editPassword, setEditPassword] = useState(false);

  const [userData, setUserData] = useState<IUserData>({
    nome: '',
    email: '',
    status: '',
    cpf: '',
    telefone: '',
    dataNascimento: '',
    password: '',
    endereco: '',
    cidade: '',
  });

  useEffect(() => {
    apiAxios.get('').then((response) => {
      console.log(response);
      setRows(response.data);
    })
  }, [])


  const handleClickEditUser = (event: React.MouseEvent<HTMLButtonElement>, index: IUserData) => {
    setEditUser(true);
    setAnchorEl(event.currentTarget);
    setUserData(index);
  };


  const openModal = (params: GridCellParams) => {
    if (params.field !== 'ações') {
      setUserModal(true);
      setUserData(params.row);
    }
  }

  return (
    <UsersInfo.Provider value={
      {
        editUser,
        setEditUser,
        userModal,
        setUserModal,
        openModal,
        handleClickEditUser,
        anchorEl,
        setAnchorEl,
        userData,
        setUserData,
        openEdit,
        setOpenEdit,
        passwordConfirm,
        setPasswordConfirm,
        userFilter,
        setUserFilter,
        rows,
        setRows,
        editPassword,
        setEditPassword,
      }
    }
    >
      {children}
    </UsersInfo.Provider>
  )
}
