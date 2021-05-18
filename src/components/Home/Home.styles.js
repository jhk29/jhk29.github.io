import { makeStyles } from "@material-ui/core/styles";


export const useStyles = makeStyles((theme) => ({
  page: {
    paddingLeft: "25%",
  },
  root: {
    minHeight: "95vh",
    marginLeft: "10vw",
  },
  imgContainer: {
    minHeight: "88vh",
    marginLeft: "-7vw",
    zIndex: "-1000",
  },
  img: {
    borderRadius: 1000,
    zIndex: "-1000"
  },
  imgItem: {
    zIndex: "-1000"
  },
  name: {
    fontWeight: 700,
    marginBottom: "1.5rem",
  },
  nameContent: {
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
  button: {
    marginTop: "1rem"
  },
  boldFont: {
    fontWeight: 750,
    zIndex: 10000
  },
  "@media(max-width:768px)": {
    root: {
      marginLeft: "5em",
      minHeight: "90vh"
    },
    imgContainer: {
      display: "none"
    }
  },
  "@media(max-width:600px)": {
    root: {
      marginLeft: 0,
      minWidth: "20vh"
    },
    boldFont: {
      fontSize: "1.5rem"
    }
  }
}));