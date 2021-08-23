import { Fragment } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { InforContainer, Wrapper } from "../../../assets/styles";
import smartRooms1 from "../../../assets/images/smartRooms1.png";
import smartRooms_2 from "../../../assets/images/smartRooms_2.jpg";

const SmartRooms = (props) => {
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
					<h1 style={{ textTransform: "uppercase" }}>Phòng học thông minh</h1>
					<br />
					<Subtitle style={{ textAlign: "center" }}>
						MÔ HÌNH PHÒNG HỌC THÔNG MINH TÍCH HỢP TRỰC TUYẾN TƯƠNG TÁC VÀ DI
						ĐỘNG SATSI SMARTCLASS
					</Subtitle>
					<Typography>
						<i>
							Trong bối cảnh toàn cầu hoá, mọi quốc gia đều đang tập trung nâng
							cao mức độ chất lượng trong hệ thống giáo dục. Đặc biệt trong Giáo
							dục, công nghệ đóng một vai trò vô cùng quan trọng cho sự phát
							triển bền vững. Mô hình phòng học thông minh tích hợp trực tuyến
							tương tác và di động Satsi Smartclass là một trong các mô hình
							sáng tạo, hiện đại nhất nhằm tạo ra và cung cấp nội dung bài
							giảng, nâng cao khả năng học tập của học viên.
						</i>
					</Typography>
					<Typography>
						Với xu hướng cạnh tranh ngày nay, các bạn trẻ luôn cần những bộ kỹ
						năng vượt ra ngoài kiến ​​thức môn học và đòi hỏi sự tập trung, khả
						năng tư duy sáng tạo. Chính vì vậy giáo viên cần có những phương
						pháp giáo dục tích cực và những phương tiện giảng dạy tiên tiến để
						truyền tải đến học sinh những nội dung giáo dục cập nhật nhất. Hiện
						nay giáo dục đang đổi mới nhằm lấy học sinh làm trung tâm, giáo viên
						chính là người thiết kế, học sinh thi công từ đó tăng cường sự chủ
						động và sáng tạo của học sinh.
					</Typography>
					<Typography>
						Cùng với sự phát triển của nền kinh tế, việc ứng dụng những thiết bị
						dạy học tiên tiến và các phần mềm chuyên dụng hỗ trợ công tác dạy và
						học ở các nước phát triển trên thế giới đã diễn ra từ lâu, trong khi
						nền giáo dục nước nhà vẫn bước đi những bước chậm chạp. Yêu cầu đặt
						ra hiện nay là dạy học phải đi trước quá trình phát triển hoặc ngang
						bằng với sự phát triển nhờ những phương pháp, phương tiện tiên tiến,
						như vậy giáo dục mới kéo theo sự phát triển của kinh tế.
					</Typography>
					<Typography>
						Giải pháp phòng học thông minh tích hợp trực tuyến tương tác và di
						động Satsi SmartClass do SATSI Technology cung cấp tích hợp phần mềm
						và các trang thiết bị công nghệ tiên tiến nhưng cũng rất tối giản và
						dễ sử dụng, phù hợp chuyên biệt cho công tác giảng dạy của giáo viên
						và học tập của học sinh.
					</Typography>

					<Subtitle>
						Giải pháp phòng học thông minh <i> Satsi Smartclass</i>
					</Subtitle>
					<Typography>
						Nhiều năm trở về trước, hình ảnh các học sinh cùng tương tác trên
						một mặt phẳng để tìm ra lời giải của một phương trình đại số phức
						tạp hay việc trình chiếu, cắt lớp các vật thể cũng như điều khiển
						tắt bật hệ thống các thiết bị máy tính chỉ bằng một vài thao tác đơn
						giản có vẻ chỉ xảy ra trong những bộ phim với công nghệ đến từ tương
						lai. Ngày nay, các thiết bị hỗ trợ giảng dạy như màn hình tương tác
						thông minh, bảng viết mini thông minh, phần mềm mô phỏng 3D, máy thu
						vật thể, phần mềm quản lý và điều khiển lớp học kết hợp các công
						nghệ thực tại ảo (VR, AR) đã làm được điều đó.
					</Typography>
					<Typography>
						<img src={smartRooms1} alt='smartRoom1' />
					</Typography>

					<Typography style={{ textAlign: "center" }}>
						<i>
							Cấu trúc phòng học thông minh tích hợp trực tuyến tương tác và di
							động QA SmartClass
						</i>
					</Typography>
					<br />

					<Typography>
						Ưu điểm của giải pháp là phục vụ giảng dạy thông minh, đa năng tại
						lớp học nhưng cũng tích hợp các phần mềm và trang thiết bị chuyên
						dụng cho giảng dạy trực tuyến, được thiết kế luôn sẵn sàng chuyển
						đổi số để dạy và học trực tuyến trên không gian mạng mọi lúc mọi
						nơi, trong một số trường hợp cần thiết, giáo viên và học sinh có thể
						sử dụng phiên bản tương tác mini di động để giảng dạy trực tuyến tại
						nhà mà cũng không kém giảng dạy trên bảng phấn tại lớp, trong thời
						điểm dịch bệnh diễn biến phức tạp như hiện nay, việc giáo viên giảng
						dạy trên phòng học và truyền tải toàn bộ nội dung viết bảng, âm
						thanh hình ảnh bài giảng, thực hành, thí nghiệm, cử chỉ thao tác
						giọng nói của giáo viên tới máy của học sinh, tương tác với học sinh
						dù ở bất kỳ đâu ngày càng cấp thiết.
					</Typography>

					<Typography>
						Phòng học được trang bị nội thất bàn ghế thông minh có thể sắp xếp
						theo nhiều hình dạng khác nhau, phù hợp cho các hoạt động học tập
						nhóm. Máy tính giáo viên được trang bị đầy đủ các phần mềm hữu ích
						và cần thiết cho việc giảng dạy như, phần mềm giảng dạy tương tác
						i-Pro5, phần mềm sách giáo khoa tương tác đầy đủ các bộ môn cùng các
						nội dung học tập, hình ảnh và video minh họa trực quan, sinh động.
						Đối với cấp THCS, THPT, phần mềm mô phỏng và thí nghiệm các môn
						Toán, Lý, Hóa, Sinh là vô cùng cần thiết. Những con số khô khan
						dường như biết nói, vô vàn các phản ứng hóa học đều dễ dàng được thí
						nghiệm. Phần mềm mô phỏng 3D các bộ phận cơ thể người giúp học sinh
						dễ dàng hình dung cấu tạo các bộ phận và các hệ bài tiết. Với phần
						mềm quản lý và điều khiển lớp học, giáo viên có thể dễ dàng chia sẻ
						các nội dung học tập đến máy học viên, điều khiển từ xa, …vv.
					</Typography>

					<Typography>
						<img src={smartRooms_2} alt='smartRoom2' />
					</Typography>
					<Typography style={{ textAlign: "center" }}>
						<i>
							Phòng học được trang bị nội thất bàn ghế thông minh có thể sắp xếp
							theo nhiều hình dạng khác nhau, phù hợp cho các hoạt động học tập
							nhóm.
						</i>
					</Typography>
					<br />

					<Typography>
						Màn hình tương tác/ bảng viết mini di động cùng các phần mềm hỗ trợ
						soạn thảo bài giảng và giảng dạy là công cụ hỗ trợ đắc lực cho giáo
						viên. Sarah B. Hodge, nhà phát triển chương trình giảng dạy tại Học
						viện Ngôn ngữ Quốc phòng ở San Antonio, Texas, nơi phục vụ sinh viên
						quốc tế quân sự và dân sự đến từ hơn 100 quốc gia cho rằng hệ thống
						phòng học tương tác thông minh là một công cụ thực sự tuyệt vời
						khuyến khích sự tương tác tích cực của học sinh trong quá trình học
						tập, việc mà rất khó để đạt được với cách giảng dạy truyền thống.
						Máy thu hình vật thể giúp thu lại hình ảnh động và tĩnh theo không
						gian 3 chiều của các vật thể, thí nghiệm,… sau đó trình chiếu trực
						tiếp lên các màn hình hiển thị cỡ lớn để học sinh có thể cùng nhau
						khám phá chi tiết.
					</Typography>
					<Typography>
						Hệ thống camera giám sát và điểm danh tự động sử dụng công nghệ trí
						tuệ nhân tạo (AI) giúp giáo viên dễ dàng quản lý lớp học và đánh giá
						sự tập trung học tập của học sinh. Hệ thống camera trực tuyến -
						truyền giảng thời gian thực và ghi lưu giảng dạy giúp giáo viên ghi
						học bài giảng phục vụ cho việc học trực tuyến và tải các bài giảng
						lên các nhóm học tập, giúp học sinh dễ dàng học tập từ xa… Để lớp
						học được duy trì xuyên suốt và hiệu quả, không thể thiếu các thiết
						bị phụ trợ như âm thanh trợ giảng với Loa phòng học tích hợp đọc thẻ
						nhớ, USB, kết nối không dây Bluetooth, bộ lưu điện, tủ mạng kỹ
						thuật, các bộ chia và dây cáp kết nối các thiết bị. Giải pháp phòng
						học thông minh tích hợp trực tuyến tương tác và di động Satsi
						SmartClass vô cùng hữu ích trong việc nâng cao trí tưởng tượng của
						học sinh và khuyến khích sự tích cực hoạt động trong quá trình học
						tập, đồng thời đánh thức trong học sinh các giác quan thị giác,
						thính giác và xúc giác.
					</Typography>
					<Typography>
						Trên thị trường hiện nay có rất nhiều công ty cung cấp các giải pháp
						mô hình phòng học thông minh nhưng hầu hết đều chưa tích hợp giảng
						dạy trực tuyến tương tác, cũng như không quan tâm đến công tác đào
						tạo, chuyển giao công nghệ, hướng dẫn sử dụng cho khách hàng/ giáo
						viên. Với hàng chục năm kinh nghiệm phát triển và cung cấp giải
						pháp, Công ty Cổ phần Satsi Technology thuộc Viện đào tạo khởi
						nghiệp và ứng dụng khoa học công nghệ cao ý thức được tầm quan trọng
						của công tác đào tạo, hướng dẫn sử dụng. Vì vậy, công ty chúng tôi
						có đội ngũ cán bộ đào tạo chính là những tiến sĩ, kĩ sư, giáo viên,
						chuyên gia công tác lâu năm trong ngành giáo dục sẽ giúp quý khách
						hàng/ thầy cô sử dụng thành thạo và khai thác tối đa công năng của
						trang thiết bị cũng như các phần mềm hỗ trợ giảng dạy.
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

// const ListWrapper = styled.ul`
// 	list-style-type: circle;
// 	padding-left: 3rem;
// `;

// const List = styled.li`
// 	font-size: 1.6rem;
// 	padding: 0.5rem 0px;
// `;

export default SmartRooms;
