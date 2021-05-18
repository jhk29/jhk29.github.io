import { makeStyles } from "@material-ui/core/styles";

const windowWidth = window.innerWidth;

export const useStyles = makeStyles((theme) => ({

  appbar: {
    background: "transparent",
    border: "none",
    boxShadow: "none",
    margin: 0,
    zIndex: 1000,
  },
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    marginTop: "3rem",
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
  nav: {
    float: "right",
  },
  menu: {
    float: "right",
  },
  tabs: {
    justifyContent: "center",
    marginTop: "3.5rem",
    marginBottom: "3.5rem",
  },
  listItemContainer: {
    justifyContent: "center",
  },
  listFonts: {
    fontFamily: "Roboto",
  },
  contactIcons: {
    marginRight: "0.2rem",
  },
  connect: {
    marginTop: "1rem",
  },
  menuSliderContainer: {
    width: 500,
    background: "#F4F4F4",
    height: "100%",
  },
  indicator: {
    left: "0px",
  },
  "@media(max-width:1024px)": {
    menuSliderContainer: {
      width: 300,
    },
  },
  "@media(max-width:768px)": {
    menuSliderContainer: {
      width: windowWidth,
    },
    avatar: {
      display: "none",
    },
  },
  "@media(max-width:375px)": {
    name: {
      fontSize: "1.25rem",
    },
  },
}));
