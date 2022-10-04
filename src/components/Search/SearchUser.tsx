import { Search, ArrowRepeat, Plus } from 'react-bootstrap-icons';
import { Button, Container, Form, InputGroup } from 'react-bootstrap';

export default function SearchUser() {
  return (
    <Container className="ms-4 mt-4 pt-3 d-flex">

      <Button variant="primary">
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
          style={{ backgroundColor: 'rgb(224, 220, 220)' }}
          className="ps-0 border-0"
          type="text"
          placeholder="Pesquisar Usuários"
        />

      </InputGroup>

      <Button className="bg-light border-secondary ps-4 pe-4 ms-3 pt-0 h-25">
        <ArrowRepeat className="text-dark" size={20} />

      </Button>

    </Container>
  )
}
