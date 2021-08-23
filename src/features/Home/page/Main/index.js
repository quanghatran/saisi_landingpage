import Banner from "../../components/Banner"
import Categories from "../../components/Categories";
import Commitment from "../../components/Commitment";
import Images from "../../components/Images";
import Introduction from "../../components/Introduction"
import StudyProgram from "../../components/StudyProgram/StudyProgram";
import Itinerary from "../../components/Itinerary";
import Prestige from "../../components/Prestige";
import Feedbacks from "../../components/Feedbacks";
import Posts from "../../components/Posts";
import Condition from "../../components/Condition";
import Partner from "../../components/Partner";
import VerticalBanner from '../../components/ VerticalBanner/ VerticalBanner';

import './Main.css';

const Main = () => {
    return (  
        <>
            <Banner />
            <div className="Main-body">
                <VerticalBanner />
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
}
 
export default Main;