import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useTheme,
  Theme,
  makeStyles,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CheckIcon from '@material-ui/icons/Check';

import { ISubjectItem, ISubjectLesson, SubjectStatus } from '../../base/types/SubjectTypes';

interface ICourseAccordionProps {
  key: number;
  data: ISubjectItem;
  index: number;
  isCompleted: boolean;
}

const CourseAccordion: React.FC<ICourseAccordionProps> = ({ data, index, isCompleted }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(data.status === SubjectStatus.current);

  const theme = useTheme();

  // Effects;
  useEffect(() => {
    if (data.status === SubjectStatus.current) {
      setExpanded(true);
    }
    return () => {
      setExpanded(false);
    };
  }, [data.status]);

  // Handlers
  const handleExpand = (event: any, isExpanded: boolean) => {
    setExpanded(isExpanded);
  };

  const getLessonClasses = (status: SubjectStatus) => {
    switch (status) {
      case SubjectStatus.completed:
        return classes.doneLink;

      case SubjectStatus.current:
        return classes.activeLink;

      default:
        return classes.disableLink;
    }
  };

  // Render
  return (
    <Accordion key={index} className={classes.accordion} expanded={expanded} onChange={handleExpand}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} className={classes.accordionSummary}>
        <Box display="flex" justifyContent="space-between" alignItems="center" width="100%" pr={3}>
          <Typography className={classes.headTitle}>
            {index + 1}. {data.title}
          </Typography>
          {isCompleted && data.status === SubjectStatus.completed && (
            <Box className={classes.doneMarkText}>Выполнено!</Box>
          )}
        </Box>
      </AccordionSummary>

      <AccordionDetails>
        <Box display="flex" flexDirection="column">
          {data.lessons.map((lesson: ISubjectLesson, lessonIndex: number) => (
            <Box display="flex" alignItems="center" key={index} pl={3} mb={1}>
              <Box
                mr={1}
                height="24px"
                className={lesson.status === SubjectStatus.completed ? classes.showDoneIcon : classes.hideDoneIcon}
              >
                <CheckIcon color="secondary" />
              </Box>

              {lesson.status === SubjectStatus.blocked ? (
                <Typography variant="body2" className={getLessonClasses(lesson.status)}>
                  {index + 1}.{lessonIndex + 1}. {lesson.title}
                </Typography>
              ) : (
                <Link to={`/course/${data.id}/lesson/${lesson.id}`} className={getLessonClasses(lesson.status)}>
                  {index + 1}.{lessonIndex + 1}. {lesson.title}
                </Link>
              )}
            </Box>
          ))}
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  accordion: {
    width: '100%',
    marginBottom: theme.spacing(2),
    border: '1px solid rgba(0, 0, 0, 0.12)',
    borderRadius: '8px !important',
    boxShadow: 'none',
    transition: 'border-color .3s ease, box-shadow .3s ease',
    '&.Mui-expanded': {
      borderColor: 'transparent',
      boxShadow: '0px 3px 9px rgba(0, 0, 0, 0.08), 0px 1px 22px rgba(0, 0, 0, 0.04), 0px 6px 14px rgba(0, 0, 0, 0.05)',
    },
  },
  accordionSummary: {
    padding: '0',
    '& .MuiAccordionSummary-content': {
      order: 1,
    },
  },
  expandIconDense: {
    margin: 12,
    [theme.breakpoints.down('md')]: {
      margin: '8px 0',
    },
  },
  headTitle: {
    lineHeight: '20px',
  },
  doneMarkText: {
    color: theme.palette.surface.MediumEmphasis,
    padding: '9px 12px 7px',
    marginLeft: 16,
    border: '1px solid rgba(0, 0, 0, 0.12)',
    borderRadius: 8,
  },
  doneMarkIcon: {
    color: theme.palette.surface.MediumEmphasis,
    marginLeft: 16,
  },
  doneLink: {
    color: theme.palette.secondary.light,
  },
  activeLink: {
    color: theme.palette.primary.main,
  },
  disableLink: {
    color: 'rgba(0, 0, 0, 0.38)',
  },
  showDoneIcon: {
    visibility: 'visible',
  },
  hideDoneIcon: {
    visibility: 'hidden',
  },
}));

export default CourseAccordion;
