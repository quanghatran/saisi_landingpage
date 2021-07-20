import { useEffect, useState } from "react";
import styled from "styled-components";

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
        })
    }

    useEffect(() => {
        const toggleVisibility = () => {
            if(window.pageYOffset > 500){
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
    
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, [])

    return ( 
        <>
            {isVisible && (
                <StyledScroll onClick={scrollToTop}>
                    <i className="fas fa-arrow-up"></i>
                </StyledScroll>
            )}
        </>
    );
}
 
const StyledScroll = styled.div`
    display: inline-block;
    position: fixed;
    bottom: 1rem;
    right: 3.1rem;
    font-size: 2.2rem;
    border-radius: 50%;
    width: 4rem;
    height: 4rem;
    background-color: red;
    opacity: 0.4;
    text-align: center;
    color: white;
    cursor: pointer;
    @media screen and (max-width: 500px){
        right: 1rem;
    }
    &:hover{
        opacity: 1;
    }

    i {
        margin-top: 0.7rem;
    }
`

export default ScrollToTop;