import { InforContainer, Wrapper } from "../../../../assets/styles";
import profile1 from '../../../../assets/images/profile/satsi_profile-01-min.jpg'
import profile2 from '../../../../assets/images/profile/satsi_profile-02-min.jpg'
import profile3 from '../../../../assets/images/profile/satsi_profile-03-min.jpg'
import profile4 from '../../../../assets/images/profile/satsi_profile-04-min.jpg'
import profile5 from '../../../../assets/images/profile/satsi_profile-05-min.jpg'
import profile6 from '../../../../assets/images/profile/satsi_profile-06-min.jpg'
import profile7 from '../../../../assets/images/profile/satsi_profile-07-min.jpg'
import profile8 from '../../../../assets/images/profile/satsi_profile-08-min.jpg'
import profile9 from '../../../../assets/images/profile/satsi_profile-09-min.jpg'
import profile10 from '../../../../assets/images/profile/satsi_profile-10-min.jpg'
import profile11 from '../../../../assets/images/profile/satsi_profile-11-min.jpg'
import profile12 from '../../../../assets/images/profile/satsi_profile-12-min.jpg'
import profile13 from '../../../../assets/images/profile/satsi_profile-13-min.jpg'
import profile14 from '../../../../assets/images/profile/satsi_profile-14-min.jpg'
import profile15 from '../../../../assets/images/profile/satsi_profile-15-min.jpg'
import profile16 from '../../../../assets/images/profile/satsi_profile-16-min.jpg'
import profile17 from '../../../../assets/images/profile/satsi_profile-17-min.jpg'
import profile18 from '../../../../assets/images/profile/satsi_profile-18-min.jpg'
import profile19 from '../../../../assets/images/profile/satsi_profile-19-min.jpg'
import profile20 from '../../../../assets/images/profile/satsi_profile-20-min.jpg'
import profile21 from '../../../../assets/images/profile/satsi_profile-21-min.jpg';
import profile22 from '../../../../assets/images/profile/satsi_profile-22-min.jpg';
import profile23 from '../../../../assets/images/profile/satsi_profile-23-min.jpg';


const images = [
  profile1,
  profile2,
  profile3,
  profile4,
  profile5,
  profile6,
  profile7,
  profile8,
  profile9,
  profile10,
  profile11,
  profile12,
  profile13,
  profile14,
  profile15,
  profile16,
  profile17,
  profile18,
  profile19,
  profile20,
  profile21,
  profile22,
  profile23,
];

const Main = () => {
    setTimeout(function(){
        window.scrollTo(0,0);
    }, 100)
    return (
      <Wrapper>
        <InforContainer>
          <h1>THÔNG TIN VỀ SATSi</h1>
          <div>
            {images.map((img, id) => (
              <img key={id} src={img} alt='img' />
            ))}
            <p>
              Tải ngay file pdf tại{' '}
              <a
                href='https://drive.google.com/file/d/1rjQbnoimqJ-0DokceILQXB06bjLiIlR4/view?usp=sharing'
                target='_blank'
                rel='noreferrer'
              >
                đây
              </a>
            </p>
          </div>
        </InforContainer>
      </Wrapper>
    );
}
 
export default Main;


// import styled from "styled-components";
// import { useMediaQuery } from 'react-responsive';
// import { useState } from "react";

// import { InforContainer, Wrapper } from "../../../../assets/styles";
// import pdf from '../../../../satsi_profile.pdf'
// import Fallback from "../../../../components/Fallback";

// // {pdf + '#viewfitW'}
// const Main = () =>  {
//     const [load, setLoad] = useState(true);
//     const is900px = useMediaQuery({ query: '(max-width: 900px)' });
//     let pdfLink = !is900px ? pdf : 'https://drive.google.com/file/d/1rjQbnoimqJ-0DokceILQXB06bjLiIlR4/preview'


//     const handleLoaded = () => {
//         setLoad(false);
//     }

//     setTimeout(function(){
//         window.scrollTo(0,0);
//     }, 100)

// 	return (
// 		<StyledWrapper>
//             <InforContainer>
//                 <h1>THÔNG TIN VỀ SATSi</h1>
//                 <PdfContainer>
//                         { load ? <Fallback /> : '' }
//                         <embed 
//                             src={pdfLink} 
//                             loading="lazy" 
//                             title="satsi_profile" 
//                             width='100%' 
//                             height="auto"
//                             onLoad={() => handleLoaded()}
//                         />
//                 </PdfContainer>
//             </InforContainer>
// 		</StyledWrapper>
// 	);
// }

// const StyledWrapper = styled(Wrapper)`
//     @media screen and (max-width: 900px){
//         h1 {
//             margin-bottom: 1rem; 
//         }
//     }
// `

// const PdfContainer = styled.div`
//     position: relative;
// 	height: 700px;
//     overflow:hidden;
// 	embed{
// 		position: absolute;
//         top: 0;
//         left: 0;
// 		width: 100%;
// 		height: 100%;
//         border: none;
// 	}
//     @media screen and (max-width: 900px){
//         height: 400px;
//         margin: 0 0.5rem;
//         border-bottom: none;
//         outline: none;
//     }
// `

// export default Main;