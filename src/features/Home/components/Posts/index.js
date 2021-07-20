import styled from "styled-components";
import { Link } from 'react-router-dom';

import useFetch from '../../../../api/CustomHooks/useFetch';
import { Wrapper } from '../../../../assets/styles';

const Posts = () => {
    const { data: posts, isPending, error } = useFetch(process.env.REACT_APP_API_URL + 'Posts?page=1&size=4');

    return (  
        <StyledWrapper>
            <h1><Link to="/tin-tuc">TIN TỨC & SỰ KIỆN</Link></h1>
            { error && <div>{ error }</div>}
            { isPending && '' }
            { posts && 
                <PostsContainer>
                    <LeftSide to={`/tin-tuc/` + posts[0].id}>
                        <img src={process.env.REACT_APP_API_URL + posts[0].Image} alt={posts[0].Title}/>
                        <Content>
                            <h3>{posts[0].Title}</h3>
                            <div>
                                <p>{new Date(posts[0].Created_at).toLocaleDateString('en-GB')}</p>
                                <p>{posts[0].Type}</p>
                                <p>{posts[0].Author}</p>
                            </div>
                            <p>{posts[0].SubContent}</p>
                        </Content>
                    </LeftSide>
                    <RightSide>
                        <ItemRightSide to={`/tin-tuc/` + posts[1].id}>
                            <img src={process.env.REACT_APP_API_URL + posts[1].Image} alt={posts[1].title}/>
                            <Content>
                                <h3>{posts[1].Title}</h3>
                                <div>
                                    <p>{new Date(posts[1].Created_at).toLocaleDateString('en-GB')}</p>
                                    <p>{posts[1].Type}</p>
                                    <p>{posts[1].Author}</p>
                                </div>
                                <p>{posts[1].SubContent}</p>
                            </Content>
                        </ItemRightSide>
                        <ItemRightSide to={`/tin-tuc/` + posts[2].id}>
                            <img src={process.env.REACT_APP_API_URL + posts[2].Image} alt={posts[2].Title}/>
                            <Content>
                                <h3>{posts[2].Title}</h3>
                                <div>
                                    <p>{new Date(posts[2].Created_at).toLocaleDateString('en-GB')}</p>
                                    <p>{posts[2].Type}</p>
                                    <p>{posts[2].Author}</p>
                                </div>
                                <p>{posts[2].SubContent}</p>
                            </Content>
                        </ItemRightSide>
                        <ItemRightSide to={`/tin-tuc/` + posts[3].id}>
                            <img src={process.env.REACT_APP_API_URL + posts[3].Image} alt={posts[3].Title}/>
                            <Content>
                                <h3>{posts[3].Title}</h3>
                                <div>
                                    <p>{new Date(posts[3].Created_at).toLocaleDateString('en-GB')}</p>
                                    <p>{posts[3].Type}</p>
                                    <p>{posts[3].Author}</p>
                                </div>
                                <p>{posts[3].SubContent}</p>
                            </Content>
                        </ItemRightSide>
                    </RightSide>
                </PostsContainer>
            }
            <Link id="Link" to="/tin-tuc">Xem thêm</Link>
        </StyledWrapper>
    );
}
 
const StyledWrapper = styled(Wrapper)`
    padding: 2.5rem 0 1.5rem;
    text-align: center;
    margin: 2rem auto;

    h1{
        font-size: ${props => props.theme.fontSize.h1};
        a{
            text-decoration: none;
            color: ${props => props.theme.colors.main};
        }
        &:hover{
            opacity: 0.6;
        }
    }

    #Link {
        font-size: 2rem;
        color: ${props => props.theme.colors.text};
        background-color: ${props => props.theme.colors.main};
        text-decoration: none;
        border-radius: 1rem;
        border: 1px solid white;
        padding: 1rem 2rem;

        &:hover{
            opacity: 0.6;
        }
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
const PostsContainer = styled.div`
    margin: 2rem 0;
    display: grid;
    grid-template-columns: 50% 48%;
    grid-gap: 1%;
    @media screen and (max-width: 838px){
        display: block;
        margin: 2rem;
    }
`

const LeftSide = styled(Link)`
    text-decoration: none;
    img{
        display: inline-block;
        height: 30rem;
        width: 100%;
        /* border: 0.1px solid black; */
        object-fit: cover;
    
        &:hover{
            opacity: 0.7
        }
    }

    & > div {
        color: gray;
        /* background-color: #4e2f2a; */
        padding: 1rem 0 2rem;
        h3 {
            color: black;
            margin: 0.5rem 0;
            &:hover{
                color: #b32c02;
            }
        }
    }
`

const RightSide = styled.div`
    margin-left: 1rem;
    display: grid;
    grid-row: auto auto auto;
    grid-gap: 5%;

    @media screen and (max-width: 838px){
        margin: 2rem 0 0 0;
        grid-gap: 2%;
    }
    @media screen and (max-width: 500px){
        display: block;
    }
`

const ItemRightSide = styled(Link)`
    color: black;
    text-decoration: none;
    display: flex;
    color: gray;

    img {
        height: 10rem;
        width: 20rem;
        /* border: 1px solid black; */
        object-fit: cover;
        &:hover{
            opacity: 0.7
        }
    }

    & > div {
        width: 100%;
        margin-left: 1rem;
     
        @media screen and (max-width: 838px){
            height: 12rem
        }
    }

    @media screen and (max-width: 500px){
        flex-direction: column;
        margin-bottom: 1rem;
        & > div {
            margin-left: 0;
        }
        img{
            margin-bottom: 1rem;
            height: 30rem;
            width: 100%;
        }
    }
`


const Content = styled.div`
    text-align: left;
    h3 {
        color: black;
        font-size: 1.55rem;
        &:hover{
            color: #b32c02;
        }
    }

    & > p{
        line-height: 1.5rem;
        font-size: 1.2rem;
    }

    div {
        display: flex;
        margin: 0.5rem 0;
        p{
            font-size: 1.2rem;
            margin-right: 1rem;
            font-weight: 500;
        }
    }
`

export default Posts;