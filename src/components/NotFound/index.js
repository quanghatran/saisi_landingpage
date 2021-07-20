import styled from 'styled-components';

const NotFound = () => {
    return (  
        <Container><h1>Oopss ...404 Page Not found!!!</h1></Container>
    );
}
 
const Container = styled.div`
    display: flex;
    text-align: center;
    h1{
        color: gray;
        width: 100%;
        margin: auto 0;
    }
    height: 100vh;
    width: 100%
`


export default NotFound;