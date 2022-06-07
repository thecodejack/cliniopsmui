import React from 'react';
import { Container, Box, Grid, Divider } from '@mui/material';
import { teal } from '@mui/material/colors';

// Page Imports
import _0 from './_0/_0';
import _1 from './_0/_1';
import _2 from './_0/_2';
import _3 from './_0/_3';

const template = () => {
  return (
    <>
      <Box sx={{ py: 10, backgroundColor: teal[50] }}>
        <Container>
          <_0 />
        </Container>
      </Box>
      <Container>
        <Grid container spacing={10} direction='column' sx={{ py: 10 }}>
          <Grid item>
            <_1 />
          </Grid>
          <Grid item >
            <Divider className="co-divider" />
          </Grid>
          <Grid item>
            <_2 />
          </Grid>
          <Grid item >
            <Divider className="co-divider" />
          </Grid>
          <Grid item>
            <_3 />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default template;