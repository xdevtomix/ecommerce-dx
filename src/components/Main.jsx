import Home from "./Home";
import Collection from "./Collection";
import Featured from "./Featured";
import Offer from "./Offer";

export default function Main() {
    return (
        <main data-component="main" className="l-main">
            <Home />
            <Collection />
            <Featured />
            <Offer />
        </main>
    );
}