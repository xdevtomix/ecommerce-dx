export default function Home() {
    return (
        <section data-component="home" className="home" id="home">
            <div className="home__container bd-grid">
                <div className="home__data">
                    <h1 className="home__title"> NEW <br /> <span>ARRIVALS</span></h1>
                    <a href="#featured" className="button">GO SHOPPING</a>
                </div>

                <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="woman" className="home__img" />
            </div>
        </section>
    );
}