import { Grid } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core';
import webStock1 from './../../../../../assets/images/webstock1.png';
import webStock2 from './../../../../../assets/images/webstock2.png';
import webStock3 from './../../../../../assets/images/webstock3.png';

const useStyle = makeStyles((theme) => ({
  contain: {
    width: ' 90%',
    padding: '50px',
    maxWidth: 1200,
    margin: '50px auto',
    backgroundImage: 'linear-gradient(0deg,#721b00, rgba(114, 27, 0, .5)) ',
    ' & h1': {
      color: '#fff',
      textAlign: 'center',
      marginBottom: '40px',
    },
    [theme.breakpoints.down('xs')]: {
      padding: 20,
    },
  },
  webStock: {
    width: ' 100%',
  },
}));
const IMAGES = [webStock1, webStock2, webStock3];
const WebsitesStock = () => {
  const classes = useStyle();
  return (
    <div className={classes.contain}>
      <h1>KHO GIAO DIỆN WEBSITE</h1>
      <Grid container spacing={3} justifyContent='center'>
        {IMAGES.map((image) => (
          <Grid item md={4} sm={6} xs={12}>
            <img src={image} className={classes.webStock} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default WebsitesStock;
