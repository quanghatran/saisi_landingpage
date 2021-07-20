import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import { InforContainer, Wrapper } from "../../../../assets/styles";
import useFetch from "../../../../api/CustomHooks/useFetch";
import Pagination from "../../../../components/Pagination";


const JobAir = () => {
	const link = 'AirNews';
	const { data: category, isPending, error } = useFetch(process.env.REACT_APP_API_URL + 'Aviation');
    const [url, setUrl] = useState(`${process.env.REACT_APP_API_URL}${link}?page=1&size=6`);
	const [pageCount, setPageCount] = useState(1);
	const perPage = 6;

    const [posts, setPosts] = useState(null);
    const [isPendingPosts, setIsPendingPosts] = useState(true);
    const [errorPosts, setErrorPosts] = useState(null);

    useEffect(() => {
		const abortCont = new AbortController();

		fetch(url, { signal: abortCont.signal })
		.then(res => {
			if(!res.ok){
				throw Error('could not fetch the data for that resource');
			}
			setPageCount(Math.ceil(res.headers.get('Content-Range') / perPage));
			return res.json()
		})
		.then(data => {
			setPosts(data);
			setIsPendingPosts(false);
			setErrorPosts(null);
		})
		.catch(err => {
			if(err.name === 'AbortError'){
				// console.log('fetch aborted');
			} else {
				setIsPendingPosts(false);
				setErrorPosts(err.message);
			}
		});

		return () => abortCont.abort();
	}, [url, perPage]);
	
	const handlePageClick = e => {
		setUrl(`${process.env.REACT_APP_API_URL}${link}?page=${e.selected + 1}&size=${perPage}`);
	}


	setTimeout(function () {
		window.scrollTo(0, 0);
	}, 100);

	return (
		<StyledWrapper>
          	{ error && <div>{ error }</div>}
            { isPending && <div>loading...</div> }
            { category && 
                <InforContainer>
                    <h1>{category[0].Title}</h1>
                    <img src={process.env.REACT_APP_API_URL + category[0].Image} alt={category[0].Title} />
                    <div dangerouslySetInnerHTML={{__html: category[0].Content}}></div>
                </InforContainer>
            }
			<h1>TIN LIÊN QUAN</h1>
            <Content>
                { errorPosts && <div>{ errorPosts }</div>}
                { isPendingPosts && <div>loading...</div> }
                { posts && posts.map(post => (
                    <New key={post.id}>
                        <Link to={`/du-hoc-nganh-hang-khong/` + post.id}><img src={process.env.REACT_APP_API_URL + post.Image} alt={post.Title} /></Link>
                        <div>
                            <h3><Link to={`/du-hoc-nganh-hang-khong/` + post.id}>{post.Title}</Link></h3>
                            <Link to={`/du-hoc-nganh-hang-khong/` + post.id}>
                                <p>{new Date(post.Created_at).toLocaleDateString('en-GB')}</p>
                                <p>{post.Type}</p>
                                <p>{post.Author}</p>
                            </Link>
                            <p><Link to={`/du-hoc-nganh-hang-khong/` + post.id}>{post.SubContent}</Link></p>
                        </div>
                    </New>
                ))}
            </Content>
            <Pagination pageCount={pageCount} handlePageClick={handlePageClick}/>
        </StyledWrapper>
	);
};

const StyledWrapper = styled(Wrapper)`
	& > h1{
		font-size: 2.8rem;
	}
`

const Content = styled.div`
  display: grid;
  grid-template-columns: 28% 28% 28%;
  justify-content: space-between;
  @media screen and (max-width: 1000px) {
    grid-template-columns: 40% 40%;
    margin: 0 0.6rem;
  }
  @media screen and (max-width: 700px) {
    grid-template-columns: 48% 48%;
  }
  @media screen and (max-width: 550px) {
    display: block;
  }
`;

const New = styled.div`
	border-radius: 5px;
	box-shadow:  5px 5px 9px #cecece,
             	-5px -5px 9px #f2f2f2;	
	display: flex;
	flex-direction: column;
	margin-top: 2rem;
	overflow: hidden;
	& > div {
		padding: 0.4rem 0.4rem;
		width: 100%;
		& > a {
			color: #808080;
			display: flex;
			margin: 0.5rem 0;
			p{
				font-size: 1rem;
				margin-right: 1rem;
				font-weight: 500;
				text-transform: uppercase;
			}
		}
	}
	
	img {
		object-fit: cover;
		width: 100%;
		height: 20rem;
		margin-bottom: 1rem;
	}

	h3{
		width: 100%;
		font-weight: 500;
		font-size: 1.6rem;
		margin-bottom: 0.5rem;
		letter-spacing: 0.2px;
	}

	p{
		font-size: 1.4rem;
		line-height: 1.9rem;
		a{
			color: #808080!important;
		}
	}

	a{
		text-decoration: none;
		color: #000;
		&:hover{
			color: #721b00;
			opacity: 0.8;
		}
	}

	@media screen and (max-width: 550px){
		display: block;
		& > div{
			margin-top: 2rem;
			margin-left: 0;
		}
		img{
			width: 100%;
			height: auto;
		}
	}
`


export default JobAir;
