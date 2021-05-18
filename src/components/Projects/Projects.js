import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import LocalHospitalOutlinedIcon from "@material-ui/icons/LocalHospitalOutlined";
import FastfoodOutlinedIcon from "@material-ui/icons/FastfoodOutlined";
import DateRangeOutlinedIcon from "@material-ui/icons/DateRangeOutlined";
import SupervisedUserCircleOutlinedIcon from "@material-ui/icons/SupervisedUserCircleOutlined";
import FitnessCenterOutlinedIcon from "@material-ui/icons/FitnessCenterOutlined";
import { useState } from "react";
import { useStyles } from "./Projects.styles";
import { SchedulerBuddyContent, CBRContent, FoodBookContent, VolunTutorContent, FitnessBuddyContent } from "./ProjectContent";

const Projects = () => {
  const styles = useStyles();
  const [tabValue, setTabValue] = useState(0);

  return (
    <Box className={styles.root}>
      <Typography className={styles.title} variant="h6">
        <span className={styles.circle} />
        <div className={styles.titleContent}>PORTFOLIO</div>
        <div className={styles.divider} />
      </Typography>
      <Tabs
        className={styles.projectTabs}
        value={tabValue}
        onChange={(_, newValue) => setTabValue(newValue)}
        scrollButtons="auto"
        variant="scrollable"
        classes={{ indicator: styles.indicator }}
      >
        <Tab
          icon={<DateRangeOutlinedIcon />}
          label="Scheduler Buddy"
          className={styles.schedulerBuddyTab}
        />
        <Tab icon={<LocalHospitalOutlinedIcon />} label="CBR" />
        <Tab icon={<FastfoodOutlinedIcon />} label="FoodBook" />
        <Tab icon={<SupervisedUserCircleOutlinedIcon />} label="VolunTutor" />
        <Tab icon={<FitnessCenterOutlinedIcon />} label="Fitness Buddy" />
      </Tabs>
      { tabValue === 0 ? <SchedulerBuddyContent /> : <></> }
      { tabValue === 1 ? <CBRContent /> : <></> }
      { tabValue === 2 ? <FoodBookContent /> : <></> }
      { tabValue === 3 ? <VolunTutorContent /> : <></>}
      { tabValue === 4 ? <FitnessBuddyContent /> : <></> }
    </Box>
  );
};

export default Projects;
