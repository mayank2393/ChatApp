import React, { useState } from "react";
import { useInputValidation } from "6pp";
import  UserItem  from "../shared/UserItem";
import {
  Button,
  Dialog,
  DialogTitle,
  Skeleton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { sampleUsers } from "../../constants/sampleData";

const NewGroup = () => {
  const [members,setMembers] = useState(sampleUsers);
  const [selectedMembers,setSelectedMembers] = useState([]);
  const groupName = useInputValidation(""); 

  const submitHandler = () => {};

  const selectMemberHandler = (id) => {
    setSelectedMembers((prev)=>
      prev.includes(id) ? prev.filter((currId)=>currId !== id) : [...prev,id]
    )
  };

  const closeHandler = () => {};

  return (
    <Dialog open onClose={closeHandler}>
      <Stack padding={{ xs: "1rem", sm: "3rem" }} width={"25rem"} spacing={"2rem"}>
        <DialogTitle textAlign={"center"} variant="h4">New Group</DialogTitle>
        <TextField label="Group Name" value={groupName.value} onChange={groupName.changeHandler}/>
        <Typography variant="body1">Members</Typography>
        <Stack>
          {members.map((user) => (
            <UserItem
              user={user}
              key={user._id}
              handler={selectMemberHandler}
              isAdded={selectedMembers.includes(user._id)}
            />
          ))}
        </Stack>

        <Stack direction={"row"} justifyContent={"space-evenly"}>
          <Button variant="text" color="error" size="large">Cancel</Button>
          <Button variant="contained" size="large" onClick={submitHandler}>Create</Button>
        </Stack>
      </Stack>
    </Dialog>
  );
};

export default NewGroup;
