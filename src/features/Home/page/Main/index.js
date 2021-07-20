import Banner from "../../components/Banner"
import Categories from "../../components/Categories";
import Commitment from "../../components/Commitment";
import Images from "../../components/Images";
import Introduction from "../../components/Introduction"
import Itinerary from "../../components/Itinerary";
import Prestige from "../../components/Prestige";
import Feedbacks from "../../components/Feedbacks";
import Posts from "../../components/Posts";
import Condition from "../../components/Condition";
import Partner from "../../components/Partner";

const Main = () => {
    return (  
        <>
            <Banner />
            <Introduction />
            <Prestige />
            <Categories />
            <Commitment />
            <Itinerary />
            <Images />
            <Feedbacks />
            <Posts />
            <Condition />
            <Partner />
        </>
    );
}
 
export default Main;