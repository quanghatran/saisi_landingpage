import { Fragment } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { InforContainer, Wrapper } from "../../../../assets/styles";

const TrainingCourses = (props) => {
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
						Trung tâm phát triển năng lực{" "}
					</h1>
					<br />
					<Subtitle style={{ textAlign: "center" }}>
						THÀNH LẬP TRUNG TÂM GIẢI PHÁP GIÁO DỤC VÀ PHÁT TRIỂN NĂNG LỰC NGHỀ
						NGHIỆP SATSI
					</Subtitle>
					<Typography>
						<i>
							Nhằm nâng cao chất lượng nguồn nhân lực trong lĩnh vực giáo dục,
							Viện Đào tạo Khởi nghiệp và Ứng dụng Khoa học Công nghệ cao Satsi
							quyết định thành lập Trung tâm giải pháp giáo dục và phát triển
							năng lực nghề nghiệp Satsi vào ngày 13/07/2020.
						</i>
					</Typography>
					<Typography>
						Trung tâm giải pháp giáo dục và phát triển năng lực nghề nghiệp
						Satsi có chức năng bồi dưỡng, liên kết bồi dưỡng và nghiên cứu nâng
						cao chất lượng nguồn nhân lực trong lĩnh vực giáo dục theo nhiệm vụ
						được giao.
					</Typography>
					<Typography>
						Nhiệm vụ của Trung tâm giải pháp giáo dục và phát triển năng lực
						nghề nghiệp Satsi là tổ chức, nghiên cứu các khóa học đào tạo cho
						nhân lực giáo dục cụ thể là xây dựng chương trình và phương pháp
						giảng dạy, đánh giá và đo lường hiệu quả của các khóa học.
					</Typography>
					<Typography>
						Khóa đào tạo “Bồi dưỡng ứng dụng công nghệ thông tin trong dạy học
						phát triển năng lực” đã được trung tâm tổ chức rất thành công. Điểm
						nổi bật của khóa học là nhấn mạnh vào thực hành và trải nghiệm (
						chiếm 70% thời lượng khóa học) để học viên có thể ứng dụng những
						kiến thức trực tiếp vào thực tế quá trình giảng dạy.
					</Typography>
					<Typography>
						Thông tin chi tiết về các khóa đào tạo xin liên hệ:
					</Typography>
					<Typography>
						Trung tâm Giải pháp Giáo dục và Phát triển Năng lực Nghề nghiệp
						SATSI.
					</Typography>
					<Typography>
						Hotline: <b>097 858 6755</b>{" "}
					</Typography>
					<Typography>
						Địa chỉ: <b>Số 01-BT9 KĐT Văn Khê - Hà Đông - Hà Nội</b>
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

export default TrainingCourses;
