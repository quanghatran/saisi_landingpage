import Slider from 'react-slick';
import styled from 'styled-components';

import useFetch from '../../../../api/CustomHooks/useFetch';

const Banner = () => {
    const { data, isPending, error } = useFetch(process.env.REACT_APP_API_URL + 'Banners');

    let settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
      };

    return ( 
        <div>
            <Carousel {...settings}>
                { error && <div>{ error }</div>}
                { isPending && '' }
                { data && 
                    data.map(img => (
                        <ImgContainer key={img.id}>
                            <img src={process.env.REACT_APP_API_URL + img.Image} alt={img.BannerName} />
                        </ImgContainer>
                    ))
                }
            </Carousel>
        </div>
     );
}

const Carousel = styled(Slider)`
    overflow: hidden;
    z-index: 1;

    & .slick-arrow{
        z-index: 2;
        width: 9rem;
        height: 9rem;
    }

    & .slick-prev::before, & .slick-next::before {
        font-size: 3.6rem;
        color: gray;
        opacity: 1;
    }

    & .slick-prev:hover::before, & .slick-next:hover::before{
        opacity: 0.4;
    }

    & .slick-dots {
        bottom: 3px;
        color: ${props => props.theme.colors.main};
    }

    & .slick-dots .slick-active button::before {
        color: ${props => props.theme.colors.main};
    }

    & .slick-dots button::before {
        color: ${props => props.theme.colors.main};
        font-size: 0.8rem;
    }

    @media screen and (max-width: 500px){
        & .slick-prev::before, & .slick-next::before {
            font-size: 3.6rem;
            color: ${props => props.theme.colors.main};
            opacity: 0.4;
        }
    }
`

const ImgContainer = styled.div`
    img{
        max-width: 100%;
        max-height: auto;
    }

    @media screen and (max-width: 500px){
        img {
            min-height: 20rem;
        }
    }
`

export default Banner;