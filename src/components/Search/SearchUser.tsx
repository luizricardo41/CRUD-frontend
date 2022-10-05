import { useContext, useState } from 'react';

import { Search, ArrowRepeat, Plus } from 'react-bootstrap-icons';
import { Button, Container, Form, InputGroup } from 'react-bootstrap';

import { UsersInfo } from '../../context/UserContext';

export default function SearchUser() {
  const [searchUser, setSearchUser] = useState('');
  const {
    setOpenEdit, rows, setUserFilter, setUserData, editPassword, setEditPassword,
  } = useContext(UsersInfo);

  const filterAux = (query: string) => {
    return rows?.filter((row) => {
      return row.nome.toLowerCase().indexOf(query.toLowerCase()) > -1;
    });
  }

  const filter = () => {
    if (rows) {
      const rowsFilter = filterAux(searchUser);
      if (rowsFilter) setUserFilter(rowsFilter);
      if (!rowsFilter) setUserFilter(undefined);
    }
  }

  const newUser = () => {
    setOpenEdit(true);
    setEditPassword(false);
    setUserData({
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
  }

  return (
    <Container className="ms-4 mt-4 pt-3 d-flex">

      <Button
        variant="primary"
        onClick={newUser}
      >
        <Plus className="fs-3" />
        Novo
      </Button>

      <InputGroup className="ms-4 w-50 border rounded">
        <InputGroup.Text
          className="border-0"
          style={{ backgroundColor: 'rgb(224, 220, 220)' }}
        >
          <Search />
        </InputGroup.Text>

        <Form.Control
          onChange={(event) => setSearchUser(event.target.value)}
          style={{ backgroundColor: 'rgb(224, 220, 220)' }}
          className="ps-0 border-0"
          type="text"
          placeholder="Pesquisar Usuários"
        />

      </InputGroup>

      <Button
        className="bg-light border-secondary ps-4 pe-4 ms-3 pt-0 h-25"
        onClick={filter}
      >
        <ArrowRepeat className="text-dark" size={20} />

      </Button>

    </Container>
  )
}
