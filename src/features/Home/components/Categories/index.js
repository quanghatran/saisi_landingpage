import Slider from 'react-slick';
import { useMediaQuery } from 'react-responsive';
import styled from "styled-components";
import { Link } from "react-router-dom";


import useFetch from '../../../../api/CustomHooks/useFetch';
import { Wrapper, Rotate } from '../../../../assets/styles';

const Categories = () => {
    const { data: categories, isPending, error } = useFetch(process.env.REACT_APP_API_URL + 'Categories');
    
    const is1150px = useMediaQuery({ query: '(max-width: 1150px)' });
    const is700px = useMediaQuery({ query: '(max-width: 700px)' });

    let settings = {
        infinite: true,
        speed: 1000,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        pauseOnHover: true,
        arrows: true
    }

    settings = is1150px ? {
        ...settings,
        slidesToShow: 2,
        speed: 500,
    } : settings;
   
    settings = is700px ? {
        ...settings,
        slidesToShow: 1,
    } : settings;

    return ( 
        <Container>
            <StyledWrapper>
                <h1>CÁC NGÀNH DU HỌC ĐỨC</h1>
                <StyledSlider {...settings}>
                    { error && <div>{ error }</div>}
                    { isPending && '' }
                    { categories && 
                        categories.map(category => (
                            <Content key={category.id}>
                                <h2>{category.Title}</h2>
                                <div dangerouslySetInnerHTML={{__html: category.Detail }}></div>
                                <div id="hover" style={{backgroundImage: `url(${process.env.REACT_APP_API_URL + category.Image})`}}>
                                    <div id="overlay">
                                    </div>
                                    <div id="content">
                                        <Link to={`/nganh/`+ category.id}>
                                            <h2>{category.CategoryName}</h2>
                                        </Link>
                                        <Link to={`/nganh/`+ category.id}>
                                            <button>TÌM HIỂU THÊM</button>
                                        </Link>
                                    </div>
                                </div>
                            </Content>
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
    padding: 4rem 1.8rem 5rem;
    background-color: ${props => props.theme.colors.main};
    h1{
        color: ${props => props.theme.colors.text};
        text-align: center;
    }

    @media screen and (max-width: 1000px){
        h1{
            font-size: 2.8rem;
        }
    }

    @media screen and (max-width: 615px){
        h1{
            font-size: 2rem;
        }
    }  
`

const StyledSlider = styled(Slider)`
    padding-top: 3rem;
    color: ${props => props.theme.colors.main};

    .slick-arrow{
        margin: 0rem 0.85rem;
    }

    .slick-slide{
        padding: 0 0.7rem;
    }
`

const Content = styled.div`
    position: relative;
    color: black;
    background-color: white;
    border: 1px solid black;
    border-radius: 6px;
    min-height: 30rem;
    padding: 2.6rem 2.4rem;

    @media screen and (max-width: 1000px){
        h2{
            font-size: 2rem;
        }
    }

    h2{
        color: ${props => props.theme.colors.main};
        opacity: 0.7;
        text-align: center;
        font-size: 2.2rem;
        font-weight: 700;
    }

    ul{
        list-style-type: none;
        padding-top: 1rem;
        li{
            font-size: 1.4rem;
            margin: 1rem 0;
        }
    }

    p{
        font-size: 1.4rem;
    }

    #hover{
        display: none;
        border-radius: 6px;
        position: absolute;
        top: -2px;
        left: -3px;
        width: 101.4%;
        height: 101.4%;
        background-size: cover;
        #overlay{
            position: absolute;
            width: 100%;
            height: 100%;
            border-radius: 6px;
            background-color: black;
            opacity: 0.6;
        }
        #content{
            position: absolute;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            a{
                display: inline-block;
                text-decoration: none;
                margin: 0 auto;
                width: auto;
                h2{
                    color: white;
                    margin: 2rem 0;
                    font-size: 2.3rem;
                    font-weight: 700;
                    letter-spacing: 0.3rem;
                    &:hover{
                        color: ${props => props.theme.colors.yellow};
                    }
                }
                button{
                    background-color: ${props => props.theme.colors.main};
                    color: white;
                    font-size: 1.3rem;
                    font-weight: 700;
                    padding: 1.5rem;
                    border: none;
                    border-radius: 2rem;
                    cursor: pointer;
                    &:hover{
                        opacity: 0.75;
                        color: ${props => props.theme.colors.yellow};
                    }
                }
            }
        }
    }
    
    &:hover, &:active {
        #hover{
            animation: ${Rotate} 0.8s ease-out;
            display: block;   

                @media screen and (max-width: 415px){
                    animation: none;
                }    
        }
    }
`

export default Categories;