import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import arrows from './../../../../../assets/images/arrows.png';
import tap from './../../../../../assets/images/tap.png';
import tool from './../../../../../assets/images/tool.png';
import { makeStyles } from '@material-ui/core';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

const useStyle = makeStyles((theme) => ({
  contain: {
    width: '90%',
    maxWidth: 1200,
    margin: '50px auto',
    ' & h1': {
      textAlign: 'center',
      margin: '50px auto 100px',
      color: '#721b00',
    },
  },
  card: {
    // width: '75%',
    // margin: ' auto',
    height: '100%',
    padding: 30,
    border: ' 1px solid #e2e2e2',
    borderRadius: '25px',
    boxShadow: '3px 3px 1px #e2e2e2',
    backgroundColor: 'rgba(202, 228, 255, 0.2)',
    [theme.breakpoints.down('sm')]: {
      height: '85%',
      paddingBottom: 80,
    },
  },
  imgContain: {
    textAlign: 'center',
  },
  iconCard: {
    width: 100,
    height: 'auto',
    marginTop: '-100px',
    backgroundColor: '#fff',
    borderRadius: '50%',
    boxShadow: '0 -10px 10px #f6f6f6a6',
  },
  cardTitle: {
    textAlign: 'center',
    marginTop: 10,
  },
  list: {
    '& li': {
      listStyle: 'none',
      margin: ' 10px auto',
    },
    '& span': {
      fontSize: 14,
      color: '#777777',
    },
  },
  listIcon: {
    color: '#87D5B0',
    transform: 'translateY(25%)',
    marginRight: 10,
    fontSize: 18,
  },
}));
const WhyChooseSatsi = () => {
  const classes = useStyle();
  return (
    <div className={classes.contain}>
      <h1>LÝ DO MÀ BẠN NÊN CHỌN SATSI TECHNOLOGY</h1>
      <Grid container justifyContent='center' spacing={3}>
        <Grid item md={4} sm={6} xs={12} justifyContent='space-between'>
          <div className={classes.card}>
            <div className={classes.imgContain}>
              <img src={tap} className={classes.iconCard} />
            </div>
            <Typography variant='h4' className={classes.cardTitle}>
              Dễ dàng sử dụng{' '}
            </Typography>
            <div className={classes.list}>
              <ul>
                <li>
                  <CheckCircleOutlineIcon className={classes.listIcon} />{' '}
                  <span>không cần kiến thức code</span>
                </li>
                <li>
                  <CheckCircleOutlineIcon className={classes.listIcon} />{' '}
                  <span>có hướng dẫn cụ thể</span>
                </li>
                <li>
                  <CheckCircleOutlineIcon className={classes.listIcon} />{' '}
                  <span>giao diện trực quan</span>
                </li>
                <li>
                  <CheckCircleOutlineIcon className={classes.listIcon} />{' '}
                  <span>nhiều tính năng nổi bật</span>
                </li>
              </ul>
            </div>
          </div>
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <div className={classes.card}>
            <div className={classes.imgContain}>
              <img src={arrows} className={classes.iconCard} />
            </div>
            <Typography variant='h4' className={classes.cardTitle}>
              Tùy biến{' '}
            </Typography>
            <div className={classes.list}>
              <ul>
                <li>
                  <CheckCircleOutlineIcon className={classes.listIcon} />{' '}
                  <span>giao diện theo yêu cầu</span>
                </li>
                <li>
                  <CheckCircleOutlineIcon className={classes.listIcon} />{' '}
                  <span>tùy biến nội dung</span>
                </li>
                <li>
                  <CheckCircleOutlineIcon className={classes.listIcon} />{' '}
                  <span>thay đổi nhanh chóng hiệu quả</span>
                </li>
              </ul>
            </div>
          </div>
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <div className={classes.card}>
            <div className={classes.imgContain}>
              <img src={tool} className={classes.iconCard} />
            </div>
            <Typography variant='h4' className={classes.cardTitle}>
              {' '}
              Phù hợp nhiều thiết bị{' '}
            </Typography>
            <div className={classes.list}>
              <ul>
                <li>
                  <CheckCircleOutlineIcon className={classes.listIcon} />{' '}
                  <span>giao diện phù hợp các thiết bị </span>
                </li>
                <li>
                  <CheckCircleOutlineIcon className={classes.listIcon} />{' '}
                  <span>giao diện hợp lý trên các thiết bị</span>
                </li>
                <li>
                  <CheckCircleOutlineIcon className={classes.listIcon} />{' '}
                  <span>dễ dàng sử dụng</span>
                </li>
              </ul>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default WhyChooseSatsi;
