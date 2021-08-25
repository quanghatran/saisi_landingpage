import React from 'react';
import PropTypes from 'prop-types';
import useStyle from './TrainingEnglishStyle';

function TrainingEnglish(props) {
  const classes = useStyle();
  return (
    <div className={classes.contain}>
      <h1>ĐÀO TẠO TIẾNG ANH</h1>
      <div>
        <h3>Bài 1:</h3>
        <h2>ĐĂNG KÝ TEST TRÌNH ĐỘ PTE HOÀN TOÀN MIỄN PHÍ</h2>
        <p>
          PTE (Pearson Test of English) là chứng chỉ học thuật cấp quốc tế nhằm
          đánh giá kỹ năng nghe, nói, đọc, viết của những bạn có kế hoạch du
          học, làm việc và định cư ở nước ngoài.
        </p>
        <p>
          Trung tâm ngoại ngữ SATSi là trung tâm uy tín và đồng hành, hỗ trợ các
          bạn kiến thức cần thiết để chinh phục chứng chỉ PTE nhanh nhất với các
          khóa đào tạo PTE có ưu điểm như sau:
        </p>
        <ul>
          <li>
            <p>
              ✔️ Nền tảng học online tân tiến trên platform độc quyền sử dụng
              trí tuệ nhân tạo AI
            </p>
          </li>
          <li>
            <p>✔️ Kho tài liệu chất lượng cao</p>
          </li>
          <li>
            <p>
              ✔️ Đội ngũ giảng viên tâm huyết, review 1-1 với giáo viên
              Philippines giàu kinh nghiệm
            </p>
          </li>
          <li>
            <p>✔️ Cam kết đảm bảo đầu ra PTE 30 (tương đương 4.5 IELTS)</p>
          </li>
          <li>
            <p>✔️ Cam kết tối ưu thời gian và chi phí.</p>{' '}
          </li>
          <li>
            <p>✔️ Test đầu vào hoàn toàn MIỄN PHÍ </p>
          </li>
        </ul>
        <p>
          Đăng ký TEST PTE MIỄN PHÍ cùng Satsi{' '}
          <a
            href='https://docs.google.com/forms/d/e/1FAIpQLSfTYtt75DYde9gGNLbhhQlrlhruQSIetbFrFCAI2cRG4TG7ow/viewform
'
          >
            TẠI ĐÂY
          </a>{' '}
          :
        </p>
      </div>
      <div>
        <h3>Bài 2:</h3>
        <h2>TEST IELTS 1:1 CÙNG GIÁO VIÊN BẢN ĐỊA HOÀN TOÀN MIỄN PHÍ</h2>
        <p>
          Khóa đào tạo IELTS cùng Satsi sẽ giúp bạn giải quyết mọi lo lắng về
          IELTS cho bạn với:
        </p>
        <ul>
          <li>
            <p>✔️ Test MIỄN PHÍ 1:1 giáo viên Philippines</p>
          </li>
          <li>
            <p>
              ✔️ Xây dựng lộ trình học theo mục tiêu và năng lực của học viên
            </p>
          </li>
          <li>
            <p>✔️ Học và làm chủ toàn diện 4 kĩ năng Nghe, Nói, Đọc, Viết</p>
          </li>
          <li>
            <p>
              ✔️ Nắm bắt những kỹ năng hữu ích, được chia sẻ dựa trên kinh
              nghiệm giảng dạy nhiều năm của giáo viên, giúp học viên đạt được
              kết quả tối ưu
            </p>
          </li>
          <li>
            <p>
              ✔️Bồi dưỡng sự tự tin qua việc luyện tập với các giáo viên trình
              độ cao trước khi bước vào bài thi IELTS
            </p>
          </li>
        </ul>
        <p>Trải nghiệm Test MIỄN PHÍ 1:1 giáo viên Philippines NGAY TẠI Đ Y</p>
      </div>
      <div>
        <h3>Bài 3:</h3>
        <h2>ĐÁNH GIÁ TRÌNH ĐỘ TOEIC VỚI BÀI TEST HOÀN TOÀN MIỄN PHÍ</h2>
        <p>
          Trung tâm ngoại ngữ SATSi là trung tâm uy tín và đồng hành, hỗ trợ các
          bạn kiến thức cần thiết để chinh phục chứng chỉ TOEIC nhanh nhất với
          các đề thi THỬ TOEIC MIỄN PHÍ tại đây
        </p>
        <p>Tại Satsi, khóa đào tạo TOEIC chất lượng với:</p>
        <ul>
          <li>
            <p>✔️ Học Online với nền tảng AI thông minh</p>
          </li>
          <li>
            <p>
              ✔️ Đội ngũ giảng viên tâm huyết từ các trường đại học uy tín như
              Đại học Hà Nội, Đại học Ngoại Ngữ -ĐHQGHN
            </p>
          </li>
          <li>
            <p>✔️ Kho tài liệu chất lượng cao</p>
          </li>
          <li>
            <p>✔️ Xây dựng bài thi THỬ MIỄN PHÍ đánh giá năng lực</p>
          </li>
        </ul>
        <p>Trải nghiệm ngay các đề thi THỬ TOEIC MIỄN PHÍ tại đây [link]</p>
      </div>
      <h3>
        Cùng SATSI chinh phục giấc mơ hàng không của bạn với hơn 65 vị trí ngành
        hàng không.
      </h3>
    </div>
  );
}

TrainingEnglish.propTypes = {};

export default TrainingEnglish;
