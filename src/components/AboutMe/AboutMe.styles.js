import { makeStyles } from "@material-ui/core/styles";


export const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "80vh",
    paddingLeft: "25%",
  },
  title: {
    fontWeight: 700,
    marginBottom: "1.5rem",
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
  img: {
    boxShadow: "0 4px 8px 0 rgb(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    height: "25rem"
  },
  summaryContainer: {
    marginRight: 20,
    marginTop: 50,
    marginLeft: 50
  },
  button: {
    marginTop: "1.5rem", 
    background: "#E5C600", 
    float:"right",
    "&:hover": {
      backgroundColor: "#C7B000"
    }
  },
  "@media(max-width:540px)": {
    img: {
      height: "15rem",
    },
    summary: {
      fontSize: "1rem"
    },
    root: {
      paddingLeft: 0
    }
  },
  "@media(max-width:375px)": {
    root: {
      padding: 15,
    },
    title: {
      marginTop: 10
    },
    summaryContainer: {
      marginTop: 0,
      marginRight: 0,
      marginLeft: 0
    },
    img: {
      height: "10rem",
    },
    
  }
}));