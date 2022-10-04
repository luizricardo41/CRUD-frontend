import { useContext } from 'react';
import { Container } from 'react-bootstrap';
import EditModal from '../components/EditModal/EditModal';
import SearchUser from '../components/Search/SearchUser';
import UserModal from '../components/UserModal/UserModal';
import TableUsers from '../components/UsersTable/UsersTable';
import { UsersInfo } from '../context/UserContext';

export default function Home() {
  const { editUser } = useContext(UsersInfo);

  return (
    <Container>

      <h4 className="ms-4 mt-4">Usuários</h4>
      
      <SearchUser />

      <TableUsers />

      <UserModal />

      <EditModal />

    </Container>
  )
}
