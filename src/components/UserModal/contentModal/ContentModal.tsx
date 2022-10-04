import { Typography } from "@mui/material";
import { Calendar3, EnvelopeFill, TelephoneFill } from "react-bootstrap-icons";

import { IUserDataProps } from "../../../interfaces/IUserData";

export default function ContentModal({userData}: IUserDataProps) {
  return (
    <div
      className="border-2 border-top border-dark mt-3"
    >
      <Typography
        variant="h6"
        sx={{ mt: 2 }}
        className="fw-bold"
      >
        Detalhes do usuário
      </Typography>

      <Typography sx={{ mt: 2 }}>
        <TelephoneFill
          className="me-3"
        /> 
        {userData.telefone}
      </Typography>

      <Typography sx={{ mt: 2 }}>
        <EnvelopeFill
          className="me-3"
        /> 
        {userData.email}
      </Typography>

      <Typography sx={{ mt: 2 }}>
        <Calendar3
          className="me-3"
        /> 
        {userData.dataNascimento}
      </Typography>
    </div>
  )
}
