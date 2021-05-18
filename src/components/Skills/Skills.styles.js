import { makeStyles } from "@material-ui/core/styles";


export const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "80vh",
    paddingLeft: "27%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  skillCard: {
    width: theme.spacing(45),
    height: theme.spacing(45),
    marginLeft: 10,
    marginBottom: 10,
    "&:hover": {
      backgroundColor: "#E5C600",
    }
  },
  skillCardContent: {
    padding: theme.spacing(4)
  },
  icon: {
    fontSize: theme.spacing(4)
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
  skillPaper: {
    width: theme.spacing(25),
    height: theme.spacing(25)
  },
  button: {
    marginTop: "1.5rem", 
    background: "#E5C600", 
    float:"right"
  },
  "@media(max-width:540px)": {
    summary: {
      fontSize: "1rem"
    },
    root: {
      paddingLeft: 0
    },
    skills: {
      marginLeft: "15vw"
    }
  },
  "@media(max-width:375px)": {
    root: {
      padding: 15,
      width: "100%"
    },
    title: {
      marginTop: 10,
      marginRight: 0
    },
    skills: {
      marginLeft: 0
    }
  }
}));