import { useHistory } from "react-router-dom";
import styled from "styled-components";

import { Wrapper, InforContainer } from "../../../../assets/styles";

const InfoContact = () => {
	const history = useHistory();

	setTimeout(function () {
		window.scrollTo(0, 0);
	}, 100);

	return (
    <Wrapper>
      <InforContainer>
        <button
          onClick={() => history.goBack()}
          className='fas fa-arrow-left'
        ></button>
        <h1>LIÊN HỆ VỚI CHÚNG TÔI</h1>
        <Contact>
          <div>
            <h3>Viện Đào tạo Khởi nghiệp và Ứng dụng Khoa học Công nghệ Cao</h3>
            <p>
              Địa chỉ: 202F Đội Cấn, P. Đội Cấn, Q. Ba Đình, TP. Hà Nội, Việt
              Nam.
            </p>
            <ul>
              <li>Trụ sở: 01-BT9 Khu đô thị Văn Khê, Hà Đông, TP. Hà Nội</li>
              <li>VPTV: Synary, Sảnh G Tòa A2, Đại học Kinh tế Quốc Dân</li>
              <li>VPTV: Synary, G3 Đại học Quốc gia Hà Nội.</li>
              <li>
                VPTV: Synary, Đại học sư phạm kỹ thuật HCM, Số 1 Võ Văn Ngân,
                Linh Chiểu, Thủ Đức, TP. Hồ Chí Minh
              </li>
            </ul>
            <br />
            <p>Liên hệ để được giải đáp nhanh nhất:</p>
            <ul>
              <li>
                <b>Hotline:</b> <a href='tel: 0978586755'> 0978 58 67 55</a> -{' '}
                <a href='tel: 0962917755'>0962 91 77 55 </a>
              </li>
              <li>
                <b>Điện thoại:</b> <a href='tel: 02422371777'>024 223 71777</a>
              </li>
              <li>
                <b>Email:</b>{' '}
                <a href='mailto: satsi.edu@gmail.com'>satsi.edu@gmail.com</a>
              </li>
            </ul>
          </div>
          <iframe
            title='map'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.491266761257!2d105.75900665090325!3d20.972935685960095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313453a9eaa566d3%3A0x40d4cb79f455ca83!2sSATSI!5e0!3m2!1svi!2s!4v1622287033808!5m2!1svi!2s'
            width='600'
            height='450'
            style={{ border: 0 }}
            allowFullScreen={true}
            loading='lazy'
          ></iframe>
        </Contact>
      </InforContainer>
    </Wrapper>
  );
};

const Contact = styled.div`
	display: flex;

  div {
    ul{
      li {
        line-height: 20px
      }
    }
  }

	a {
		color: black;
	}

	@media screen and (max-width: 1000px){
		display: block;
		iframe{
			width: 100%;
			height: 30rem;
		}
	}
`

export default InfoContact;
