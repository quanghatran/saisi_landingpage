import styled from 'styled-components';

import { Wrapper } from '../../assets/styles';

const ContactHeader = () => {
    return ( 
        <ContactContainer>
            <StyledWrapper>
                <a href="mailto: satsi.edu@gmail.com">
                    <i className="far fa-envelope"></i>
                    <span>satsi.edu@gmail.com</span>
                </a>
                <a href="tel: 02422371777">
                    <i className="fas fa-phone-alt"></i>
                    <span>024.223.71777</span>
                </a>
            </StyledWrapper>
        </ContactContainer>
    );
}
 
const ContactContainer = styled.div`
    background-color: ${props => props.theme.colors.main};
    height: 3rem;

    & a{
        color: ${props => props.theme.colors.text};
        text-decoration: none;
        font-size: 1.4rem;
        font-weight: 400;
        margin-right: 1rem;
        @media screen and (max-width: 450px) {
            font-size: 1rem;
        }
    }

    & a:hover{
        color: rgba(255,255,255, 0.8)
    }

    & a i {
        margin-right: 0.5rem;
    }
`

const StyledWrapper = styled(Wrapper)`
    padding: 0.6rem 0;
    @media screen and (max-width: 1400px) {
        width: 90%; 
    }

    @media screen and (max-width: 450px) {
        padding: 1rem 0;
    }
`

export default ContactHeader;