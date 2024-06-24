import { Add as AddIcon, Remove as RemoveIcon } from "@mui/icons-material";
import { Avatar, IconButton, ListItem, Stack, Typography } from "@mui/material";
import React, { memo } from "react";
import { transformImage } from "../../lib/features";
import { matBlack } from "../../constants/color";

const UserItem = ({
  user,
  handler,
  handlerIsLoading,
  isAdded = false,
  styling = {},
}) => {
  const { name, _id, avatar } = user;

  //  const handleClick = (e,_id) => {
  //    e.stopPropagation();
  //    e.preventDefault();
  //    setIsLoading(true);
  //    handler(_id);
  //    setIsLoading(false);
  //  };
  return (
    <ListItem>
      <Stack
        direction={"row"}
        alignItems={"center"}
        spacing={"1rem"}
        padding={"1rem"}
        border={`1px solid ${matBlack}`}
        borderRadius={"1rem"}
        width={"100%"}
        {...styling}
        sx={{
          "&:hover": {
            transform: "scale(1.03)",
            transition: "transform 0.9s ease-in-out",
            boxShadow: "3px 10px 10px black",
          },
        }}
      >
        <Avatar src={transformImage(avatar)} />

        <Typography
          variant="body1"
          sx={{
            flexGlow: 1,
            display: "-webkit-box",
            WebkitLineClamp: 1,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
            width: "100%",
          }}
        >
          {name}
        </Typography>

        <IconButton
          size="small"
          sx={{
            bgcolor: isAdded ? "error.main" : "primary.main",
            color: "white",
            "&:hover": {
              bgcolor: isAdded ? "error.dark" : "primary.dark",
            },
          }}
          onClick={(e) => {e.stopPropagation();e.preventDefault(); handler(_id)}}
          // disabled={handlerIsLoading}
        >
          {isAdded ? <RemoveIcon /> : <AddIcon />}
        </IconButton>
      </Stack>
    </ListItem>
  );
};

export default memo(UserItem);
