import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useStyles } from "./AboutMe.styles";
import { useHistory } from "react-router-dom"

const AboutMe = () => {
  const styles = useStyles();
  const history = useHistory();

  return (
    <Grid
      container
      direction="column"
      alignContent="center"
      justify="center"
      className={styles.root}
    >
      <Grid item lg={12} md={12}>
        <Grid container direction="row" justify="center">
          <Grid item lg={4}>
            <img
              src="/images/aboutme.jfif"
              alt="sam-kim"
              className={styles.img}
            />
          </Grid>
          <Grid item lg={4} className={styles.summaryContainer}>
            <Typography className={styles.title} variant="h6">
              <span className={styles.circle} />
              <div className={styles.titleContent}>ABOUT ME</div>
              <div className={styles.divider} />
            </Typography>
            <Typography variant="h6" className={styles.summary}>
              My name is Sam Kim. I am currently a fourth year computer science
              student finishing her studies at Simon Fraser University. I am
              passionate about designing and developing web applications, and
              have over a year experience of developing web apps.
              <br />
              <br />
              Besides programming, I love exploring new restaurants and cafés,
              and I also enjoy playing computer games.
            </Typography>
            <Button variant="contained" className={styles.button} onClick={() => {history.push("/projects")}}>View my projects</Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AboutMe;
