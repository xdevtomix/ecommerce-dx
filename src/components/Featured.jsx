export default function Featured() {
    return (
        <section className="featured section" id="featured">
            <h2 className="section-title">FEATURED PRODUCTS</h2>
            <a href="#" className="section-all">View All</a>

            <div className="featured__container bd-grid">
                <div className="featured__product">
                    <div className="featured__box">
                        <div className="featured__new">NEW</div>
                        <img src="https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="headphone" className="featured__img" />
                    </div>

                    <div className="featured__data">
                        <h3 className="featured__name">Headphone One Black</h3>
                        <span className="featured__speci">$29</span>
                    </div>
                </div>

                <div className="featured__product">
                    <div className="featured__box">
                        <div className="featured__new">NEW</div>
                        <img src="https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="laptop" className="featured__img" />
                    </div>

                    <div className="featured__data">
                        <h3 className="featured__name">Laptop x1</h3>
                        <span className="featured__speci">$499</span>
                    </div>
                </div>

                <div className="featured__product">
                    <div className="featured__box">
                        <div className="featured__new">NEW</div>
                        <img src="https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="airpods" className="featured__img" />
                    </div>

                    <div className="featured__data">
                        <h3 className="featured__name">Airpods</h3>
                        <span className="featured__speci">$99</span>
                    </div>
                </div>

                <div className="featured__product">
                    <div className="featured__box">
                        <div className="featured__new">NEW</div>
                        <img src="https://images.pexels.com/photos/2861929/pexels-photo-2861929.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="smartwatch" className="featured__img" />
                    </div>

                    <div className="featured__data">
                        <h3 className="featured__name">Smartwatch</h3>
                        <span className="featured__speci">$190</span>
                    </div>
                </div>
            </div>
        </section>
    );
}