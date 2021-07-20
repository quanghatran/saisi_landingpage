import styled, { keyframes } from 'styled-components';

export const Wrapper = styled.div`
    max-width: 1200px;
    margin: 0 auto;
`

export const InforContainer = styled.div`
    position: relative;
    border-bottom: 1px solid ${props => props.theme.colors.main};
    margin: 3.4rem auto 3rem;

    img{
        margin: 1rem auto 1rem;
        max-width: 100%;
        height: auto;
        padding: 0 auto;
        object-fit: fill;
        display: block;
        text-align: center;
    }

    button{
        position: absolute;
        top: 0.55rem;
        left: 0.4rem;
        background-color: transparent;
        font-size: 2rem;
        border: none;
        color: ${props => props.theme.colors.main};
        margin-bottom: 3rem;
        cursor: pointer;
        &:hover{
            opacity: 0.4;
        }
    }

    h1{
        font-size: 2.8rem;
        text-align: center;
        margin-bottom: 3rem;
        padding: 0 2rem;
    }

    h2{
        font-size: 2.4rem;
        margin-bottom: 2rem;
    }

    h3{
        font-size: 2rem;
        font-weight: 500;
        margin-bottom: 2rem;
    }

    div {
        padding: 0 2rem 4rem;
        p{
            font-size: 1.6rem;
            margin: 2rem 0;
        }
    }

    ul {
        list-style-type: circle;
        padding-left: 3rem;
        li {
            font-size: 1.6rem;
            padding: 0.5rem 0;
        }
    }

    ol {
        list-style-type: number;
        padding-left: 3rem;
        li {
            font-size: 2rem;
            padding: 0.5rem 0;
        }
    }

    tr{
        font-size: 15px;

        &:hover{
            background-color: #f5f5f5;
        }
    }


    table, td, th {  
        border: thin solid #ddd;
        text-align: left;
    }

    table {
        border-collapse: collapse;
        width: auto;
    }

    th, td {
        padding: 15px;
    }

    th{
        text-align: center;
    }
    
    strong {
        text-align: center;
    }

    @media screen and (max-width: 1051px){
        div{
            padding: 0 1rem 4rem;
        }
        h1{
            font-size: 2.8rem;
        }

        h2{
            font-size: 2.8rem;
        }
        h3{
            font-size: 2.8rem;
        }
    }

    @media screen and (max-width: 615px){
        h1{
            font-size: 2rem;
        }

        h2{
            font-size: 1.8rem;
        }
        
        h2{
            font-size: 1.8rem;
        }

        ul {
            li {
                font-size: 1.8rem;
                padding: 0.5rem 0;
            }
        }
    }
`

export const Button = styled.button`
    cursor: pointer;
    padding: 1.4rem 3.5rem;
    border-radius: 1rem;
    border: 1px solid white;
    background-color: transparent;
    color: ${props => props.theme.colors.text};
    font-weight: 700;
    &:hover{
        opacity: 0.7;
    }
`

export const TurnIn = keyframes`
    0% {
        opacity: 0;
        transform: translateX(-10px);
    }
    100% {
        opacity: 0.9;
        transform: translateX(0);
    }
`

export const FadeIn = keyframes`
    0% {
        opacity: 0;
    }
`

export const Rotate = keyframes`
    0%{
        transform: rotateY(180deg);
        opacity: 0;
    }
    100%{
        tansform: rotateY(0);
        opacity: 1;
    }
`