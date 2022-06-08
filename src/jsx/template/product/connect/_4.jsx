import React from 'react';
import { Grid, Typography } from '@mui/material';


import ImgEPro from '../../../../img/product/connect/epro.png';

const template = () => {
  return (
    <>
      <Grid container spacing={6}>
        <Grid item xs={6}>
          <Typography variant="h2" component="h2">
            ePRO/eDiary
          </Typography>
          <Typography sx={{ mt: 1 }}>
            CliniOps ePRO module is designed to engage patients via smartphones, allowing them to report patient data remotely and more frequently. It also allows for seamless site-patient interactions, with various patient engagement features. This module has proven to increase both patient retention and protocol adherence. Patient data can be collected on either a provisioned device or in a BYOD (Bring Your Own Device) model. It also supports automated alerts and notifications to both patients and sites, via SMS, email or push notifications, as configured.
          </Typography>
        </Grid>
        <Grid item xs={6} textAlign="center">
          <img
            src={`${ImgEPro}`}
            className='co-image'
            alt='ePRO/eDiary'
            title='ePRO/eDiary'
          />
        </Grid>
      </Grid>
    </>
  );
}

export default template;