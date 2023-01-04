import Carausal from "./Carausal";
import LatestNews from "./LatestNews";
import SecondComponent from "./SecondComponent";
import Description from "../ServicePage/Description"
import Explore from "./Explore"

function Home() {
    return (<>

        <Carausal />
        <SecondComponent />
        <LatestNews></LatestNews>
        <Explore></Explore>

    </>)
}
export default Home;