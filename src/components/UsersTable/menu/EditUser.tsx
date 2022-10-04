import { FormControlLabel, IconButton } from "@mui/material"
import { useContext } from "react"
import { PencilFill } from "react-bootstrap-icons"
import { UsersInfo } from "../../../context/UserContext"
import EditMenu from "./EditMenu";

export default function EditUser({ index }) {
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
