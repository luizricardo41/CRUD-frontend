import { useContext } from "react"

import { FormControlLabel, IconButton } from "@mui/material"
import { PencilFill } from "react-bootstrap-icons"

import { UsersInfo } from "../../../context/UserContext"
import { IIndexProps } from "../../../interfaces/IUserData";
import EditMenu from "./EditMenu";


export default function EditUser({ index }: IIndexProps) {
  const { handleClickEditUser } = useContext(UsersInfo);

  return (
    <FormControlLabel
      className="me-0 ms-0"
      label=""
      control={
        <>
          <IconButton
            onClick={(event) => handleClickEditUser(event, index)}
          >
            <PencilFill size={14} />

          </IconButton>
          <EditMenu />
        </>
      }
    />
  )
}
