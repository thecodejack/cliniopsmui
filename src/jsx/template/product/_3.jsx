import React from 'react';
import { Container, Box, Grid, Divider } from '@mui/material';
import { purple } from '@mui/material/colors';



// Page Imports
import _0 from './_3/_0';
import _1 from './_3/_1';
import _2 from './_3/_2';
import _3 from './_3/_3';
import _4 from './_3/_4';
import _5 from './_3/_5';
import _6 from './_3/_6';
import _7 from './_3/_7';
import _8 from './_3/_8';

const template = () => {
  return (
    <>
      <Box sx={{ py: 10, backgroundColor: purple[50] }}>
        <Container>
          <_0 />
        </Container>
      </Box>
      <Container>
        <Grid container spacing={10} direction='column' sx={{ py: 10 }}>
          <Grid item>
            <_1 />
          </Grid>
          <Grid item>
            <Divider className="co-divider" />
          </Grid>
          <Grid item>
            <_2 />
          </Grid>
          <Grid item>
            <Divider className="co-divider" />
          </Grid>
          <Grid item>
            <_3 />
          </Grid>
          <Grid item>
            <Divider className="co-divider" />
          </Grid>
          <Grid item>
            <_4 />
          </Grid>
          <Grid item>
            <Divider className="co-divider" />
          </Grid>
          <Grid item>
            <_5 />
          </Grid>
          <Grid item>
            <Divider className="co-divider" />
          </Grid>
          <Grid item>
            <_6 />
          </Grid>
          <Grid item>
            <Divider className="co-divider" />
          </Grid>
          <Grid item>
            <_7 />
          </Grid>
          <Grid item>
            <Divider className="co-divider" />
          </Grid>
          <Grid item>
            <_8 />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default template;