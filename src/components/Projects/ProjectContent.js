import { useState } from "react";
import { useStyles } from "./Projects.styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ZoomOutMapIcon from "@material-ui/icons/ZoomOutMap";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import CBRAward from "./cbr_award.pdf";

const schedulerBuddy = [
  {
    img: "/images/schedulerBuddy/1.png",
    title: "landing page",
  },
  {
    img: "/images/schedulerBuddy/2.png",
    title: "dashboard",
  },
  {
    img: "/images/schedulerBuddy/3.png",
    title: "to-do list",
  },
  {
    img: "/images/schedulerBuddy/4.png",
    title: "add to-do",
  },
  {
    img: "/images/schedulerBuddy/5.png",
    title: "calendar month view",
  },
  {
    img: "/images/schedulerBuddy/6.png",
    title: "calendar week view",
  },
  {
    img: "/images/schedulerBuddy/7.png",
    title: "calendar day view",
  },
  {
    img: "/images/schedulerBuddy/8.png",
    title: "add calendar event",
  },
  {
    img: "/images/schedulerBuddy/9.png",
    title: "settings page",
  },
];

const cbrImages = [
  {
    img: "/images/CBR/1.png",
    title: "login"
  },
  {
    img: "/images/CBR/2.png",
    title: "client list"
  },
  {
    img: "/images/CBR/3.png",
    title: "add client"
  },
  {
    img: "/images/CBR/4.png",
    title: "client details"
  },
  {
    img: "/images/CBR/5.png",
    title: "client details 2"
  },
  {
    img: "/images/CBR/6.png",
    title: "client risk history"
  },
  {
    img: "/images/CBR/7.png",
    title: "client stats"
  },
  {
    img: "/images/CBR/8.png",
    title: "admin list"
  },
  {
    img: "/images/CBR/9.png",
    title: "baseline survey"
  },
];

const foodbook = [
  {
    img: "/images/FoodBook/1.png",
    title: "landing"
  },
  {
    img: "/images/FoodBook/2.png",
    title: "login"
  },
  {
    img: "/images/FoodBook/3.png",
    title: "navbar"
  },
  {
    img: "/images/FoodBook/4.png",
    title: "dashboard"
  },
  {
    img: "/images/FoodBook/5.png",
    title: "food search"
  },
  {
    img: "/images/FoodBook/6.png",
    title: "food details"
  },
  {
    img: "/images/FoodBook/7.png",
    title: "user settings"
  },
  {
    img: "/images/FoodBook/8.png",
    title: "user goals"
  },
  {
    img: "/images/FoodBook/9.png",
    title: "food detection"
  },
];

const fitnessBuddy = [
  {
    img: "/images/fitnessBuddy/1.png",
    title: "landing"
  },
  {
    img: "/images/fitnessBuddy/2.png",
    title: "trainser register"
  },
  {
    img: "/images/fitnessBuddy/3.png",
    title: "user register"
  },
  {
    img: "/images/fitnessBuddy/4.png",
    title: "login"
  },
  {
    img: "/images/fitnessBuddy/5.png",
    title: "dashboard"
  },
  {
    img: "/images/fitnessBuddy/6.png",
    title: "workout"
  },
  {
    img: "/images/fitnessBuddy/7.png",
    title: "nutrition"
  },
  {
    img: "/images/fitnessBuddy/8.png",
    title: "find trainer"
  },
  {
    img: "/images/fitnessBuddy/9.png",
    title: "chatroom"
  },
];

const voluntutor = [
  {
    img: "/images/voluntutor/1.png",
    title: "landing"
  }
];

export const SchedulerBuddyContent = () => {
  const styles = useStyles();
  const [imageItem, setImageItem] = useState(schedulerBuddy[0]);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const ImageDialog = (props) => {
    return (
      <Dialog open={isOpen} onClose={handleClose} className={styles.imgDialog}>
        <DialogContent style={{ width: "fit-content" }}>
          <img src={props.image.img} alt={props.image.title} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    );
  };

  return (
    <>
      <Grid
        container
        justify="center"
        alignContent="center"
        className={styles.project}
        direction="column"
      >
        <Grid item className={styles.projectSummary}>
          <Grid
            container
            direction="row"
            justify="center"
            className={styles.gallery}
          >
            {schedulerBuddy.map((img) => (
              <div
                className={styles.imageContainer}
                onClick={() => {
                  setImageItem(img);
                  handleOpen();
                }}
              >
                <ZoomOutMapIcon className={styles.imgHoverIcon} />
                <Typography variant="subtitle2" className={styles.viewImage}>
                  View Image
                </Typography>
                <img
                  alt={img.title}
                  src={img.img}
                  className={styles.projectImage}
                />
              </div>
            ))}
          </Grid>

          <Typography variant="h6">
            Scheduler Buddy is a MERN stack scheduler application developed to
            help users visualize their tasks. Its key features include: a to-do
            list with prioritization and deadline, and a calendar.
          </Typography>
          <Grid
            container
            direction="row"
            justify="space-between"
            className={styles.buttonContainer}
          >
            <Button
              variant="contained"
              onClick={() =>
                window.open("https://github.com/jhk29/schedulerBuddy")
              }
            >
              View Source Code
            </Button>
            <Button
              variant="contained"
              className={styles.demoBtn}
              onClick={() =>
                window.open("https://scheduler-buddy.herokuapp.com/")
              }
            >
              View Demo
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <ImageDialog image={imageItem} />
    </>
  );
};

export const CBRContent = () => {
  const styles = useStyles();
  const [imageItem, setImageItem] = useState(schedulerBuddy[0]);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const ImageDialog = (props) => {
    return (
      <Dialog open={isOpen} onClose={handleClose} className={styles.imgDialog}>
        <DialogContent style={{ width: "fit-content" }}>
          <img src={props.image.img} alt={props.image.title} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    );
  };

  return (
    <>
      <Grid
        container
        justify="center"
        alignContent="center"
        className={styles.project}
        direction="column"
      >
        <Grid item className={styles.projectSummary}>
          <Grid
            container
            direction="row"
            justify="center"
            className={styles.gallery}
          >
            {cbrImages.map((img) => (
              <div
                className={styles.imageContainer}
                onClick={() => {
                  setImageItem(img);
                  handleOpen();
                }}
              >
                <ZoomOutMapIcon className={styles.imgHoverIcon} />
                <Typography variant="subtitle2" className={styles.viewImage}>
                  View Image
                </Typography>
                <img
                  alt={img.title}
                  src={img.img}
                  className={styles.projectImage}
                />
              </div>
            ))}
          </Grid>

          <Typography variant="h6">
            CBR is a virtual care web application that helps non-profit
            organization Hope Health Action manage their clients. It was
            developed in a small agile team for a school project using React
            with TypeScript and Material UI for front-end, and Django for the
            back-end. The project was awared the customer's choice.
          </Typography>
          <Grid
            container
            direction="row"
            justify="flex-end"
            className={styles.buttonContainer}
          >
            <a href={CBRAward} download style={{ textDecoration: "none" }}>
              <Button variant="contained" className={styles.awardBtn}>
                View Award
              </Button>
            </a>
          </Grid>
        </Grid>
      </Grid>
      <ImageDialog image={imageItem} />
    </>
  );
};

export const FoodBookContent = () => {
  const styles = useStyles();
  const [imageItem, setImageItem] = useState(schedulerBuddy[0]);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const ImageDialog = (props) => {
    return (
      <Dialog open={isOpen} onClose={handleClose} className={styles.imgDialog}>
        <DialogContent style={{ width: "fit-content" }}>
          <img src={props.image.img} alt={props.image.title} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    );
  };

  return (
    <>
      <Grid
        container
        justify="center"
        alignContent="center"
        className={styles.project}
        direction="column"
      >
        <Grid item className={styles.projectSummary}>
          <Grid
            container
            direction="row"
            justify="center"
            className={styles.gallery}
          >
            {foodbook.map((img) => (
              <div
                className={styles.imageContainer}
                onClick={() => {
                  setImageItem(img);
                  handleOpen();
                }}
              >
                <ZoomOutMapIcon className={styles.imgHoverIcon} />
                <Typography variant="subtitle2" className={styles.viewImage}>
                  View Image
                </Typography>
                <img
                  alt={img.title}
                  src={img.img}
                  className={styles.projectImage}
                />
              </div>
            ))}
          </Grid>

          <Typography variant="h6">
            FoodBook is a mobile app low-fidelit prototype created using Figma.
            Worked with three other students to gather and document business,
            stakeholder, software, and system requirements. Also designed and
            drew UML, classes, and case diagrams to create the final version of
            the application's prototype.
          </Typography>
          <Grid
            container
            direction="row"
            justify="space-between"
            className={styles.buttonContainer}
          >
            <Button
              variant="contained"
              onClick={() =>
                window.open(
                  "https://drive.google.com/drive/folders/1pOzKAU3Lo-zyxlovjNBkzBhZ3RigbL0Z?usp=sharing"
                )
              }
            >
              View Documentation
            </Button>
            <Button
              onClick={() =>
                window.open(
                  "https://www.figma.com/proto/9L2MPPsHKKMRf23Qa4g8JM/CMPT475?node-id=166%3A97&scaling=min-zoom"
                )
              }
              variant="contained"
              className={styles.awardBtn}
            >
              View Prototype
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <ImageDialog image={imageItem} />
    </>
  );
};

export const VolunTutorContent = () => {
  const styles = useStyles();
  const [imageItem, setImageItem] = useState(schedulerBuddy[0]);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const ImageDialog = (props) => {
    return (
      <Dialog open={isOpen} onClose={handleClose} className={styles.imgDialog}>
        <DialogContent style={{ width: "fit-content" }}>
          <img src={props.image.img} alt={props.image.title} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    );
  };

  return (
    <>
      <Grid
        container
        justify="center"
        alignContent="center"
        className={styles.project}
        direction="column"
      >
        <Grid item className={styles.projectSummary}>
          <Grid
            container
            direction="row"
            justify="center"
            className={styles.gallery}
          >
            {voluntutor.map((img) => (
              <div
                className={styles.imageContainer}
                onClick={() => {
                  setImageItem(img);
                  handleOpen();
                }}
              >
                <ZoomOutMapIcon className={styles.imgHoverIcon} />
                <Typography variant="subtitle2" className={styles.viewImage}>
                  View Image
                </Typography>
                <img
                  alt={img.title}
                  src={img.img}
                  className={styles.projectImage}
                />
              </div>
            ))}
          </Grid>

          <Typography variant="h6">
            VolunTutor is a web application intended to help users find tutors
            conveninently. It was developed using Python with Django and
            deployed through AWS Elastic Beanstalk. Amazon RDS for PostgreSQL
            was used as the database engine, and Amazon S3 cloud storage to
            store static files.
          </Typography>
        </Grid>
      </Grid>
      <ImageDialog image={imageItem} />
    </>
  );
};

export const FitnessBuddyContent = () => {
  const styles = useStyles();
  const [imageItem, setImageItem] = useState(schedulerBuddy[0]);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const ImageDialog = (props) => {
    return (
      <Dialog open={isOpen} onClose={handleClose} className={styles.imgDialog}>
        <DialogContent style={{ width: "fit-content" }}>
          <img src={props.image.img} alt={props.image.title} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    );
  };

  return (
    <>
      <Grid
        container
        justify="center"
        alignContent="center"
        className={styles.project}
        direction="column"
      >
        <Grid item className={styles.projectSummary}>
          <Grid
            container
            direction="row"
            justify="center"
            className={styles.gallery}
          >
            {fitnessBuddy.map((img) => (
              <div
                className={styles.imageContainer}
                onClick={() => {
                  setImageItem(img);
                  handleOpen();
                }}
              >
                <ZoomOutMapIcon className={styles.imgHoverIcon} />
                <Typography variant="subtitle2" className={styles.viewImage}>
                  View Image
                </Typography>
                <img
                  alt={img.title}
                  src={img.img}
                  className={styles.projectImage}
                />
              </div>
            ))}
          </Grid>
          <Typography variant="h6">
            Fitness Buddy is a fitness tracker web application developed using
            Node.js, Express.js, HTML5, and CSS3. The application was deployed
            using Heroku. It allows users to find nearby gyms using Google Maps
            API, look up nutrition facts and exercises for different muscles,
            and also has a realtime chatroom.
          </Typography>
        </Grid>
        <Grid
          container
          direction="row"
          justify="flex-end"
          className={styles.buttonContainer}
        >
          <Button
            variant="contained"
            onClick={() =>
              window.open("https://ancient-sierra-47830.herokuapp.com/")
            }
            className={styles.demoBtn}
          >
            View Demo
          </Button>
        </Grid>
      </Grid>
      <ImageDialog image={imageItem} />
    </>
  );
};
