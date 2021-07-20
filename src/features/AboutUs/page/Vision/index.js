import styled from "styled-components";
import { Wrapper } from "../../../../assets/styles";
import pdf from '../../../../satsi_profile.pdf'

const Vision = () =>  {
	return (
		<StyledWrapper>
		    <iframe src={pdf} title="tét"></iframe>
		</StyledWrapper>
	);
}

const StyledWrapper = styled(Wrapper)`
	position: relative;
	height: 70rem;
	max-width: 1300px;
	min-height: 50rem;
	& iframe {
		position: absolute;
		width: 100%;
		height: 100%;
	}
`

export default Vision;
	// import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
	// import { useState } from "react";
	// const [numPages, setNumPages] = useState(null);
	// const [pageNumber, setPageNumber] = useState(1);

	// const onDocumentLoadSuccess = ({ numPages }) => {
	// 	setNumPages(numPages);
	// };

	// const goToPrevPage = () =>
	//   setPageNumber(pageNumber - 1)
	// const goToNextPage = () =>
	//   setPageNumber(pageNumber + 1)
	// <Document
	// 	file="/test.pdf"
	// 	onLoadSuccess={onDocumentLoadSuccess}
	// >
	// 	<Page pageNumber={pageNumber} width={1300}/>
	// </Document>
	
	// <p>
	// Page {pageNumber} of {numPages}
	// </p>
	// <nav>
	// 	<button onClick={goToPrevPage}>Prev</button>
	// 	<button onClick={goToNextPage}>Next</button>
	// </nav>