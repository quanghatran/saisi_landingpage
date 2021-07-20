import styled from "styled-components";

import useFetch from '../../../../api/CustomHooks/useFetch';
import Button from '../../../../components/Button';
import { Wrapper } from '../../../../assets/styles';

const Condition = () => {
    const { data, isPending, error } = useFetch(process.env.REACT_APP_API_URL + 'Condition');

    return ( 
        <Container>
            <StyleWrapper>
                <h1>ĐIỀU KIỆN THAM GIA ỨNG TUYỂN</h1>
                <p>Nếu bạn đáp ứng đủ các điều kiện dưới đây, kết nối ngay với SATSi để lên đường du học tại CHLB Đức:</p>
                { error && <div>{ error }</div>}
                { isPending && '' }
                { data && 
                    data.map(condition => (
                        <h3 key={condition.id}>{condition.Content}</h3>
                    ))
                }
                <Button>ĐĂNG KÝ</Button>
            </StyleWrapper>
        </Container>
    );
}
 
const Container = styled.div`
    color: ${props => props.theme.colors.text};
    text-align: center;
`

const StyleWrapper = styled(Wrapper)`
    background-color: ${props => props.theme.colors.main};
    & > h1 {
        font-size: ${props => props.theme.fontSize.h1};
        padding-top: 3rem;
    }
    & > p {
        font-size: ${props => props.theme.fontSize.p};
        padding: 1rem auto; 
        line-height: 2.5rem;
    }
    & > h3 {
        padding: 1rem;
        margin: 1rem auto;
        width: 80%;
        height: auto;
        font-size: 1.5rem;
        font-weight: 700;
        color: black;
        background-color: white;
        border-radius: 6px;
        line-height: 2rem;
    }

    div:last-child{
        margin: 2rem 0 3rem;
    }

    @media screen and (max-width: 838px){
        h1 {
            font-size: 2.8rem;
        }
        p {
            padding: 1rem 5rem;
        }
        h3{
            text-align: left;
        }
    }

    @media screen and (max-width: 638px){
        padding: 0 1rem;
        h1{
            font-size: 2rem;
        }
        & > p{
            padding: 0;
        }

        h3{
            width: 100%;
            font-size: 1.5rem;
        }
    }
`

export default Condition;