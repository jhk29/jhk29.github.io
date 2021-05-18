import Typography from "@material-ui/core/Typography";
import Typed from "react-typed";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "./Home.styles";
import { useHistory } from "react-router-dom";

const Home = () => {
  const styles = useStyles();
  const history = useHistory();

  return (
    <Grid container direction="row" className={styles.page}>
      <Grid item lg={4} md={12}>
        <Grid
          container
          direction="column"
          justify="center"
          className={styles.root}
        >
          <Grid item lg={12} xs={12}>
            <Typography className={styles.name} variant="h6">
              <span className={styles.circle} />
              <div className={styles.nameContent}>I'm Sam Kim</div>
            </Typography>
          </Grid>
          <Grid item lg={12} sm={10} xs={10}>
            <Typography variant="h3" className={styles.boldFont}>
              <span>I'm a </span>
              <Typed
                strings={[
                  "4th year CS student 🎓",
                  "web developer 👨‍💻",
                  "dog lover 🐶",
                  "foodie 🍕",
                ]}
                typeSpeed={40}
                backSpeed={50}
                loop
              />
            </Typography>
          </Grid>
          <Grid item lg={12} xs={12}>
            <Typography variant="h3" className={styles.boldFont}>
              Based in Vancouver
            </Typography>
          </Grid>
          <Grid item lg={12} xs={12}>
            <Button
              className={styles.button}
              onClick={() => {
                history.push("/about");
              }}
            >
              {" "}
              Read More{" "}
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item lg={8} md={12} xs={12} className={styles.imgItem}>
        <Grid
          container
          justify="center"
          alignContent="center"
          className={styles.imgContainer}
        >
          <Grid item>
            <img
              className={styles.img}
              src="/images/coding.jpg"
              alt="coding-icon"
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
