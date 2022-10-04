import React,
{
  createContext, Dispatch, MouseEvent, SetStateAction, useState,
} from "react";
import { GridCellParams } from "@mui/x-data-grid";

import { IUserData } from "../interfaces/IUserData";

interface IUsersInfoData {
  editUser: boolean;
  setEditUser: Dispatch<SetStateAction<boolean>>;
  openEdit: boolean;
  setOpenEdit: Dispatch<SetStateAction<boolean>>;
  userModal: boolean;
  setUserModal: Dispatch<SetStateAction<boolean>>;
  openModal: (params: GridCellParams) => void;
  handleClickEditUser: (event: MouseEvent<HTMLButtonElement>, index: IUserData) => void;
  anchorEl: null | HTMLElement;
  setAnchorEl: Dispatch<React.SetStateAction<HTMLElement | null>>;
  userData: IUserData;
  setUserData: Dispatch<React.SetStateAction<IUserData>>;
  passwordConfirm: string;
  setPasswordConfirm: Dispatch<React.SetStateAction<string>>;
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
      }
    }
    >
      {children}
    </UsersInfo.Provider>
  )
}
