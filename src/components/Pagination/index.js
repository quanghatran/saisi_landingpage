import ReactPaginate from 'react-paginate';
import styled from 'styled-components';

const Pagination = (props) => {
    return (  
        <Styled>
            <ReactPaginate
                previousLabel={"<<"}
                nextLabel={">>"}
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={props.pageCount}
                marginPagesDisplayed={1}
                pageRangeDisplayed={3}
                onPageChange={props.handlePageClick}
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                activeClassName={"active"}
            />
        </Styled>
    );
}
 
const Styled = styled.div`
    margin-top: 7rem;
    .pagination{
        margin: 15px auto;
        display: flex;
        list-style: none;
        outline: none;
        align-items: center;
        justify-content: center;
    }
    .pagination > .active > a {
        background-color: rgba(114, 27, 0, 0.9)!important;
        border-color: rgba(114, 27, 0, 0.9)!important ;
        color: #fff;
    }
    .pagination > li > a{
        border: 1px solid #e5e5e5 ;
        padding: 10px 15px;
        outline: none;
        cursor: pointer;
        font-size: 1.2rem;
        font-weight: 700;
        &:hover {
            opacity: 0.8;
        }
        @media screen and (max-width: 550px){
			padding: 7px 12px;
		}
    }
    .pagination > .active > a, .pagination > .active > span, .pagination > .active > a:hover, .pagination > .active > span:hover, .pagination > .active > a:focus, .pagination > .active > span:focus{
        background-color: ${props => props.theme.colors.main}  ;
        border-color: #e5e5e5 ;
        outline: none ;
    }
    .pagination > li > a, .pagination > li > span{
        color: ${props => props.theme.colors.main} 
    }
        .pagination > li:first-child > a, .pagination > li:first-child > span, .pagination > li:last-child > a, .pagination > li:last-child > span{
        border-radius: unset
    }
`

export default Pagination;