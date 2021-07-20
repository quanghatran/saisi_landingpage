import styled from 'styled-components';
import {Link} from 'react-router-dom';

import useFetch from '../../../../api/CustomHooks/useFetch';
import Button from '../../../../components/Button';
import { Wrapper } from '../../../../assets/styles';

const Prestige = () => {
    const { data, isPending, error } = useFetch(process.env.REACT_APP_API_URL + 'Pretige');
    return ( 
        <ReputaionContainer>
            <StyledWrapper>
                <h1>SATSI - UY TÍN SỐ 1 VỀ DU HỌC ĐỨC</h1>
                <CardContainer>
                    { error && <div>{ error }</div>}
                    { isPending && '' }
                    { data && 
                        data.map(card => (
                            <Card key={card.id}>
                                <Link to={`/uy-tin/` + card.id}>
                                    <img src={process.env.REACT_APP_API_URL + card.Image} alt={card.Title}/>
                                    <h2>{card.Title}</h2>
                                </Link>
                            </Card>
                        ))
                    }
                </CardContainer>
                <Button>ĐĂNG KÝ</Button>
            </StyledWrapper>
        </ReputaionContainer>
    );
}

const ReputaionContainer = styled.div`
`
const StyledWrapper = styled(Wrapper)`
    padding: 2rem 0 4rem;
    text-align: center;
    color: ${props => props.theme.colors.main};
    h1{
        font-size: ${props => props.theme.fontSize.h1};
        @media screen and (max-width: 1051px){
            font-size: 2.8rem;
        }

        @media screen and (max-width: 615px){
            font-size: 2rem;
        }
    }

    button {
        border: 1px solid ${props => props.theme.colors.main};
        color: ${props => props.theme.colors.main};
    }

`

const CardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(230px, 22%));
    grid-gap: 0 3%;
    justify-content: center;
    margin: 1.8rem 0 2.2rem;
    @media screen and (max-width: 1300px){
        grid-template-columns: 40% 40%;
        margin-bottom: 2rem;
    }
    @media screen and (max-width: 838px){
        margin: 0 1rem 1rem;
        display: block;
    }
`

const Card = styled.div`
    cursor: pointer;
    background-color: white;
    margin: 2rem 0;
    padding: 2rem 2rem 0;
    border-radius: 1.5rem;
    border: 1px solid gray;
    justify-content: center;
    align-items: center;
    height: 35rem;
    img{
        height: 20rem;
        width: 20rem;
        object-fit: cover;
        border-radius: 50%;
    }
    h2{
        color: #000;
        margin-top: 4rem;
        font-weight: 400;
        font-size: 1.4rem;
    }

    &:hover {
        box-shadow: 1px 3px 5px rgba(255, 255, 255, 0.5);
        opacity: 0.9;
    }

    a{
        text-decoration: none;
    }

    @media screen and (max-width: 838px){
        width: 60%;
        margin: 2rem auto;
    }

    @media screen and (max-width: 502px){
        width: 100%;
        margin: 2rem auto;
    }
`

export default Prestige;