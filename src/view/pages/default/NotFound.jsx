import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: theme.spacing(3)
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
}));

export default function NotFound() {
  const classes = useStyles();
  const textBody = `The page you&'re looking for doesn't exist`;

  return (
    <div className={classes.root}>
      <Paper className={classes.content}>
        <Typography variant="h1" component="h2" gutterBottom>
          Page Not Found
        </Typography>
        <Typography variant="body1" gutterBottom>
          {textBody}
        </Typography>
      </Paper>
    </div>
  );
}
