import { useContext, useEffect } from 'react';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { PencilFill, Trash } from 'react-bootstrap-icons';

import { UsersInfo } from '../../../context/UserContext';
import { IUserData } from '../../../interfaces/IUserData';
import apiAxios from '../../../api/apiUsers';


export default function EditMenu() {
  const {
    editUser,
    setEditUser,
    anchorEl,
    setOpenEdit,
    userData,
    setRows,
    rows,
    setEditPassword,
    setPasswordConfirm,
  } = useContext(UsersInfo);
  
  const handleEdit = (userData: IUserData) => {
    setPasswordConfirm(userData.password);
    setEditUser(false);
    setOpenEdit(true);
    setEditPassword(true);
  };

  const deleteUser = () => {
    apiAxios.delete(`/${userData.id}`);
    setEditUser(false);
  }

  useEffect(() => {
    apiAxios.get('').then(response => setRows(response.data));
  }, []);  

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
      <MenuItem onClick={deleteUser}>
        <span className='pe-2'>
          <Trash />
        </span>
          Excluir
        </MenuItem>
      </Menu>
  );
}
