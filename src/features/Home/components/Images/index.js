import styled from "styled-components";
import Slider from 'react-slick';
import { useMediaQuery } from 'react-responsive';

import Button from '../../../../components/Button';
import { Wrapper } from '../../../../assets/styles';
import useFetch from '../../../../api/CustomHooks/useFetch';

const Images = () => {
    const { data, isPending, error } = useFetch(process.env.REACT_APP_API_URL + 'Images');
    let settings = {
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        swipeToSlide:true,
        infinite: true,
        autoplay: true,
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
                <h1>HÌNH ẢNH</h1>
                <p style={{color:"#000"}}>SATSi luôn thể hiện trách nhiệm xã hội thông qua các hoạt động đồng hành tư vấn, hướng nghiệp và đào tạo nguồn nhân lực tinh hoa Việt.</p>
                <Slider {...settings}>
                    { error && <div>{ error }</div>}
                    { isPending && '' }
                    { data && 
                        data.map(card => (
                            <Card key={card.id}>
                                <img  src={process.env.REACT_APP_API_URL + card.Image} alt={card.ImageName} />
                            </Card>
                        ))
                    }
                </Slider>
                <Button>ĐĂNG KÝ</Button>
            </StyledWrapper>
        </Container>
    );
}
 
const Container = styled.div`
`
const StyledWrapper = styled(Wrapper)`
    text-align: center;
    color: ${props => props.theme.colors.main};

    padding: 2rem 0 0;
    h1 {
        font-size: ${props => props.theme.fontSize.h1};
    }

    p {
        font-size: ${props => props.theme.fontSize.p};
        margin: 2rem 10rem;
    }

    Button {
        margin-top: 2rem;
        background-color: ${props => props.theme.colors.main};
    }

    

    @media screen and (max-width: 1000px){
        h1{
            font-size: 2.8rem;
        }
        p{
            margin: 1rem 2rem;
            font-size: 1.4rem;
        }
    }

    @media screen and (max-width: 615px){
        h1{
            font-size: 2rem;
        }
    }  
  
`

const Card = styled.div`
    background-color: white;
    margin-bottom: 2rem;
    height: 30rem;
    padding: 0 2rem;
    img {
        width: 100%;
        height: 300px;
        object-fit: cover;
    }
    @media screen and (max-width: 838px){
        width: 70%;
        margin: 1rem auto;
    }

    @media screen and (max-width: 500px){
        width: 100%;
        margin: 1rem auto;
    }
`

export default Images;