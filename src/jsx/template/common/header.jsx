import React from 'react';
import { HashLink as RouterLink } from 'react-router-hash-link';

import { Container, Grid, Box, Button } from '@mui/material';
import { grey } from '@mui/material/colors';

import RouterList from '../../router';

const template = () => {
  return (
    <>
      <Box sx={{ py: 6, backgroundColor: grey[50] }}>
        <Container>
          <Grid container spacing={4} direction="row">
            <Grid item>
              <Button variant="text" to={RouterList.home._0} component={RouterLink} >Home</Button>
            </Grid>
            <Grid item>
              <Button variant="text" to={RouterList.product._0} component={RouterLink}>Products</Button>
            </Grid>
            <Grid item>
              <Button variant="text" to={RouterList.service._0} component={RouterLink}>Services</Button>
            </Grid>
            <Grid item>
              <Button variant="text" to={RouterList.about.mission} component={RouterLink}>Mission</Button>
            </Grid>
            <Grid item>
              <Button variant="text" to={RouterList.about.leadershipteam} component={RouterLink}>Leadership Team</Button>
            </Grid>
            <Grid item>
              <Button variant="text" to={RouterList.about.career} component={RouterLink}>Career</Button>
            </Grid>
            <Grid item>
              <Button variant="text" to={RouterList.media.newsroom} component={RouterLink}>Newsroom</Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default template;