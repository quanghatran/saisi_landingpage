import styled from "styled-components";
import Slider from "react-slick";
import { useMediaQuery } from "react-responsive";

import useFetch from "../../../../api/CustomHooks/useFetch";
import { Wrapper } from "../../../../assets/styles";
import logoPartner from "../../../../assets/images/Partner.png";

const Partner = () => {
	const { data, isPending, error } = useFetch(
		process.env.REACT_APP_API_URL + "Partner"
	);

	let settings = {
		infinite: true,
		slidesToShow: 4,
		autoplay: true,
		speed: 300,
		arrows: false,
		dots: false,
	};

	const is838px = useMediaQuery({ query: "(max-width: 1000px)" });
	const is638px = useMediaQuery({ query: "(max-width: 638px)" });

	settings = is838px
		? {
				...settings,
				slidesToShow: 3,
		  }
		: settings;

	settings = is638px
		? {
				...settings,
				slidesToShow: 2,
		  }
		: settings;
	return (
		<div>
			<StyledWrapper>
				{/* <h1>ĐỐI TÁC CỦA SATSi</h1> */}
				<img src={logoPartner} alt='logoPartner' />
				<Slider {...settings}>
					{error && <div>{error}</div>}
					{isPending && ""}
					{data &&
						data.map((card) => (
							<Card key={card.id}>
								<img
									src={process.env.REACT_APP_API_URL + card.Image}
									alt={card.ImageName}
								/>
							</Card>
						))}
				</Slider>
			</StyledWrapper>
		</div>
	);
};

const StyledWrapper = styled(Wrapper)`
	text-align: center;
	color: ${(props) => props.theme.colors.main};
	padding: 4rem 0;

	& > img {
		height: 15rem;
		width: 15rem;
	}

	h1 {
		padding: 2rem 0 6rem;
		font-size: ${(props) => props.theme.fontSize.h1};
	}

	@media screen and (max-width: 1000px) {
		h1 {
			font-size: 2.8rem;
		}
	}

	@media screen and (max-width: 615px) {
		h1 {
			font-size: 2rem;
		}
	}
`;

const Card = styled.div`
	img {
		width: 20rem;
		height: 20rem;
		object-fit: contain;
		padding: 0 1rem;
	}
	@media screen and (max-width: 1000px) {
		img {
			height: 15rem;
			width: 15rem;
		}
	}

	@media screen and (max-width: 638px) {
		img {
			height: 10rem;
			width: 10rem;
		}
	}
`;

export default Partner;
