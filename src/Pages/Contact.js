
import TopRatedMovie from "../components/Popular/TopRatedMovie";
import Favorite from "../components/Favorite/Preferiti";
import Interruttore from "../components/Favorite/Interrutore";
import ListPreferiti from "../components/Favorite/ListPreferiti";
import TemporaryDrawer from "../components/Genre/Casseto";



const Contact = () => {
    return <h1>

        <TopRatedMovie />
        <Interruttore />
        <Favorite />
        <ListPreferiti />
        <TemporaryDrawer />


    </h1>;
};

export default Contact;