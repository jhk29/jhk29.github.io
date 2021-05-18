import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { useStyles } from "./Skills.styles";
import PaletteOutlinedIcon from "@material-ui/icons/PaletteOutlined";
import CodeOutlinedIcon from "@material-ui/icons/CodeOutlined";
import BrushOutlinedIcon from "@material-ui/icons/BrushOutlined";
import ComputerOutlinedIcon from "@material-ui/icons/ComputerOutlined";
import CloudOutlinedIcon from "@material-ui/icons/CloudOutlined";
import StorageOutlinedIcon from "@material-ui/icons/StorageOutlined";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

const uiSkills = ["Figma", "AxureRP8"];
const frontendSkills = ["React.js", "Angular.js", "Boostrap", "Material-UI"];
const backendSkills = ["Node.js", "Express.js", "Django"];
const databaseSkills = ["SQLite", "PostgreSQL", "MySQL", "MongoDB"];
const cloudSkills = ["Amazon Cloud Service"];
const osSkills = ["Windows", "Linux", "Mac"];

const Skills = () => {
  const styles = useStyles();

  return (
    <Box className={styles.root}>
      <Typography className={styles.title} variant="h6">
        <span className={styles.circle} />
        <div className={styles.titleContent}>MY SKILLS</div>
        <div className={styles.divider} />
      </Typography>
      <Grid container justify="center" className={styles.skills}>
        <Card variant="outlined" className={styles.skillCard}>
          <CardContent className={styles.skillCardContent}>
            <BrushOutlinedIcon className={styles.icon} />
            <Typography variant="h6" className={styles.boldText}>
              WEB DESIGN
            </Typography>
            <List>
              {uiSkills.map((skill) => (
                <ListItem>
                  <Typography variant="h6">• {skill}</Typography>
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>

        <Card variant="outlined" className={styles.skillCard}>
          <CardContent className={styles.skillCardContent}>
            <PaletteOutlinedIcon className={styles.icon} />
            <Typography variant="h6" className={styles.boldText}>
              FRONT-END
            </Typography>
            <List>
              {frontendSkills.map((skill) => (
                <ListItem>
                  <Typography variant="h6">• {skill}</Typography>
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>

        <Card variant="outlined" className={styles.skillCard}>
          <CardContent className={styles.skillCardContent}>
            <CodeOutlinedIcon className={styles.icon} />
            <Typography variant="h6" className={styles.boldText}>
              BACK-END
            </Typography>
            <List>
              {backendSkills.map((skill) => (
                <ListItem>
                  <Typography variant="h6">• {skill}</Typography>
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>

        <Card variant="outlined" className={styles.skillCard}>
          <CardContent className={styles.skillCardContent}>
            <StorageOutlinedIcon className={styles.icon} />
            <Typography variant="h6" className={styles.boldText}>
              DATABASE
            </Typography>
            <List>
              {databaseSkills.map((skill) => (
                <ListItem>
                  <Typography variant="h6">• {skill}</Typography>
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>

        <Card variant="outlined" className={styles.skillCard}>
          <CardContent className={styles.skillCardContent}>
            <CloudOutlinedIcon className={styles.icon} />
            <Typography variant="h6" className={styles.boldText}>
              CLOUD
            </Typography>
            <List>
              {cloudSkills.map((skill) => (
                <ListItem>
                  <Typography variant="h6">• {skill}</Typography>
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>

        <Card variant="outlined" className={styles.skillCard}>
          <CardContent className={styles.skillCardContent}>
            <ComputerOutlinedIcon className={styles.icon} />
            <Typography variant="h6" className={styles.boldText}>
              OPERATING SYSTEMS
            </Typography>
            <List>
              {osSkills.map((skill) => (
                <ListItem>
                  <Typography variant="h6">• {skill}</Typography>
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>
      </Grid>
    </Box>
  );
};

export default Skills;
