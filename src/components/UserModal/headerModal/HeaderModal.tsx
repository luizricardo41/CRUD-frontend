import { useContext } from 'react'

import { IconButton, Typography } from '@mui/material'
import { PencilFill, PersonCircle, X } from 'react-bootstrap-icons'

import { UsersInfo } from '../../../context/UserContext';
import { IUserData, IUserDataProps } from '../../../interfaces/IUserData';

export default function HeaderModal({ userData }: IUserDataProps) {
  const { setUserModal, setOpenEdit } = useContext(UsersInfo);

  const handleEdit = (userData: IUserData) => {
    console.log(userData);
    setOpenEdit(true);
    setUserModal(false);
  }

  return (
    <Typography variant="h6">
      <span className="pe-4">
        <PersonCircle size={40} />
      </span>
      {userData.nome}
      <span className="position-absolute end-0 me-3">
        <IconButton
          onClick={() => handleEdit(userData)}
        >
          <PencilFill size={14} />
        </IconButton>
        <IconButton
          onClick={() => setUserModal(false)}
        >
          <X />
        </IconButton>
      </span>
    </Typography>
  )
}
