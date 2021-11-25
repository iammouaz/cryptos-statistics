import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';

export default function LinearIndeterminate() {
  return (
    <Box sx={{ width: '100%' }}>
      <Typography variant="h2" gutterBottom component="div">Test Loading</Typography>
      <LinearProgress />
    </Box>
  );
}
