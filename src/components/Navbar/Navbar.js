import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import MenuIcon from "@material-ui/icons/Menu";
import EmailIcon from "@material-ui/icons/Email";
import CallIcon from "@material-ui/icons/Call";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { useStyles } from "./Navbar.styles";

const menuItems = [
  { listText: "Introduction", listPath: "/" },
  { listText: "About Me", listPath: "/about" },
  { listText: "Skills", listPath: "/skills" },
  { listText: "Projects", listPath: "/projects" },
  { listText: "Timeline", listPath: "/timeline" },
];

const Navbar = () => {
  const history = useHistory();
  const styles = useStyles();
  const location = useLocation();

  const isMobile = window.innerWidth <= 768;

  const [isOpen, setIsOpen] = useState(!isMobile);
  const [tabValue, setTabValue] = useState(0);

  useEffect(() => {
    switch(location.pathname){
      case "/about":
        return setTabValue(1);
      case "/skills":
        return setTabValue(2);
      case "/projects":
        return setTabValue(3);
      case "/timeline":
        return setTabValue(4);
      default:
        return setTabValue(0);
    }
  }, [location]);

  const handleTabChange = (_, newValue) => {
    setTabValue(newValue);
  };

  const openCloseNavbar = () => {
    setIsOpen(!isOpen);
  };

  const sideList = () => (
    <Box className={styles.menuSliderContainer} component="div">
      <Divider />
      <List>
        <ListItem>
          <Avatar className={styles.avatar} alt="SK" src="/images/avatar.jpg" />
        </ListItem>
        <ListItem className={styles.listItemContainer}>
          <Typography className={styles.listFonts} variant="h5">
            Sam (Jin Hyun) Kim
          </Typography>
        </ListItem>
        <ListItem className={styles.listItemContainer}>
          <EmailIcon className={styles.contactIcons} />
          <Typography className={styles.listFonts} variant="body2">
            saminik9822@gmail.com
          </Typography>
        </ListItem>
        <ListItem className={styles.listItemContainer}>
          <CallIcon className={styles.contactIcons} />
          <Typography className={styles.listFonts} variant="body2">
            +1 (604) 831-7520
          </Typography>
        </ListItem>
        <Divider />
        <ListItem className={styles.tabs}>
          <Tabs
            classes={{ indicator: styles.indicator }}
            orientation="vertical"
            value={tabValue}
            onChange={handleTabChange}
          >
            {menuItems.map((item, i) => (
              <Tab
                label={item.listText}
                value={i}
                onClick={() => {
                  history.push(item.listPath);
                  if (isMobile) setIsOpen(false);
                }}
              />
            ))}
          </Tabs>
        </ListItem>
        <Divider />
        <ListItem className={`${styles.listItemContainer} ${styles.connect}`}>
          <Typography
            className={styles.listFonts}
            variant="body2"
            color="textSecondary"
          >
            Connect with me:
          </Typography>
        </ListItem>
        <ListItem className={styles.listItemContainer}>
          <IconButton onClick={() => window.open("https://github.com/jhk29")}>
            <GitHubIcon />
          </IconButton>
          <IconButton
            onClick={() =>
              window.open("https://www.linkedin.com/in/sam-kim-775435198/")
            }
          >
            <LinkedInIcon />
          </IconButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <React.Fragment>
      <Box className={styles.nav} component="nav">
        <AppBar position="static" className={styles.appbar}>
          <Toolbar>
            <IconButton onClick={openCloseNavbar}>
              <MenuIcon className={styles.menu} />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
      <Drawer
        variant="persistent"
        open={isOpen}
        anchor="left"
        onClose={openCloseNavbar}
      >
        {sideList()}
      </Drawer>
    </React.Fragment>
  );
};

export default Navbar;
