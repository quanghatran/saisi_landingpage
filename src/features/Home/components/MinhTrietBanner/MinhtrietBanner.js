import React, { useState } from 'react';
import PropTypes from 'prop-types';
import bannerImage from '../../../../assets/images/mtns-01.jpg';
import useStyle from './style';
import Clear from '@material-ui/icons/Clear';
import { Link } from 'react-router-dom';

function MinhtrietBanner(props) {
  const [display, setDisplay] = useState(true);
  const classes = useStyle();
  return (
    display && (
      <div className={classes.contain}>
        <div
          className={classes.clearBtn}
          onClick={() => {
            setDisplay(false);
          }}
        >
          <Clear />
        </div>
        <Link to='/gioi-thieu-minh-triet-nhan-sinh'>
          <img className={classes.img} src={bannerImage} alt='banner'></img>
        </Link>
      </div>
    )
  );
}

MinhtrietBanner.propTypes = {};

export default MinhtrietBanner;
