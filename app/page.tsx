import Main from './Main';
import React from 'react';
import { exoFontFamily } from './ThemeProvider';

import { Grid, Typography } from '@mui/material';

export default async function Home() {
  return (
    <main>
      <Grid
        container
        justifyContent='center'
        columns={{ xs: 6, sm: 8, md: 8, lg: 12 }}
        height='90vh'
      >
        <Grid
          item
          xs={6}
          sx={{
            height: '100%',
            display: 'flex',
            alignItems: 'stretch',
            flexDirection: 'column',
          }}
        >
          <Typography
            variant='h4'
            component='h1'
            sx={{ fontFamily: exoFontFamily, marginTop: 2 }}
          >
            CitiBike Dock Data
          </Typography>

          <Main />
        </Grid>
      </Grid>
    </main>
  );
}
