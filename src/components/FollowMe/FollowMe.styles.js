import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "95vh",
    marginLeft: 10
  },
  githubBtn: {
    marginBottom: "-10px"
  },
  text: {
    writingMode: "vertical-lr",
    transform: "rotate(180deg)",
    padding: 5
  },
  "@media(max-width:540px)": {
    root: {
      display: "none"
    }
  }
}));