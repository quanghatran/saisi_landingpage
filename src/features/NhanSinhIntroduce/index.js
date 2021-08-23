import { Fragment } from "react";
import styled from "styled-components";
// import { useHistory } from "react-router-dom";

import IntroBanner from './components/IntroBanner/IntroBanner';

// import { InforContainer, Wrapper } from "../../assets/styles";
import './index.css';

const NhanSinhIntroduce = (props) => {
	// const { path, title, content } = props;

	// const history = useHistory();

	setTimeout(function () {
		window.scrollTo(0, 0);
	}, 100);

	return (
		<div className="NhanSinhIntro">
			<IntroBanner />
			<div className="Content-container">
				<Fragment>
					<h1 style={{ textTransform: "uppercase" }}>
						TỔNG QUAN MINH TRIẾT NHÂN SINH
					</h1>

					<Typography style={{fontStyle:"italic"}}>
						<b>Lời ngỏ:</b> ‘’Minh triết nhân sinh’’ là một trong các dự án mang
						giá trị tinh thần to lớn, với mong muốn được cống hiến các dòng giá
						trị minh triết của chính cá nhân tích luỹ qua các trải nghiệm cá
						nhân, nghiên cứu khoa học để tìm ra công cụ áp dụng vào việc cho mọi
						người một định hướng minh triết nhất.
					</Typography>
					<Typography style={{fontStyle:"italic"}}>
						Định hướng minh triết, tương lai minh triết là những gì tôi ấp ủ qua
						năm tháng mong được truyền tải tới mọi người. Chúc cho các bạn, nhờ
						vào công cụ khoa học tôi dành thời gian nghiên cứu nói riêng, Viên
						Đào tạo khởi nghiệp và Ứng Dụng khoa học công nghệ cao SATSi nói
						chung, tìm thấy cho mình ngọn đèn dẫn dắt, soi sáng những khoảnh
						khắc mập mờ khi mường tượng tới tương lai, cuộc sống của mình sau
						này. Sự hài lòng của các bạn sau khi trải nghiệm sản phẩm và dịch vụ
						tư vấn của tôi, là động lực và niềm hạnh phúc lớn lao đỡ bước tôi
						thêm quyết liệt trên hành trình phụng sự cộng đồng.
					</Typography>
					<Typography style={{fontStyle:"italic"}}>
						Đây là một công trình nghiên cứu của phương Tây được áp dụng vào
						việc định hướng cuộc sống cho bất cứ ai đang chênh vênh trên nẻo
						đường đi tìm sứ mệnh cá nhân. Thông qua các con số với các dạng năng
						lượng đi kèm được tính theo công thức riêng, các bạn sẽ thấy rõ con
						đường tương lai bao gồm công danh, đời sống tinh thần, tính cách,
						...v...v..m bức tranh toàn cảnh cuộc đời bạn hiện ra đầy sắc nét. Sự
						sắp xếp của vũ trụ dành cho bạn nằm toàn bộ ở đây.
					</Typography>
					<br />
					<Typography style={{ textAlign: "end" }}>
						<b>
							Tác giả: <i>Hà Nguyễn (Tuệ Hương)</i>
						</b>
					</Typography>
					<Subtitle>Giá trị của bản tra cứu VIP</Subtitle>
					<ListWrapper>
						<List>
							Tính toán hàng chục nghìn phép tính thần số phức tạp cực nhanh chỉ
							sau 1 giây để cho ra các tổ hợp chỉ số mà không hề sai sót như
							tính tay.
						</List>
						<List>
							Chi phí của lượt VIP xem toàn bộ luận giải chỉ bằng 1% so với xem
							trực tiếp.
						</List>
						<List>
							Xem chi tiết đường đời, công việc, tình duyên, các năm đỉnh cao
							trong cuộc đời mỗi người để có sự chuẩn bị tốt nhất đón nhận các
							vận hội trong đời.
						</List>
						<List>
							Lời khuyên cho 3 năm gần nhất 2021, 2022, 2023 bạn nên làm gì để
							đạt được thành công nhất.
						</List>
						<List>Và còn nhiều điều nữa...</List>
					</ListWrapper>
					<br />

					<Subtitle>Lợi ích khi gặp trực tiếp</Subtitle>
					<ListWrapper>
						<List>
							Một buổi gặp trực tiếp nhà tư vấn(từ 3 tiếng tới 5 tiếng)
						</List>
						<List>Luận giải Offline tại nhà. (hỗ trợ ở Hà Nội)</List>
						<List>
							Luận giải chi tiết những chỉ số quan trọng nhất: ngày sinh, thái
							độ, đường đời, tài năng sứ mệnh, động lực thỏa mãn, động lực, nhân
							cách.
						</List>
						<List>Luận giải 4 mốc đỉnh cao của cuộc đời</List>
						<List>Luận giải tổng quan cá nhân cả năm</List>
						<List>Luận giải những điểm yếu cần khắc phục</List>
						<List>Tham vấn tâm lý</List>

						<br />
					</ListWrapper>
				</Fragment>
				<Typography style={{ marginBottom: "4rem", textAlign: "center" }}>
					<Button
						href='http://minhtrietnhansinh.com/'
						target='_blank'
						rel='noopener noreferrer'>
						Tìm hiểu thêm
					</Button>
				</Typography>
			</div>
		</div>
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

const ListWrapper = styled.ul`
	list-style-type: circle;
	padding-left: 3rem;
`;

const List = styled.li`
	font-size: 1.6rem;
	padding: 0.5rem 0px;
`;

const Button = styled.a`
	cursor: pointer;
	background-color: #721b00;
	opacity: 0.9;
	color: #fafafa;
	border: 1px solid gray;
	border-radius: 6px;
	padding: 10px 20px;
	text-decoration: none;
`;

export default NhanSinhIntroduce;
