import ReactPlayer from 'react-player/lazy';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Fragment } from 'react';

import useFetch from '../../../../api/CustomHooks/useFetch';
import { Wrapper } from '../../../../assets/styles';

const Introduction = () => {
    const { data, isPending, error } = useFetch(process.env.REACT_APP_API_URL + 'Introduction');

    return (
      <IntroductionWrapper>
        {error && <div>{error}</div>}
        {isPending && ''}
        {data &&
          data.map((introduction) => (
            <Fragment key={introduction.id}>
              <Description>
                <Link to={'/gioi-thieu/' + introduction.id}>
                  <h1>{introduction.Title}</h1>
                </Link>
                <p
                  style={{ color: '#000 !important' }}
                  dangerouslySetInnerHTML={{ __html: introduction.SubTitle }}
                ></p>
              </Description>
              <VideoContainer>
                <PlayerContainer>
                  {/* <ReactPlayer
                    width='100%'
                    height='100%'
                    url={introduction.LinkVideo}
                  /> */}
                  <ReactPlayer
                        width="100%"
                        height="100%" 
                        config={{
                            youtube: {
                                playerVars: {
                                    origin: 'http://www.satsi.edu.vn/'
                                }
                            }
                        }}
                        url={introduction.LinkVideo}
                    />
                </PlayerContainer>
                <VideoDescription>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: introduction.Description,
                    }}
                  ></p>
                  <Link to='/ve-satsi'>
                    <span>
                      Xem thêm <i className='fas fa-angle-double-right'></i>
                    </span>
                  </Link>
                </VideoDescription>
              </VideoContainer>
            </Fragment>
          ))}
      </IntroductionWrapper>
    );
}
 
const IntroductionWrapper = styled(Wrapper)`
    padding: 2rem 0;
`

const Description = styled.div`
    width: 80%;
    margin: 0 auto;
    margin-bottom: 2.5rem;
    text-align: center;

    a{
        text-decoration: none;
        color: ${props => props.theme.colors.main};
    }

    h1 {
        &:hover{
            opacity: 0.7;
        }
    }

    & h1 {
        font-size: ${props => props.theme.fontSize.h1};
        padding: 1.5rem 5rem;
    }

    & p{
        font-size: ${props => props.theme.fontSize.p};
        line-height: 3rem;
    }

    @media screen and (max-width: 1051px){
        h1{
            font-size: 2.8rem;
            padding: 0;
        }

        p{
            line-height: 2.5rem;
            font-size: 1.3rem;
            padding: 0;
        }
    }
    @media screen and (max-width: 615px){
        h1{
            font-size: 2rem;
            margin-bottom: 1rem;
        }
    }
`

const VideoContainer = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    height: 100%;
    @media screen and (max-width: 838px){
        display: block;
        padding: 0 1rem;
    }
`

const PlayerContainer = styled.div`
    text-align: center;
    height: 36rem;
    @media screen and (max-width: 838px){
        height: 40rem;
    }
`

const VideoDescription = styled.div`
    display: flex;
    justify-items: center;
    text-align: center;
    flex-direction: column;
    background-color: ${props => props.theme.colors.main};
    color: ${props => props.theme.colors.text};
    padding: 3rem;
    p{
        line-height: 2.5rem;
        font-size: ${props => props.theme.fontSize.p};
        letter-spacing: 0.8px;
        margin: auto 0;
    }
    a{
        display:inline-block;
        color: white;
        text-decoration: none;
        margin: 0 auto;

        font-family: aktiv-grotesk-extended, sans-serif;
        font-size: 1.375rem;
        
        cursor: pointer;
        font-size: 16px;
        position: relative;
        white-space: nowrap;
        color: var(--color-text);

        &::before,
        &::after {
            position: absolute;
            width: 100%;
            height: 1px;
            background: currentColor;
            top: 100%;
            left: 0;
            pointer-events: none;
        }

        &::before {
            content: '';
            /* show by default */
        }
        &::before {
            transform-origin: 50% 100%;
            transition: clip-path 0.3s, transform 0.3s cubic-bezier(0.2, 1, 0.8, 1);
            clip-path: polygon(0% 0%, 0% 100%, 0 100%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%, 100% 100%, 100% 0%);
        }

        &:hover::before {
            opacity: 0.9;
            transform: translate3d(0, 2px, 0) scale3d(1.08, 3, 1);
            clip-path: polygon(0% 0%, 0% 100%, 50% 100%, 50% 0, 50% 0, 50% 100%, 50% 100%, 0 100%, 100% 100%, 100% 0%);
        }

        & span {
            margin-top: 1rem;
            padding: 1rem 2rem;
            border: 1px solid white;
            border-radius: 5px;
            i{
                margin-left: 0.6rem;
                font-size: 15px;
            }
            display: flex;
            align-items: center;
            transition: transform 0.3s cubic-bezier(0.2, 1, 0.8, 1);
        }

        &:hover span {
            opacity: 0.8;
            transform: translate3d(0, -2px, 0);
        }
    }
    @media screen and (max-width: 838px){
        padding: 1.5rem;
        line-height: 2rem;
        font-size: 1.3rem;
    }
`

export default Introduction;