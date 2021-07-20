import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { Wrapper } from '../../assets/styles';
import useFetch from '../../api/CustomHooks/useFetch';
import LastestPosts from '../LastestPosts';
import Pagination from '../Pagination';

const PostPage = ({ api, title, path }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const {
    data: lastestPosts,
    isPendingLP,
    errorLP,
  } = useFetch(process.env.REACT_APP_API_URL + api + '?page=1&size=5');
  const [pageCount, setPageCount] = useState(1);
  const perPage = 10;

  const [posts, setPosts] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    fetch(
      process.env.REACT_APP_API_URL +
        api +
        '?page=' +
        currentPage +
        '&size=' +
        perPage,
      { signal: abortCont.signal }
    )
      .then((res) => {
        if (!res.ok) {
          throw Error('could not fetch the data for that resource');
        }
        setPageCount(Math.ceil(res.headers.get('Content-Range') / perPage));
        return res.json();
      })
      .then((data) => {
        setPosts(data);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        if (err.name === 'AbortError') {
        } else {
          setIsPending(false);
          setError(err.message);
        }
      });

    return () => abortCont.abort();
  }, [api, currentPage, perPage]);

  const handlePageClick = (e) => {
    setCurrentPage(e.selected + 1);
  };

  setTimeout(function () {
    window.scrollTo(0, 0);
  }, 100);
  return (
    <Wrap>
      <h1>{title}</h1>
      <Container>
        <Content>
          {error && <div>{error}</div>}
          {isPending && <div>loading...</div>}
          {posts &&
            posts.map((post) => (
              <New key={post.id}>
                <Link to={`/${path}/` + post.id}>
                  <img
                    src={process.env.REACT_APP_API_URL + post.Image}
                    alt={post.Title}
                  />
                </Link>
                <div>
                  <h3>
                    <Link to={`/${path}/` + post.id}>{post.Title}</Link>
                  </h3>
                  <Link to={`/${path}/` + post.id}>
                    <p>
                      {new Date(post.Created_at).toLocaleDateString('en-GB')}
                    </p>
                    <p>{post.Type}</p>
                    <p>{post.Author}</p>
                  </Link>
                  <p>
                    <Link to={`/${path}/` + post.id}>{post.SubContent}</Link>
                  </p>
                </div>
              </New>
            ))}
          <Pagination pageCount={pageCount} handlePageClick={handlePageClick} />
        </Content>
        {errorLP && <div>{errorLP}</div>}
        {isPendingLP && <div>loading...</div>}
        {lastestPosts && <LastestPosts posts={lastestPosts} path={path} />}
      </Container>
    </Wrap>
  );
};

const Wrap = styled(Wrapper)`
  & > h1 {
    letter-spacing: 1px;
    font-weight: 400;
    margin: 3rem 0 2rem;
    text-align: center;
    @media screen and (max-width: 550px) {
      margin-bottom: 0;
    }
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 70% 25%;
  grid-gap: auto;
  padding: 2rem 1rem;
  border-top: 1px solid #e5e5e5;
  @media screen and (max-width: 978px) {
    display: block;
  }
  @media screen and (max-width: 550px) {
    border-top: 0;
  }
`;

const Content = styled.div`
  border-right: 1px solid #e5e5e5;
  padding-right: 3rem;
  @media screen and (max-width: 978px) {
    padding-right: 0;
    border-right: none;
  }
`;

const New = styled.div`
  display: flex;
  padding-top: 2rem;
  margin-top: 2rem;
  border-top: 1px solid #e5e5e5;
  &:first-child {
    border-top: none;
    margin-top: 1rem;
    padding-top: 0;
  }
  & > div {
    width: 100%;
    margin-left: 3rem;
    & > a {
      color: #808080;
      display: flex;
      margin: 0.5rem 0;
      p {
        font-size: 1.2rem;
        margin-right: 1rem;
        font-weight: 500;
        text-transform: uppercase;
      }
    }
  }

  img {
    object-fit: cover;
    width: 20rem;
    height: 14rem;
  }

  h3 {
    font-weight: 400;
    font-size: 2rem;
    margin-bottom: 0.5rem;
    letter-spacing: 0.2px;
  }

  p {
    font-size: 1.4rem;
    line-height: 1.9rem;
    a {
      color: #808080 !important;
    }
  }

  a {
    text-decoration: none;
    color: #000;
    &:hover {
      color: #721b00;
      opacity: 0.8;
    }
  }

  @media screen and (max-width: 550px) {
    display: block;
    & > div {
      margin-top: 2rem;
      margin-left: 0;
    }
    img {
      width: 100%;
      height: auto;
    }
  }
`;

export default PostPage;
