import Box from "@material-ui/core/Box";

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { useStyles } from "./FollowMe.styles";

const FollowMe = () => {
  const styles = useStyles(); 
  return (
    <Box className={styles.root}>
      <IconButton className={styles.githubBtn} onClick={() => window.open("https://github.com/jhk29")}><GitHubIcon /></IconButton>
      <br />
      <IconButton onClick={() => window.open("https://www.linkedin.com/in/sam-kim-775435198/")}><LinkedInIcon /></IconButton>
      <Typography className={styles.text}> Follow Me ______ </Typography>
    </Box>
  )
}

export default FollowMe;