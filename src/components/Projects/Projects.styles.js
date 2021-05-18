import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "80vh",
    paddingLeft: "25%",
    display: "flex",
    flexDirection: "column",
    // justifyContent: "center",
    alignItems: "center",
  },
  projectTbas:{
    marginBottom: "2rem"
  },
  gallery: {
    "& .MuiAvatar-root":{
      margin: 5,
      borderRadius: 0,
      border: "1px solid lightgray"
    }
  },
  projectImage: {
    width: 160, 
    height: 160, 
    objectFit: "cover",
    cursor: "pointer",
    border: "1px solid lightgray"
  },
  viewImage:{
    textAlign: "center",
    marginTop: 95,
    marginLeft: 45,
    position: "absolute",
    display: "none"
  },
  imageContainer: {
    margin:5,
    "&:hover svg": {
      display: "block"
    },
    "&:hover .MuiTypography-subtitle2":{
      display: "block"
    },
    "&:hover img": {
      background: "rgba(0.0.0.0.6)",
      opacity: 0.5,
      transition: "all 0.5"
    }
  },
  imgHoverIcon: {
    zIndex: 1000,
    position: "absolute",
    marginLeft: "70px",
    marginTop: "70px",
    display: "none",
    cursor: "pointer"
  },
  projectSummary: {
    marginTop: "3rem"
  },
  indicator: {
    backgroundColor: "#E5C600",
    color: "#ESC600",
    height: 4
  },
  schedulerBuddyTab: {
    flexBasis: 170,
    flexGrow: 0,
    flexShrink: 0,
  },
  buttonContainer: {
    marginTop: "1rem"
  },
  icon: {
    fontSize: theme.spacing(4)
  },
  demoBtn: {
    backgroundColor: "#E5C600",
    "&:hover": {
      backgroundColor: "#C7B000"
    }
  },
  awardBtn: {
    TextDecoration: "none",
    backgroundColor: "#E5C600",
    "&:hover": {
      backgroundColor: "#C7B000"
    }
  },
  title: {
    fontWeight: 700,
    marginBottom: "1.5rem",
    marginRight: "10rem",
    marginTop: "7vw"
  },
  boldText: {
    fontWeight: 700
  },
  titleContent: {
    marginLeft: 15
  },
  circle: {
    width: 35,
    height: 35,
    backgroundColor: "#E5C600",
    borderRadius: "50%",
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    zIndex: "-100"
  },
  divider: {
    width: 63,
    height: 4,
    position: "relative",
    margin: "0 9px 15px",
    background: "black"
  },
  project: {
    width: 600
  },
  button: {
    marginTop: "1.5rem", 
    background: "#E5C600", 
    float:"right"
  },
  imgDialog: {
    "& .MuiDialog-paper":{
      maxWidth: "none",
    }
  },
  "@media(max-width:1024px)": {
    root:{
      paddingRight: 0,
      paddingLeft: 400
    },
    projectTabs: {
      width: 500
    }
  },
  "@media(max-width:540px)": {
    root: {
      paddingLeft: 0
    },
    project:{
      width: "510px",
      marginLeft: "5rem",
      marginBottom: "1rem"
    },
    projectTabs: {
      marginLeft: "5rem",
      width: 500,
      "& .MuiTabs-scrollButtons": {
        display: "flex"
      },
      "& .MuiSvgIcon-root": {
        width: "0.8em",
        height: "0.8em"
      },
      "& .MuiTab-wrapper": {
        fontSize: "0.8em"
      }
    }
  },
  "@media(max-width:414px)": {
    project: {
      width: 375,
      marginLeft: "5rem",
      marginBottom: "1rem"
    },
    projectTabs: {
      width: 375,
      marginRight: "2rem",
      "& .MuiTabs-scrollButtons": {
        display: "flex"
      },
      "& .MuiSvgIcon-root": {
        width: "0.8em",
        height: "0.8em"
      },
      "& .MuiTab-wrapper": {
        fontSize: "0.8em"
      }
    }
  },
  "@media(max-width:375px)": {
    title: {
      marginTop: 5,
      marginRight: 0,
      marginBottom: 0
    },
    project: {
      width: 350
    },
    projectTabs: {
      width: 350,
      marginLeft: "1rem",
      marginRight: 0,
      "& .MuiTabs-scrollButtons": {
        display: "flex"
      },
      "& .MuiSvgIcon-root": {
        width: "0.8em",
        height: "0.8em"
      },
      "& .MuiTab-wrapper": {
        fontSize: "0.8em"
      }
    }
  }
}));