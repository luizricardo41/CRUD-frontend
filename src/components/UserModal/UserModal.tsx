import { useContext } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import { UsersInfo } from '../../context/UserContext';
import HeaderModal from './headerModal/HeaderModal';
import ContentModal from './contentModal/ContentModal';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function UserModal() {
  const { userModal, setUserModal, userData } = useContext(UsersInfo);
  const handleClose = () => setUserModal(false);

  return (
    <div>
      <Modal
        open={userModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={style}
          className="rounded"
        >
          <HeaderModal userData={userData} />
          
          <ContentModal userData={userData} />
        </Box>
      </Modal>
    </div>
  );
}
