import styled from "styled-components";
import Slider from 'react-slick';
import { useMediaQuery } from 'react-responsive';

import useFetch from '../../../../api/CustomHooks/useFetch';
import { Wrapper } from '../../../../assets/styles';

const Feedbacks = () => {
    const { data, isPending, error } = useFetch(process.env.REACT_APP_API_URL + 'Feedbacks');
    let settings = {
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        swipeToSlide:true,
        swipe:true,
        arrows:false,
        dots: true,
    };

    const is838px = useMediaQuery({ query: '(max-width: 838px)' });
    const is638px = useMediaQuery({ query: '(max-width: 638px)' });

    settings = is838px ? {
        ...settings,
        slidesToShow: 2
    } : settings;

    settings = is638px ? {
        ...settings,
        slidesToShow: 1
    } : settings;

    return ( 
        <Container>
            <StyledWrapper>
                <h1>CẢM NHẬN CỦA HỌC VIÊN VÀ ĐỐI TÁC</h1>
                <StyledSlider {...settings}>
                    { error && <div>{ error }</div>}
                    { isPending && '' }
                    { data && 
                        data.map(card => (
                            <Card key={card.id}>
                                <img src={process.env.REACT_APP_API_URL + card.Image} alt={card.PersonName} />
                                <h2>{card.PersonName}</h2>
                                <p id="details">{card.PersonDetail}</p>
                                <p className="contentFeedBack">{card.Content}</p>
                            </Card>
                        ))
                    }
                </StyledSlider>
            </StyledWrapper>
        </Container>
    );
}
 
const Container = styled.div`
    
`
const StyledWrapper = styled(Wrapper)`
    text-align: center;
    padding: 2rem 0 3.5rem;

    color: ${props => props.theme.colors.main};

    .slick-slide{
        padding: 1.5rem 1rem;
    }

    h1 {
        margin-bottom: 2rem;
    }

    @media screen and (max-width: 1400px) {
        width: 90%;
    }

    @media screen and (max-width: 1000px){
        h1{
            font-size: 2.8rem;
        }
    }

    @media screen and (max-width: 838px) {
        width: 100%;
    }   

    @media screen and (max-width: 615px){
        h1{
            font-size: 2rem;
        }
    }  
`

const StyledSlider = styled(Slider)`
    .slick-track{
        margin-bottom: 1rem;
    }
    & .slick-dots {
        color: ${props => props.theme.colors.main};
        text-align: center;
    }

    & .slick-dots .slick-active button::before {
        color: ${props => props.theme.colors.main};
    }

    & .slick-dots button::before {
        color: ${props => props.theme.colors.main};
        font-size: 0.8rem;
    }
    
`

const Card = styled.div`
    border-radius: 1.5rem;
    border: 0.1px solid ${props => props.theme.colors.main};
    min-height: 40rem;
    text-align: center;
    background-color: #f4f4f4;   
    img{
        height: 12rem;
        width: 12rem;
        border-radius: 50%;
        margin: 2rem auto;
        object-fit: cover
    }
    h3{
        font-size: 1.6rem;
        color:  ${props => props.theme.colors.main};
        margin: 2rem 0.5rem;
        line-height: 2.3rem;
    }

    h2 {
        color: black;
        font-size: 1.6rem;
        margin-bottom: 1rem;
    }

    p{
        color: #000;
    }

    #details{
        font-size: 1.2rem;
        font-weight: 300;
    }

    .contentFeedBack {
        text-align: justify;
        margin: 10px;   
        font-size: 1.4rem;
        line-height: 1.9rem;
        font-weight:lighter;
    }

    @media screen and (max-width: 838px) {
        h3{
            color: black;
            margin: 1rem 0.2rem;
        }
    }
`

export default Feedbacks;