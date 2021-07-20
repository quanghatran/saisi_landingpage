import styled from "styled-components";
import { Link } from "react-router-dom";

import { Wrapper } from "../../../../assets/styles";
import useFetch from "../../../../api/CustomHooks/useFetch";

const JobDescription = () => {
    const { data: categories, isPending, error } = useFetch(process.env.REACT_APP_API_URL + 'Categories');

	return (
        <Wrapper>
             <Title>
                <h1>DANH SÁCH CÁC NGÀNH TUYỂN SINH</h1>
            </Title>
          <ListIntroduction>
            { error && <div>{ error }</div>}
            { isPending && <div></div> }
            { categories && 
                categories.map((category) => (
                        <div  key={category.id}>
                            <Link to={'/nganh/' + category.id }>
                                <img src={process.env.REACT_APP_API_URL + category.Image} alt="" />
                            </Link>
                            <h3>{category.Title}</h3>
                            <Link to={'/nganh/' + category.id }>Xem thêm &#62;&#62;</Link>
                        </div>
                    ))
            }
          </ListIntroduction>
        </Wrapper>
	);
};

const ListIntroduction = styled.div`
    display: grid;
    column-gap: 6%;
    grid-template-columns: 47% 47%;
    a{
        font-size: 1.4rem;
        margin-bottom: 2rem;
        text-decoration: none;
        color: black;
        img{
            width: 100%;
            height : 40rem;
            object-fit: cover;
            overflow: hidden;
            margin-top: 2rem;

            box-shadow: 0 .5rem 1rem rgba(0,0,0,.15);
            filter: brightness(1);
            transition-duration:.2s;
            transition-delay: .2s;
        }

        img:hover {
            opacity: 0.7;
            opacity:1; 
            filter: brightness(0.7);
        }

        &:hover{
            color: ${props => props.theme.colors.main}
        }

        @media screen and (max-width: 400px){
            img{
                height: 20rem;
            }
        } 
    }

    h3{
        font-size: 2rem;
        margin-top: 2rem ;
        margin-bottom: 1rem;
    }

    @media screen and (max-width: 725px){
        display: block;
        div{
            margin: 0 1rem;
        }
    }

`;


const Title = styled.div`
    text-align: center;
    /* color: ${props => props.theme.colors.main}; */
    margin: 4rem 0 2rem;

    h1{
        font-size: 2.8rem;
        @media screen and (max-width: 700px){
            font-size: 2.5rem;
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



export default JobDescription;
