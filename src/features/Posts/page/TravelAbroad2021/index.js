import { Fragment } from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { InforContainer, Wrapper } from "../../../../assets/styles";

const TravelAbroad2021 = (props) => {
	// const { path, title, content } = props;

	const history = useHistory();

	setTimeout(function () {
		window.scrollTo(0, 0);
	}, 100);

	return (
		<Wrapper>
			<InforContainer>
				<button
					onClick={() => history.goBack()}
					className='fas fa-arrow-left'></button>
				<Fragment>
					<h1 style={{ textTransform: "uppercase" }}>DU HỌC ÚC CÙNG SATSI</h1>
					<br />

					<Typography>
						<i>
							Đất nước Úc là sự lựa chọn lý tưởng của nhiều học sinh, sinh viên
							bởi nền giáo dục tiên tiến, chất lượng đào tạo xuất sắc, nguồn học
							bổng dồi dào và môi trường sống thân thiện.
						</i>
					</Typography>
					<Subtitle>Úc - điểm đến du học lí tưởng </Subtitle>
					<Typography>
						Du học Úc dần trở thành xu hướng lựa chọn của những bạn trẻ khát
						khao được vươn ra thế giới để học hỏi những điều mới lạ, đó cũng là
						lựa chọn của những gia đình mong muốn con em mình được hưởng nền
						giáo dục tiên tiến hơn nền giáo dục trong nước và điều kiện sống tốt
						đẹp hơn.
					</Typography>
					<Typography>
						Đất nước Úc sở hữu nền giáo dục đẳng cấp thế giới. Đối với một đất
						nước thưa dân và số lượng trường đại học tương đối ít, việc có được
						6 trong số 100 trường đại học hàng đầu thế giới là một điều tuyệt
						vời. Các trường đại học Úc thường xuyên góp mặt trong các bảng xếp
						hạng toàn cầu như Xếp hạng Đại học Thế giới QS, Xếp hạng Giáo dục
						Đại học của Times và Xếp hạng Học thuật Shanghai Jiao Tong của các
						trường Đại học Thế giới.
					</Typography>

					<Typography>
						Với sự đa dạng trong các lựa chọn khóa học cùng bằng cấp được công
						nhận trên toàn thế giới, lộ trình du học Úc càng thuận lợi hơn khi
						Việt Nam nằm trong mức độ xét duyệt 2 của chính phủ Úc Assessment
						Level 2 (AL2), mở ra vô số cơ hội để bạn theo đuổi ước mơ học tập,
						làm việc và sinh sống.
					</Typography>

					<Typography>
						Theo đó, chính sách du học Úc cũng linh hoạt hơn như miễn chứng minh
						tài chính, không bắt buộc chứng chỉ IELTS, giúp rút ngắn thời gian
						xử lý visa du học Úc để bạn không bỏ lỡ kỳ nhập học sắp tới (Tháng
						2, tháng 7, tháng 10 hàng năm). Đặc biệt, Úc là quốc gia “hào phóng”
						về số lượng học bổng dành cho sinh viên quốc tế. Mỗi năm, chính phủ
						Úc hỗ trợ hơn 250 triệu AUD cho sinh viên quốc tế ở tất cả bậc học,
						gồm trung học, cao đẳng, đại học và sau đại học. Các nguồn học bổng
						từ các trường Úc cũng rất dồi dào và giá trị lớn từ 30 - 100%.
					</Typography>

					<Typography>
						Cơ hội việc làm bán thời gian Úc cũng khá linh động cho sinh viên
						quốc tế được phép làm việc tối đa 20 giờ một tuần trong học kỳ và
						toàn thời gian trong kỳ nghỉ đại học. Môi trường an toàn, đa văn hóa
						Úc được đánh giá là một trong những quốc gia an toàn nhất trên thế
						giới với một xã hội đa văn hóa, thân thiện và dễ chịu.
					</Typography>

					<Subtitle>SATSI - đồng hành cùng hành trình du học Úc</Subtitle>
					<Typography>
						Trong năm 2021, Satsi có nhiều chương trình du học, lao động với
						những chính sách tốt để công dân Việt phát triển nghề nghiệp tại Úc
						như: <Link to='/chuong-tring-visa-462'>Visa 462</Link>, các chương
						trình du học cấp 3, đại học, thạc sĩ,.. được tư vấn xây dựng dựa
						trên nhu cầu và điều kiện riêng của từng học viên.
					</Typography>

					<Typography>
						Là tổ chức giáo dục trực thuộc Bộ Khoa học và Công nghệ, Viện Đào
						tạo Khởi nghiệp và Ứng dụng Khoa học Công nghệ cao - SATSI có văn
						phòng đại diện tại Úc liên kết chặt chẽ với hơn các tổ chức giáo dục
						uy tín tại Úc (đại học, cao đẳng, trung học), mang đến nhiều lựa
						chọn linh hoạt về trường và khóa học.
					</Typography>

					<Typography>
						Tại Việt Nam, SATSI cũng là đối tác của trường Đại học Hà Nội, Đại
						học Ngoại ngữ (DHQGHN) với đội ngũ giảng viên chất lượng, giàu kinh
						nghiệm để trang bị đầy đủ kiến thức và kĩ năng ngoại ngữ cho học
						viên, sẵn sàng chinh phục nước Úc. SATSI còn ứng dụng công nghệ vào
						thiết lập phòng học thông minh để đào tạo trực tuyến tốt nhất, khắc
						phục khó khăn về dịch bệnh.
					</Typography>
					<Typography>
						Với hệ sinh thái các chương trình học đa dạng, dựa trên sự thấu hiểu
						học viên, Satsi giúp học viên tư vấn, định hướng nghề nghiệp một
						cách đúng đắn. Chúng tôi sẵn sàng đồng hành cùng các bạn trong suốt
						quá trình học tập và làm việc tại cả Việt Nam và Úc. Hãy liên hệ
						ngay với Satsi qua hotline: <b>097 858 6755</b>
						<Typography>
							Hoặc để lại thông tin vào <Link to='/lien-he'>đây</Link>
						</Typography>
					</Typography>
				</Fragment>
			</InforContainer>
		</Wrapper>
	);
};

const Typography = styled.p`
	font-size: 1.6rem;
	margin: 2rem 0px;
`;

const Subtitle = styled.h3`
	font-size: 2rem;
	font-weight: 500;
	margin-bottom: 2rem;
`;

// const ListWrapper = styled.ul`
// 	list-style-type: circle;
// 	padding-left: 3rem;
// `;

// const List = styled.li`
// 	font-size: 1.6rem;
// 	padding: 0.5rem 0px;
// `;

export default TravelAbroad2021;
