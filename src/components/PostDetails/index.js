import { Fragment } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';

import useFetch from '../../api/CustomHooks/useFetch';
import { Wrapper, InforContainer } from '../../assets/styles';
import LastestPosts from '../LastestPosts';

const PostDetails = ({ api, path }) => {
  const { id } = useParams();
  const history = useHistory();

  const {
    data: post,
    isPending,
    error,
  } = useFetch(process.env.REACT_APP_API_URL + `${api}/${id}`);
  const {
    data: lastestListPosts,
    isPendingLP,
    errorLP,
  } = useFetch(process.env.REACT_APP_API_URL + `${api}?page=1&size=5`);

  setTimeout(function () {
    window.scrollTo(0, 0);
  }, 100);

  return (
    <Wrapper>
      <Container>
        <InforContainer>
          {error && <div>{error}</div>}
          {isPending && <div>loading...</div>}
          {post && (
            <Fragment key={post.id}>
              <button
                onClick={() => history.goBack()}
                className='fas fa-arrow-left'
              ></button>
              <h1>{post.Title}</h1>
              <Info>
                <p>{new Date(post.Created_at).toLocaleDateString('en-GB')}</p>
                <p>{post.Type}</p>
                <p>{post.Author}</p>
              </Info>
              <div dangerouslySetInnerHTML={{ __html: post.Content }}></div>
            </Fragment>
          )}
        </InforContainer>
        {errorLP && <div>{errorLP}</div>}
        {isPendingLP && <div>loading...</div>}
        {lastestListPosts && (
          <LastestPosts posts={lastestListPosts} path={path} />
        )}
      </Container>
    </Wrapper>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 70% 25%;
  grid-gap: auto;
  padding: 2rem 1rem;
  border-top: 1px solid #e5e5e5;
  @media screen and (max-width: 978px) {
    display: block;
  }
`;

const Info = styled.dl`
  color: #808080;
  display: flex;
  margin: 0.5rem 0 2rem 2.6%;
  p {
    font-size: 1.2rem;
    margin-right: 1rem;
    font-weight: 500;
    text-transform: uppercase;
  }
`;

export default PostDetails;
