import React, { Suspense, useState } from "react";
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  Add as AddIcon,
  Group as GroupIcon,
  Logout as LogoutIcon,
  Notifications as NotificationsIcon,
} from "@mui/icons-material";
import { orange } from "../../constants/color";
import { useNavigate } from "react-router-dom";
const SearchDialog = React.lazy(() => import("../specific/Search"));
const NotificationDialog = React.lazy(() =>
  import("../specific/Notifications")
);
const NewGroupDialog = React.lazy(() => import("../specific/NewGroup"));

const Header = () => {
  const navigate = useNavigate();
  const [isSearch, setIsSearch] = useState(false);
  const [isNewGroup, setIsNewGroup] = useState(false);
  const [isNotification, setIsNotification] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleMobile = () => {
    setIsMobile(!isMobile);
  };

  const OpenSearch = () => {
    setIsSearch(!isSearch);
  };

  const OpenNewGroup = () => {
    setIsNewGroup(!isNewGroup);
  };

  const openNotification = () => {
    setIsNotification(!isNotification);
  };
  const NavigateToGroup = () => {
    navigate("/groups");
  };

  const logoutHandler = () => {
    console.log("Logout");
  };
  return (
    <>
      <Box sx={{ flexGrow: 1 }} height={"4rem"}>
        <AppBar position="static" sx={{ bgcolor: orange }}>
          <Toolbar>
            <Typography
              variant="h6"
              sx={{
                display: { xs: "none", sm: "block" },
              }}
            >
              ChatZZ
            </Typography>

            <Box
              sx={{
                display: { xs: "block", sm: "none" },
              }}
            >
              <IconButton color="inherit" onClick={handleMobile}>
                <MenuIcon />
              </IconButton>
            </Box>

            <Box sx={{ flexGrow: 1 }} />

            <Box>
              <IconBtn
                title={"Search"}
                icon={<SearchIcon />}
                onClick={OpenSearch}
              />

              <IconBtn
                title={"New Group"}
                icon={<AddIcon />}
                onClick={OpenNewGroup}
              />

              <IconBtn
                title={"Manage Groups"}
                icon={<GroupIcon />}
                onClick={NavigateToGroup}
              />

              <IconBtn
                title={"Notifications"}
                icon={<NotificationsIcon />}
                onClick={openNotification}
              />

              <IconBtn
                title={"Logout"}
                icon={<LogoutIcon />}
                onClick={logoutHandler}
              />
            </Box>
          </Toolbar>
        </AppBar>
      </Box>

      {isSearch && (
        <Suspense fallback={<div>Loading...</div>}>
          <SearchDialog />
        </Suspense>
      )}

      {isNotification && (
        <Suspense fallback={<div>Loading...</div>}>
          <NotificationDialog />
        </Suspense>
      )}

      {isNewGroup && (
        <Suspense fallback={<div>Loading...</div>}>
          <NewGroupDialog />
        </Suspense>
      )}
    </>
  );
};

const IconBtn = ({ title, icon, onClick, value }) => {
  return (
    <Tooltip title={title}>
      <IconButton color="inherit" size="large" onClick={onClick}>
        {value ? (
          <Badge badgeContent={value} color="error">
            {icon}
          </Badge>
        ) : (
          icon
        )}
      </IconButton>
    </Tooltip>
  );
};

export default Header;