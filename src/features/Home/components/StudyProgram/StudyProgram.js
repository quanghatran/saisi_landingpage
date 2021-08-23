import React from 'react'
import {Link} from 'react-router-dom';
import SliderImages from '../SliderBanner/SliderBanner';

import HK1 from '../../../../assets/images/hangkhong1.jpeg';
import HK2 from '../../../../assets/images/hangkhong2.png';
import HK3 from '../../../../assets/images/hangkhong3.png';
import Uc1 from '../../../../assets/images/Uc1.png';
import Uc2 from '../../../../assets/images/Uc2.png';
import Uc3 from '../../../../assets/images/Uc3.png';

import './StudyProgram.css';

const imagesHK = [HK1, HK2, HK3];
const imagesUc = [Uc1, Uc2, Uc3];

function StudyProgram(props) {
    return (
        <div className="StudyProgram">
            <div className="SP-title">
                CÁC CHƯƠNG TRÌNH DU HỌC - KHỞI NGHIỆP KHÁC TẠI SATSI
            </div>
            <div className="grid-container">
                <div className="grid-item">
                    <div className="SP-slideImg">
                        <SliderImages images={imagesUc}/>
                    </div>
                    <div className="SP-content">
                        <Link 
                            className="SP-link"
                            to='/chuong-tring-visa-462'
                        >Du học Úc</Link>
                        <p>
                            Cơ hội du học và định cư tại Úc – Đất nước đáng sống và có
                            nền giáo dục đẳng cấp thế giới. Với các chương trình du học
                            đa dạng cùng lộ trình dễ dàng, SATSI tự hào trở thành cầu nối
                            các bạn học viên đến với các trải nghiệm học tập, lao động, du lịch Úc.
                            Sẵn sàng hành trang chinh phục giấc mơ Úc cùng SATSI ngay hôm nay!
                        </p>
                    </div>
                    <div className="btn-container">
                        <Link to='/chuong-tring-visa-462' className="Btn-viewMore">Xem thêm</Link>
                    </div>
                </div>
                <div className="grid-item">
                    <div className="SP-slideImg">
                        <SliderImages images={imagesHK}/>
                    </div>
                    <div className="SP-content">
                        <Link 
                            className="SP-link"
                            to='/du-hoc-nganh-hang-khong'
                        >Ngành Hàng Không</Link>
                        <p>
                            Hàng không đang trở thành một xu hướng nghề nghiệp mới thu hút các 
                            bạn trẻ năng động, yêu thích sự dịch chuyển. Nắm bắt cơ hội nghề nghiệp
                            trong ngành hàng không với môi trường làm việc hiện đại, nguồn thu nhập
                            hấp dẫn và lựa chọn ngành nghề đa dạng từ 65 vị trí đào tạo tại SATSI!
                        </p>
                        
                    </div>
                    <div className="btn-container">
                        <Link to='/du-hoc-nganh-hang-khong' className="Btn-viewMore">Xem thêm</Link>
                    </div>
                    
                </div>
            </div>
            
        </div>
    )
}

StudyProgram.propTypes = {

}

export default StudyProgram

