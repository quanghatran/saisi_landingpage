import { Fragment } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { InforContainer, Wrapper } from "../../../../assets/styles";

const OfficeRooms = (props) => {
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
					<h1 style={{ textTransform: "uppercase" }}>
						VĂN PHÒNG ĐẠI DIỆN CỦA SATSI TẠI ÚC
					</h1>
					<br />
					<Subtitle style={{ textAlign: "center" }}>
						VĂN PHÒNG ĐẠI DIỆN CỦA SATSI TẠI ÚC- BẠN ĐỒNG HÀNH CỦA NGƯỜI VIỆT
						TẠI ÚC
					</Subtitle>
					<Typography>
						<i>
							Để mang đến sự hỗ trợ tốt nhất cho du học sinh, người lao động tại
							đất nước Úc xinh đẹp, Satsi đã thành lập văn phòng đại diện tại
							Úc. Việc thành lập văn phòng đại diện này giúp chia sẻ, giúp đỡ,
							gắn kết cộng đồng các du học sinh và người lao động Việt trong
							suốt quá trình sinh sống, học tập và làm việc tại Úc.
						</i>
					</Typography>
					<Typography>
						Là một đơn vị uy tín trực thuộc Bộ Khoa học Công nghệ, Viện Đào tạo
						Khởi nghiệp và Ứng dụng Khoa học Công nghệ cao - SATSI đã trở thành
						cầu nối của công dân Việt với các chương trình du học, lao động chất
						lượng tại đất nước Úc.
					</Typography>
					<Typography>
						Việc đặt văn phòng đại diện tại Úc tại (địa chỉ …….) không chỉ gia
						tăng mối quan hệ với các tổ chức đối tác uy tín tại đất nước sở tại
						mà còn đồng hành, chia sẻ, gắn kết cộng đồng các du học sinh và
						người lao động Việt tại Úc.
					</Typography>

					<ListWrapper>
						<List>Hỗ trợ hướng dẫn các thủ tục hành chính phức tạp tại Úc</List>
						<List>Kết nối học viên với các khóa học tại Úc</List>
						<List>Hỗ trợ nhận việc làm thêm ngoài giờ</List>
						<List>Cung cấp thông tin về chỗ ở, đưa đón sân bay </List>
						<List>
							Và các tư vấn khác có liên quan tới việc hợp tác đào tạo, hợp tác
							tuyển sinh,.....
						</List>
					</ListWrapper>

					<Typography>
						Tại Việt Nam, Viện Đào tạo Khởi nghiệp và Ứng dụng Khoa học Công
						nghệ cao - SATSI đồng hành cùng học viên từ những bước đi đầu tiên
						trong hành trình chinh phục nước Úc
					</Typography>

					<ListWrapper>
						<List>Tư vấn làm hồ sơ để đảm bảo tỉ lệ đỗ Visa cao</List>
						<List>
							Tư vấn các khóa săn học bổng với tỉ lệ đứng đầu Việt Nam.
						</List>
						<List>Đào tạo Tiếng Anh chuẩn đầu ra</List>
						<List>
							Có các chương trình học từ xa - giảm 30% học phí (nếu bị ảnh hưởng
							bởi dịch bệnh){" "}
						</List>
						<List>
							Hỗ trợ chuyển đổi các ngành khác với hệ sinh thái ngành nghề đa
							dạng của Satsi.
						</List>
					</ListWrapper>

					<Typography>
						Với các điều kiện hỗ trợ, đồng hành tuyệt đối tại cả Việt Nam và Úc,
						SATSI là người bạn đồng hành lí tưởng trong hành trình hiện thực hóa
						giấc mơ Úc của các bạn trẻ Việt.
					</Typography>

					<Typography>
						Tìm hiểu thêm về Satsi theo hotline: <b>097 858 6755</b>
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

const ListWrapper = styled.ul`
	list-style-type: circle;
	padding-left: 3rem;
`;

const List = styled.li`
	font-size: 1.6rem;
	padding: 0.5rem 0px;
`;

export default OfficeRooms;
