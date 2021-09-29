import { Container, Grid } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core';
import webDesign from './../../../../../assets/images/web-design.png';
import server from './../../../../../assets/images/server.png';
import marketing from './../../../../../assets/images/marketing.png';
import certificate from './../../../../../assets/images/certificate.png';
import article from './../../../../../assets/images/article.png';
import email from './../../../../../assets/images/email.png';

const useStyle = makeStyles((theme) => ({
  contain: {
    width: '90%',
    maxWidth: 1200,
    margin: '50px auto',
    '& h1, p': {
      textAlign: 'center',
      marginBottom: '20px',
    },
    ' & h1': {
      color: ' #721b00',
    },
  },
  card: {
    height: '100%',
    textAlign: 'center',
    padding: 30,
    border: '1px solid #edf1f1',
    boxShadow: '0 6px 25px 0 rgb(12 97 242 / 15%)',
    '& h2': {
      fontSize: 18,
      marginBottom: 15,
    },
    '& p': {
      color: '#777777',
    },
  },
  cardIcon: {
    width: 100,
    height: 'auto',
    marginBottom: '15px ',
  },
}));

const SERVICES = [
  {
    icon: webDesign,
    title: 'Thiết kế Website',
    content:
      'Dịch vụ thiết kế website chuẩn SEO giá rẻ, tối ưu trả nghiệm người dùng và thân thiện với mọi trình duyệt',
  },
  {
    icon: server,
    title: 'Hosting Tên Miền',
    content:
      'Đăng ký, mua tên miền đẹp nhanh chóng với giá cực kỳ ưu đãi, kích hoạt chỉ 5 phút. Mua Hosting tốc độ cao, an toàn phù hợp với cá nhân và doanh nghiệp.',
  },
  {
    icon: marketing,
    title: 'Chiến dịch quảng cáo',
    content:
      'Lựa chọn từ khóa phù hợp, nhắm đúng khách hàng mục tiêu, gia tăng doanh số bán hàng với chi phí quảng cáo thấp nhất',
  },
  {
    icon: certificate,
    title: 'Bộ nhận diện thương hiệu',
    content:
      'Tư vấn khách hàng lựa chọn được Bộ nhận diện thương hiệu chuyên nghiệp nhất cho doanh nghiệp.',
  },
  {
    icon: article,
    title: 'Viết nội dung website',
    content:
      'Xây dựng nội dung phù hợp với từng sản phẩm, dịch vụ của quý khách. Đáp ứng chuẩn SEO mang lại hiệu quả cao nhất',
  },
  {
    icon: email,
    title: 'Email tên miền',
    content:
      'Dịch vụ Email tên miền mang đến một giải pháp toàn diện: Email theo Tên miền riêng, Tốc độ nhanh, Bảo mật cao',
  },
];
const OurServices = () => {
  const classes = useStyle();
  return (
    <div className={classes.contain}>
      <h1>DỊCH VỤ CỦA CHÚNG TÔI</h1>
      <p>Dịch vụ nổi bật chúng tôi cung cấp</p>
      <Grid container spacing={2}>
        {SERVICES.map((service) => (
          <Grid item md={4} sm={6} xs={12}>
            <div className={classes.card}>
              {' '}
              <img src={service.icon} className={classes.cardIcon} />
              <h2>{service.title}</h2>
              <p>{service.content}</p>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default OurServices;
