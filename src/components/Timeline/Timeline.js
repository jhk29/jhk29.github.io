import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { useStyles } from "./Timeline.styles";
import Timeline from "@material-ui/lab/Timeline";
import { TimelineSeparator, TimelineItem, TimelineConnector, TimelineContent, TimelineDot } from "@material-ui/lab";
import SchoolIcon from '@material-ui/icons/School';
import LocalCafeIcon from '@material-ui/icons/LocalCafe';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import PublicIcon from '@material-ui/icons/Public';
import CodeIcon from '@material-ui/icons/Code';

const TimelinePage = () => {
  const styles = useStyles();

  return (
    <Box className={styles.root}>
      <Typography  className={styles.title} variant="h6">
        <span className={styles.circle} />
        <div className={styles.titleContent}>EXPERIENCES</div>
        <div className={styles.divider} />
      </Typography>
      <Timeline align="left" className={styles.timeline}>
        <TimelineItem>
          <TimelineContent className={styles.time}>
            <Typography variant="h5" color="textSecondary" className={styles.timeContent}>
              03/2015
            </Typography>
          </TimelineContent>
          <TimelineSeparator>
            <TimelineDot>
              <PublicIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent className={styles.experience}>
              <Typography variant="h5" component="h1" className={styles.company}>
                Telus World of Science
              </Typography>
              <Typography variant="subtitle1" component="h6">Science Facilitator Assistant</Typography>
              <Typography variant="h6" className={styles.description}>
                • Provided a warm and inviting atmosphere for guests through exemplifying excellent customer service.
              </Typography>
              <Typography variant="h6" className={styles.description}>
                • Exhibited perseverance and the ability to work well without supervision through completing designated tasks throughout each 8 hour shift.
              </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
        <TimelineContent className={styles.time}>
          <Typography variant="h5" color="textSecondary" className={styles.timeContent}>
            07/2016 - 08/2017
          </Typography>
        </TimelineContent>
        <TimelineSeparator>
          <TimelineDot>
            <FastfoodIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className={styles.experience}>
            <Typography variant="h5" component="h1" className={styles.company}>
              Daeji Pork Cutlet House
            </Typography>
            <Typography variant="subtitle1" component="h6">Waitress</Typography>
            <Typography variant="h6" className={styles.description}>
              • Cleaned tables and floors of the dining area, ensuring that customers had a pleasant, hygenic dining experience.
            </Typography>
            <Typography variant="h6" className={styles.description}>
              • Worked closely with restaurant staff to ensure that orders were served efficiently.
            </Typography>
            <Typography variant="h6" className={styles.description}>
              • Trained incoming staff of the restaurant procedures, cultures, and practices.
            </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineContent className={styles.time}>
          <Typography variant="h5" color="textSecondary" className={styles.timeContent}>
            09/2016
          </Typography>
        </TimelineContent>
        <TimelineSeparator>
          <TimelineDot>
            <SchoolIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
            <Typography variant="h5" component="h1" className={styles.company}>
              Simon Fraser University
            </Typography>
            <Typography variant="subtitle1" component="h6">Started school @ SFU</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineContent className={styles.time}>
          <Typography variant="h5" color="textSecondary" className={styles.timeContent}>
            07/2018
          </Typography>
        </TimelineContent>
        <TimelineSeparator>
          <TimelineDot>
            <LocalCafeIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className={styles.experience}>
            <Typography variant="h5" component="h1" className={styles.company}>
              Creekside Coffee Factory
            </Typography>
            <Typography variant="subtitle1" component="h6">Waitress</Typography>
            <Typography variant="h6" className={styles.description}>
              • Demonstrated the ability to cooperate in a busy, fast-paced environment through verifying and supervising all transactions with care.
            </Typography>
            <Typography variant="h6" className={styles.description}>
              • Created a positive atmosphere through providing excellent customer service, stimulating energy and enthusiasm amongst workers and customers.
            </Typography>
            <Typography variant="h6" className={styles.description}>
              • Assist in training 4 new baristas, ensuring attention to detail and comprehensive understanding of café methodology and practices.
            </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineContent className={styles.time}>
          <Typography variant="h5" color="textSecondary" className={styles.timeContent}>
            07/2019 - 12/2020
          </Typography>
        </TimelineContent>
        <TimelineSeparator>
          <TimelineDot>
            <CodeIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className={styles.experience}>
            <Typography variant="h5" component="h1" className={styles.company}>
              WelTel Incorporation
            </Typography>
            <Typography variant="subtitle1" component="h6">Full Stack Developer</Typography>
            <Typography variant="h6" className={styles.description}>
              • Worked with an established team of developers and interacted with product owners to develop a web-based virtual care system using Angular.js, MySQL, Node.js, and Express.js.
            </Typography>
            <Typography variant="h6" className={styles.description}>
              • Created prototypes for several pages of the web application, and implemented the design with Angular.js.
            </Typography>
            <Typography variant="h6" className={styles.description}>
              • Hotfixed and reported bugs with Jira to ensure fast response time in customer inconveniences.
            </Typography>
            <Typography variant="h6" className={styles.description}>
              • Wrote end-to-end tests with Puppeteer and Jest to simulate a real end-user performing a typical workflow to ensure that all application functionalities were working without bugs.
            </Typography>
        </TimelineContent>
      </TimelineItem>
      </Timeline>
    </Box>
  );
};

export default TimelinePage;
