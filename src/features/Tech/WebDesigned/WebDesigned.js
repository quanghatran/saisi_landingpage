import React from 'react';
import banner from './../../../assets/images/webds.jpg';
import { makeStyles } from '@material-ui/core';
import WhyChooseSatsi from './Components/WhyChooseSatsi/WhyChooseSatsi';
import OurServices from './Components/OurServices/OurServices';
import DesignedProcess from './Components/DesignedProcess/DesignedProcess';
import Advantages from './Components/Advantages/Advantages';
import WebsitesStock from './Components/WebsitesStock/WebsitesStock';
const useStyle = makeStyles((theme) => ({
  bannerImg: {
    width: '100%',
  },
}));
const WebDesigned = () => {
  const classes = useStyle();
  return (
    <div>
      <img className={classes.bannerImg} src={banner} alt='' />
      <WhyChooseSatsi />
      <Advantages />
      <OurServices />
      <WebsitesStock />
      <DesignedProcess />
    </div>
  );
};

export default WebDesigned;
