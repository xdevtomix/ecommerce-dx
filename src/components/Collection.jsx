export default function Collection() {
    return (
        <section data-component="collection" className="collection section">
            <div className="collection__container bd-grid">
                <div className="collection__box">
                    <img src="https://images.pexels.com/photos/3217911/pexels-photo-3217911.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="backpack man" className="collection__img"/>

                    <div className="collection__data">
                        <h2 className="collection__title"><span className="collection__subtitle">Men</span><br />Backpack</h2>
                        <a href="#" className="collection__view">View collection</a>
                    </div>
                </div>

                <div className="collection__box">
                    <div className="collection__data">
                        <h2 className="collection__title"><span className="collection__subtitle">Women</span><br />Backpack</h2>
                        <a href="#" className="collection__view">View collection</a>
                    </div>

                    <img src="https://images.pexels.com/photos/1070970/pexels-photo-1070970.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="backpack woman" className="collection__img"/>
                </div>
            </div>
        </section>
    );
}