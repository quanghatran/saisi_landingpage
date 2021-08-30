import Banner from '../../components/Banner';
import Categories from '../../components/Categories';
import Commitment from '../../components/Commitment';
import Images from '../../components/Images';
import Introduction from '../../components/Introduction';
import StudyProgram from '../../components/StudyProgram/StudyProgram';
import Itinerary from '../../components/Itinerary';
import Prestige from '../../components/Prestige';
import Feedbacks from '../../components/Feedbacks';
import Posts from '../../components/Posts';
import Condition from '../../components/Condition';
import Partner from '../../components/Partner';
// import VerticalBanner from '../../components/ VerticalBanner/ VerticalBanner';
import MinhtrietBanner from '../../components/MinhTrietBanner/MinhtrietBanner';
import { ThemeProvider } from '@material-ui/styles';

import './Main.css';
import { createTheme } from '@material-ui/core';

const Main = () => {
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 480,
        md: 768,
        lg: 1024,
        xl: 1200,
      },
    },
  });
  return (
    <>
      <Banner />
      <div className='Main-body'>
        <ThemeProvider theme={theme}>
          <MinhtrietBanner />
        </ThemeProvider>

        {/* <VerticalBanner /> */}
        <Introduction />
        <Prestige />
        <Categories />
        <Commitment />
        <Itinerary />
        <StudyProgram />
        <Images />
        <Feedbacks />
        <Posts />
        <Condition />
        <Partner />
      </div>
    </>
  );
};

export default Main;
