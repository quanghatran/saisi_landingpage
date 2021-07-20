import styled from 'styled-components';

import useFetch from '../../../../api/CustomHooks/useFetch';
import { Wrapper } from '../../../../assets/styles';


const Commitment = () => {
    const { data, isPending, error } = useFetch(process.env.REACT_APP_API_URL + 'Commitment');
    return ( 
    <StyledWrapper>
        <CardContainer>
            { error && <div>{ error }</div>}
            { isPending && '' }
            { data && 
                data.map(card => (
                    <Card key={card.id}>
                        <div><img src={process.env.REACT_APP_API_URL + card.Image} alt={card.Title} /></div>
                        <h2>{card.Title}</h2>
                        <div dangerouslySetInnerHTML={{__html: card.Content}}></div>
                    </Card>
                ))
            }
        </CardContainer>
    </StyledWrapper>
    );
}
 
const StyledWrapper = styled(Wrapper)`
    text-align: center;
    margin: 2rem auto;
`

const CardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 30%));
    grid-gap: 0 3%;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
    height: 50rem;
    @media screen and (max-width: 1100px){
        height: 100%;
        margin: 0 1rem;
        display: block;
    }
`

const Card = styled.div`
    div:first-child{
        height: 30rem;
        border-radius: 5px;
        overflow: hidden;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        @media screen and (max-width: 1100px){
            width: 50%;
            margin: 2rem auto;
        }

        @media screen and (max-width: 838px){
            width: 60%;
        }

        @media screen and (max-width: 502px){
            width: 100%;
            margin: 2rem auto;
        }
    }
    h2{
        margin: 1rem 0 1.5rem;
        height: 2rem;
        color: ${props => props.theme.colors.main};
    }

    p{
        padding: 0 6rem;
        font-size: 1.4rem;
    } 
`

export default Commitment;