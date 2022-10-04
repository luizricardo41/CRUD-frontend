import { useContext, useState } from 'react';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { UsersInfo } from '../../../context/UserContext';
import { PencilFill, Trash } from 'react-bootstrap-icons';

import { IUserData } from '../../../interfaces/IUserData';

export default function EditMenu() {
  const { editUser, setEditUser, anchorEl, setOpenEdit, userData } = useContext(UsersInfo);
  
  const handleEdit = (userData: IUserData) => {
    console.log(userData);
    setEditUser(false);
    setOpenEdit(true);
  };

  return (
      <Menu
        anchorEl={anchorEl}
        open={editUser}
        onClose={() => setEditUser(false)}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={() => handleEdit(userData)}>
        <span className='pe-2'>
          <PencilFill />
        </span>      
          Editar
        </MenuItem>
      <MenuItem onClick={() => {}}>
        <span className='pe-2'>
          <Trash />
        </span>
          Excluir
        </MenuItem>
      </Menu>
  );
}
