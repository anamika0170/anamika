import React, { useState, useEffect, useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "./navbar.css";
import { Container } from "@mui/material";
import { Link, animateScroll as scroll } from "react-scroll";
import { AppContext } from "../../context/appContext";
import CancelIcon from "@mui/icons-material/Cancel";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import InventoryIcon from "@mui/icons-material/Inventory";
import PhoneIcon from "@mui/icons-material/Phone";

const logo =
  "https://firebasestorage.googleapis.com/v0/b/portfolio-website-81b2a.appspot.com/o/logobg.png?alt=media&token=eeaa5f15-edf4-482e-b71c-59f5610d5c56";

const drawerWidth = 240;
const navItems = [
  {
    id: "home",
    link: "Home",
    icon: <HomeIcon />,
  },
  {
    id: "about",
    link: "About",
    icon: <InfoIcon />,
  },
  {
    id: "projects",
    link: "Projects",
    icon: <InventoryIcon />,
  },
  {
    id: "contact",
    link: "Contact",
    icon: <PhoneIcon />,
  },
];

function Navbar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { myDetails } = useContext(AppContext);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarClasses = ["navbar"];

  if (scrollPosition > 200) {
    navbarClasses.push("scrolled");
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        variant="h6"
        sx={{
          my: 2,
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <Link
          activeClass="active"
          className="nav-link"
          to={"home"}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <img style={{ height: "8vh", cursor: "pointer" }} src={logo} />
        </Link>
        <Box>
          <CancelIcon className="cancelIcon" />
        </Box>
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText
                primary={
                  <Link
                    activeClass="active"
                    className="nav-link"
                    to={item.id}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    {item.link}
                  </Link>
                }
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar className={navbarClasses.join(" ")} component="nav">
        <Container>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
              <img style={{ height: "8vh", cursor: "pointer" }} src={logo} />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              <Link
                activeClass="active"
                className="nav-link"
                to={"home"}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {/* {myDetails.Name} */}

                <img style={{ height: "8vh", cursor: "pointer" }} src={logo} />
              </Link>
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item) => (
                <Button key={item.id} sx={{ color: "#fff" }}>
                  <Link
                    activeClass="active"
                    className="nav-link"
                    to={item.id}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    {item.link}
                  </Link>
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#333",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
export default Navbar;
