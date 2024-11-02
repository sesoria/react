import React from 'react';
import { Grid } from '@mui/material';
import StreamCard from './StreamCard';

const StreamGrid = () => {
  return (
    <Grid container spacing={3}>
      {Array.from({ length: 9 }).map((_, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <StreamCard />
        </Grid>
      ))}
    </Grid>
  );
};

export default StreamGrid;
