import { makeStyles } from "@material-ui/core/styles";


export const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "80vh",
    paddingLeft: "25%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  experience: {
    width: "55vw"
  },
  timeline: {
    "& .MuiTimelineContent-root": {
      flex: "none"
    },
    "& .MuiTimelineItem-missingOppositeContent:before": {
      display: "none"
    },
    "& .MuiTimelineDot-defaultGrey": {
      backgroundColor: "#97BC62FF",
      boxShadow: "none"
    },
    "& .MuiTimelineConnector-root": {
      backgroundColor: "#97BC62FF",
    }
  },
  time: {
    width: "300px",
    textAlign: "right"
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
  "@media(max-width:1024px)": {
    root: {
      paddingLeft: "40%"
    },
    timeContent: {
      fontSize: "1rem"
    },
    time: {
      width: "75px"
    }
  },
  "@media(max-width:540px)": {
    summary: {
      fontSize: "1rem"
    },
    root: {
      paddingLeft: 70
    },
    experience: {
      width: "60vw"
    },
    time: {
      width: "75px",
    },
    company: {
      fontSize: "1.25rem"
    },
    timeContent: {
      fontSize: "1rem"
    },
    description: {
      fontSize: "1rem"
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
    timeline: {
      "& .MuiTimelineContent-root": {
        paddingTop: 16,
        paddingRight: 0
      }
    }
  }
}));