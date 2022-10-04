import { useContext } from 'react';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { IconButton, Typography } from '@mui/material';
import { X } from 'react-bootstrap-icons';

import { UsersInfo } from '../../context/UserContext';
import EditTabs from './tabs/EditTabs';
import { Button } from 'react-bootstrap';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  height: 700,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function EditModal() {
  const {
    openEdit,
    setOpenEdit,
    userData,
    passwordConfirm,
  } = useContext(UsersInfo);

   const handleClose = () => setOpenEdit(false);

  const submitUser = () => {
    if (userData.password !== passwordConfirm || !userData.password) {
      console.log(passwordConfirm);
      alert('O campo "Senha" não pode estar vazio. Os campos "Senha" e "Confirme a senha" precisam ser iguais!')
    }
    console.log(userData);
  }

  return (
    <div>
      <Modal
        open={openEdit}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={style}
          className="rounded"
        >
          <Typography
            variant='h5'
            className="fw-bold"
          >
            Editar Usuário
            <IconButton
              onClick={handleClose}
              className="position-absolute end-0 me-4"
            >
              <X />
            </IconButton>
          </Typography>
          <EditTabs />
          <Box
            className="position-absolute end-0 bottom-0 pe-5 pb-5"
          >
            <Button
              className="me-4"
            >
              Voltar
            </Button>

            <Button
              onClick={submitUser}
            >
              Salvar
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}