import React from 'react';
import { Grid, Divider } from '@mui/material';
import { purple } from '@mui/material/colors';

import { PageHero, PageContent } from '../../component/page';

// Page Imports
import _0 from './_0_1/_0';
import _1 from './_0_1/_1';
import _2 from './_0_1/_2';
import _3 from './_0_1/_3';
import _4 from './_0_1/_4';
import _5 from './_0_1/_5';
import _6 from './_0_1/_6';

const template = () => {
  return (
    <>
      <PageHero color={purple}>
        <_0 />
      </PageHero>
      <PageContent>
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
      </PageContent>
    </>
  );
}

export default template;