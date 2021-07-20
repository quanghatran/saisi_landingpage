import { useCallback, useEffect, useState } from "react";
import debounce from "lodash/debounce"
import { Link } from "react-router-dom";
import styled from "styled-components";

const Search = () => {
  const [query, setQuery] = useState('');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const updateDataQuery = () => {
    fetch(`${process.env.REACT_APP_API_URL}Posts/Search/index?key=${query}`,)
      .then((res) => {
        if (!res.ok) {
          throw Error('could not fetch the data for that resource');
        }
        return res.json();
      })
      .then((data) => {
        setData(data.slice(0, 6));
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        if (err.name === 'AbortError') {
          // console.log('fetch aborted');
        } else {
        }
      });
  }

  const delayedQuery = useCallback(debounce(updateDataQuery, 500), [query]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const abortCont = new AbortController();

    delayedQuery();

    return () => { 
      delayedQuery.cancel();
      abortCont.abort();
    }
  }, [query, delayedQuery]);

  const handleChange = (e) => {
    setLoading(true)
    setQuery(e.target.value);
    // console.log(query);
  };

  const handleBlur = () => {
    setTimeout(() => setQuery(''), 10);
  }

  return (
    <SearchWrapper>
      <form>
        <input
          value={query}
          onChange={handleChange}
          onBlur={() => handleBlur()}
          type='search'
          placeholder='Tìm kiếm...'
          spellCheck={false}
          required
        />
        {loading ? (
          <div
            type='submit'
            style={{ color: 'black' }}
            className='btn fa fa-circle-o-notch fa-spin'
          ></div>
        ) : (
          <div type='submit' className='btn fas fa-search'></div>
        )}
        <DropdownData>
          <ul>
            {data.map((post) => {
              return (
                <li key={post.id}>
                  <Link
                    to={'/tin-tuc/' + post.id}
                    dangerouslySetInnerHTML={{
                      __html: post.Title.replace(
                        new RegExp(query, 'gi'),
                        (match) => `<span class='active'>${match}</span>`
                      ),
                    }}
                  ></Link>
                </li>
              );
            })}
          </ul>
        </DropdownData>
      </form>
    </SearchWrapper>
  );
}
 
const SearchWrapper = styled.div`
  form {
    input[type='search']::-webkit-search-decoration,
    input[type='search']::-webkit-search-cancel-button,
    input[type='search']::-webkit-search-results-button,
    input[type='search']::-webkit-search-results-decoration {
      -webkit-appearance: none;
    }

    position: relative;
    display: flex;
    align-items: center;
    padding: 0 0.5rem 0 1rem;
    height: 2.9rem;
    border-radius: 1.8rem;
    background-color: ${(props) => props.theme.colors.text};
    width: 13rem;

    @media screen and (max-width: 1129px) {
      border: 1px solid ${(props) => props.theme.colors.gray};
      width: 9.5rem;
      height: 3.5rem;
    }

    & input {
      border: none;
      padding: 0 0.4rem;
      height: 2.8rem;
      outline: none;
      font-size: 1.4rem;
      background-color: transparent;
      width: 9rem;
      @media screen and (max-width: 1129px) {
        width: 6rem;
        font-size: 1.6rem;
      }
    }

    & .btn {
      font-size: 1.5rem;
      border: none;
      color: ${(props) => props.theme.colors.gray};
      cursor: pointer;
      background-color: transparent;
      @media screen and (max-width: 1129px) {
        font-size: 1.3rem;
      }
    }

    img {
      object-fit: scale-down;
    }
  }
`;

const DropdownData = styled.div`
  position: absolute;
  top: 100%;
  right: -30%;
  width: 170%;
  box-shadow: 0 .5rem 1rem rgba(0,0,0,.15)!important;
  border-radius: 2px 2px 8px 8px;
  overflow: hidden;

  @media screen and (max-width: 1129px){
    right: 0;
    top: 138%;
    width: 200%;
  }
  ul {
    list-style-type: none;
    background: #fff;
    color: black;

    li {
      a{
        font-size: 1.2rem;
        padding: 7px 12px;
        text-decoration: none;
        color: black;
        display: inline-block;
      }
      .active{
        font-weight: 700;
        /* color: #ae0000; */
      }
    }

    li:hover{
      background: lightgray;
    }
  }
`

export default Search;