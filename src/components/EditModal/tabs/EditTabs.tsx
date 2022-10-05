import { useContext, useState } from 'react';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import {
  FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField
} from '@mui/material';

import { UsersInfo } from '../../../context/UserContext';
import { EyeFill, EyeSlashFill } from 'react-bootstrap-icons';

export default function EditTabs() {
  const [value, setValue] = useState('1');
  const [visiblePassword, setVisiblePassword] = useState(false);

  const { userData, setPasswordConfirm, setUserData, editPassword } = useContext(UsersInfo);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const handleClickShowPassword = () => {
    setVisiblePassword(!visiblePassword);
  }

  const handleChangeForm = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { target } = event;
    const { name } = target;

    setUserData({
      ...userData,
      [name]: target.value,
    })
  }

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', marginBottom: 3 }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Informações" value="1" />
            <Tab label="Dados complementares" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <TextField
            name='nome'
            onChange={(event) => handleChangeForm(event)}
            className="mb-4"
            required
            label="Nome"
            fullWidth
            defaultValue={userData.nome}
          ></TextField>

          <TextField
            name="email"
            onChange={(event) => handleChangeForm(event)}
            className="mb-4 mt-3"
            required
            label="Email"
            fullWidth
            defaultValue={userData.email}
          ></TextField>

          <TextField
            name="dataNascimento"
            onChange={(event) => handleChangeForm(event)}
            className="mb-4 mt-3"
            label="Data de nascimento"
            fullWidth
            defaultValue={userData.dataNascimento}
          ></TextField>

          <Box className="mb-4 mt-3">
            <FormControl variant="outlined">
              <InputLabel
                required
                htmlFor="password"
              >
                Senha
              </InputLabel>

              <OutlinedInput
                id="password"
                name="password"
                disabled={editPassword}
                onChange={(event) => handleChangeForm(event)}
                type={visiblePassword ? 'text' : 'password'}
                defaultValue={userData.password}
                required
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {visiblePassword ? <EyeFill /> : <EyeSlashFill />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Senha"
              />
            </FormControl>

          </Box>

          <Box className="mb-4 mt-3">
            <FormControl variant="outlined">
              <InputLabel required htmlFor="confirm-password">Confirme a senha</InputLabel>
              <OutlinedInput
                id="confirm-password"
                name="passwordConfirm"
                disabled={editPassword}
                onChange={(event) => setPasswordConfirm(event.target.value)}
                type={visiblePassword ? 'text' : 'password'}
                required
                defaultValue={userData.password}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {visiblePassword ? <EyeFill /> : <EyeSlashFill />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Confirme a senha"
              />
            </FormControl>

          </Box>
        </TabPanel>
        <TabPanel value="2">
          <TextField
            className="mb-4"
            label="Endereço"
            onChange={(event) => handleChangeForm(event)}
            name="endereco"
            fullWidth
            defaultValue={userData.endereco}
          ></TextField>

          <TextField
            className="mb-4 mt-3"
            onChange={(event) => handleChangeForm(event)}
            name="cidade"
            label="Cidade"
            fullWidth
            defaultValue={userData.cidade}
          ></TextField>

          <TextField
            className="mb-4"
            label="Telefone"
            onChange={(event) => handleChangeForm(event)}
            name="telefone"
            fullWidth
            defaultValue={userData.telefone}
          ></TextField>

          <TextField
            className="mb-4 mt-3"
            onChange={(event) => handleChangeForm(event)}
            label="CPF"
            name="cpf"
            required
            fullWidth
            defaultValue={userData.cpf}
          ></TextField>

        </TabPanel>
      </TabContext>
    </Box>
  );
}
