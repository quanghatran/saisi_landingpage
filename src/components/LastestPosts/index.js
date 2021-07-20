import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LatestPosts = ({ posts, path }) => {
  return (
    <Container>
      <Wrap>
        <h2>Tin mới nhất</h2>
        <NewList>
          {posts &&
            posts.slice(0, 5).map((post) => {
              return (
                <h3 key={post.id}>
                  <Link to={`/${path}/` + post.id}>{post.Title}</Link>
                </h3>
              );
            })}
        </NewList>
      </Wrap>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  margin-top: 1rem;
  padding-left: 3rem;
  @media screen and (max-width: 978px) {
    display: none;
  }
`;
const Wrap = styled.div`
  position: sticky;
  top: 10%;
  & > h2 {
    font-weight: 500;
    display: inline-block;
    font-size: 18px;
    line-height: 23px;
    margin-bottom: 3rem;
    border-bottom: 1px solid ${(props) => props.theme.colors.main};
  }
`;

const NewList = styled.div`
  h3 {
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 1.8rem;
    padding-bottom: 2rem;
    margin-bottom: 2rem;
    border-bottom: 1px solid #e5e5e5;
    a {
      text-decoration: none;
      color: black;
      &:hover {
        color: #721b00;
        opacity: 0.8;
      }
    }
  }
`;

export default LatestPosts;
