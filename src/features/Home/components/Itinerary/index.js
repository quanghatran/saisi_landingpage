import { Link } from "react-router-dom";
import styled from "styled-components";

import { Wrapper } from '../../../../assets/styles';

const Itinerary = () => {
    return (  
        <Container>
            <StyledWrapper>
                <Link to="/lo-trinh">
                    <h1>LỘ TRÌNH DU HỌC TẠI ĐỨC</h1>
                    <p>Lộ trình du học được SATSi xây dựng rõ ràng, công khai và minh bạch. Đặc biệt, SATSi luôn ở bên đồng hành và hỗ trợ học viên trong suốt hành trình du học.</p>
                </Link>
            </StyledWrapper>
        </Container>
    );
}
 
const Container = styled.div`
  /* background-color: ${(props) => props.theme.colors.text}; */
`;

const StyledWrapper = styled(Wrapper)`
    margin-bottom: 5rem;
    a{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: ${props => props.theme.colors.main};
        color: ${props => props.theme.colors.text};
        padding: 2rem;
        text-decoration: none;
    
    }

    a h1{
        font-size: ${props => props.theme.fontSize.h1};
        padding-bottom: 2rem;
    }
    p{
        text-align: center;
        margin: 0 34rem;
        line-height: rem;
        font-size: ${props => props.theme.fontSize.p};
    }

    a h1 {
        &:hover{
            opacity: 0.6;
        }
    }
    @media screen and (max-width: 1051px){
        a h1{
            font-size: 2.8rem;
            text-align: center;
        }
        a p{
            text-align: center;
            margin: 0 6rem;
            font-size: 1.4rem;
        }
    }

    @media screen and (max-width: 615px){
        a h1{
            font-size: 2rem;
        }
    }  
`

export default Itinerary;