import Home from "./Home";
import Collection from "./Collection";
import Featured from "./Featured";
import Offer from "./Offer";
import New from "./New";
import Newsletter from "./Newsletter";

export default function Main() {
    return (
        <main data-component="main" className="l-main">
            <Home />
            <Collection />
            <Featured />
            <Offer />
            <New />
            <Newsletter />
        </main>
    );
}