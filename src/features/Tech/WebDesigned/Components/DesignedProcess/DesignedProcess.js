import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import consultant from './../../../../../assets/images/consultant.png';
import salary from './../../../../../assets/images/salary.png';
import agreement from './../../../../../assets/images/agreement.png';
import demo from './../../../../../assets/images/demo.png';
import ballot from './../../../../../assets/images/ballot.png';
import coding from './../../../../../assets/images/coding.png';
import contract from './../../../../../assets/images/contract.png';
import support from './../../../../../assets/images/technical-support.png';
import insurance from './../../../../../assets/images/insurance.png';

const useStyle = makeStyles((theme) => ({
  contain: {
    maxWidth: 1200,
    width: '90%',
    margin: '50px auto',
    '& h1': {
      textAlign: 'center',
      margin: '20px auto',
      color: '#721b00',
    },
    // '& p': {
    //   textAlign: 'center',
    //   marginBottom: '40px',
    // },
  },
  subTitle: {
    textAlign: 'center',
    marginBottom: '40px',
  },
  card: {
    padding: 10,
    display: 'flex',
    height: '100%',

    gap: 20,
    border: '1px solid #fff',
    boxShadow: '0 6px 10px 0 rgb(12 97 242 / 15%)',
    ' & p': {
      color: ' #777777',
    },
  },
  cardIcon: {
    width: 60,
    height: 60,
  },
}));

const STEPS = [
  { img: consultant, content: 'Tiếp nhận yêu cầu và TƯ VẤN' },
  { img: salary, content: 'Phác thảo giao diện và báo giá' },
  {
    img: agreement,
    content: 'Tiến hành ký hợp đồng, thu phí 50% giá trị hợp đồng',
  },
  {
    img: demo,
    content: `Tiến hành thiết kế website
  Gửi demo tới KH`,
  },
  { img: ballot, content: 'Chốt giao diện website, thu 30% giá trị hợp đồng' },
  { img: coding, content: 'Tiến hành code website' },
  {
    img: contract,
    content: 'Thu 20% giá trị hợp đồng còn lại và thanh lý hợp đồng',
  },
  { img: support, content: 'Hỗ trợ, hướng dẫn up sản phẩm' },
  { img: insurance, content: 'Bảo hành 12 tháng' },
];
const DesignedProcess = () => {
  const classes = useStyle();
  return (
    <div className={classes.contain}>
      <h1>QUY TRÌNH THIẾT KẾ WEBSITE</h1>
      <p className={classes.subTitle}>
        9 bước thiết kế website chuyên nghiệp tại SATSI
      </p>
      <Grid container spacing={3} justifyContent='center'>
        {STEPS.map((step) => (
          <Grid item md={4} sm={6} xs={12}>
            <div className={classes.card}>
              <img src={step.img} className={classes.cardIcon} />
              <p>{step.content}</p>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default DesignedProcess;
