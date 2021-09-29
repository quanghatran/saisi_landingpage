import React from 'react';
import pdf1 from '../../../assets/images/pdf/pdf1.jpg';
import pdf2 from '../../../assets/images/pdf/pdf2.jpg';
import pdf3 from '../../../assets/images/pdf/pdf3.jpg';
import pdf4 from '../../../assets/images/pdf/pdf4.jpg';
import pdf5 from '../../../assets/images/pdf/pdf5.jpg';
import pdf6 from '../../../assets/images/pdf/pdf6.jpg';
import pdf7 from '../../../assets/images/pdf/pdf7.jpg';
import pdf8 from '../../../assets/images/pdf/pdf8.jpg';
import pdf9 from '../../../assets/images/pdf/pdf9.jpg';
import pdf10 from '../../../assets/images/pdf/pdf10.jpg';
import pdf11 from '../../../assets/images/pdf/pdf11.jpg';
import pdf12 from '../../../assets/images/pdf/pdf12.jpg';
import pdf13 from '../../../assets/images/pdf/pdf13.jpg';
import pdf14 from '../../../assets/images/pdf/pdf14.jpg';
import pdf15 from '../../../assets/images/pdf/pdf15.jpg';
import pdf16 from '../../../assets/images/pdf/pdf16.jpg';
import pdf17 from '../../../assets/images/pdf/pdf17.jpg';
import pdf18 from '../../../assets/images/pdf/pdf18.jpg';
import pdf19 from '../../../assets/images/pdf/pdf19.jpg';
import pdf20 from '../../../assets/images/pdf/pdf20.jpg';
import pdf21 from '../../../assets/images/pdf/pdf21.jpg';
import pdf22 from '../../../assets/images/pdf/pdf22.jpg';
import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
  contain: {
    textAlign: 'center',
    '& h1': {
      padding: '30px',
      color: '#721b00',
      textTransform: 'uppercase',
      fontSize: '2.8rem',
    },
  },
  img: {
    width: '80%',
    margin: '15px auto',
    maxWidth: 1200,
    [theme.breakpoints.down('xs')]: {
      margin: '5px auto',
    },
  },
}));
const images = [
  pdf1,
  pdf2,
  pdf3,
  pdf4,
  pdf5,
  pdf6,
  pdf7,
  pdf8,
  pdf9,
  pdf10,
  pdf11,
  pdf12,
  pdf13,
  pdf14,
  pdf15,
  pdf16,
  pdf17,
  pdf18,
  pdf19,
  pdf20,
  pdf21,
  pdf22,
];
const BaseTech = () => {
  const classes = useStyle();
  return (
    <div className={classes.contain}>
      <h1>nền tảng công nghệ</h1>
      {images.map((image) => (
        <img className={classes.img} src={image} />
      ))}
    </div>
  );
};

export default BaseTech;
