import { Grid } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import advantage from './../../../../../assets/images/advantage.png';

const useStyle = makeStyles((theme) => ({
  contain: {
    width: '90%',
    maxWidth: 1200,
    padding: 40,
    margin: '50px auto',
    backgroundColor: '#721b00',
    '& h1': {
      color: '#fff',
      marginBottom: 40,
    },
    '& span': {
      fontSize: 14,
    },
    '& li': {
      listStyle: 'none',
      marginBottom: 15,
      color: '#fff',
    },
    [theme.breakpoints.down('xs')]: {
      padding: 20,
    },
  },
  checkedIcon: {
    backgroundColor: 'purple',
    fontSize: 25,
    padding: '3px',
    marginRight: '10px',
    transform: 'translateY(20%)',
  },
  img: {
    width: '100%',
    height: 'auto',
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
}));

const Advantages = () => {
  const classes = useStyle();
  return (
    <div className={classes.contain}>
      <Grid container>
        <Grid item md={5}>
          <div>
            <h1>ƯU ĐIỂM NỔI BẬT</h1>
            <ul>
              <li>
                <CheckCircleOutlineIcon className={classes.checkedIcon} />
                <span>giao diện đẹp, dễ dùng </span>
              </li>
              <li>
                <CheckCircleOutlineIcon className={classes.checkedIcon} />
                <span>Toàn quyền source code, không giới hạn phân quyền.</span>
              </li>
              <li>
                <CheckCircleOutlineIcon className={classes.checkedIcon} />
                <span>Nội dung thay đổi trên giao diện </span>
              </li>
              <li>
                <CheckCircleOutlineIcon className={classes.checkedIcon} />
                <span>Nhiều tính năng đầy đủ</span>
              </li>
            </ul>
          </div>
        </Grid>
        <Grid item md={7}>
          <img src={advantage} className={classes.img} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Advantages;
