export default function Newsletter() {
    return (
        <section className="newsletter section" id="subscribed">
            <div className="newsletter__container bd-grid">
                <div className="newsletter__subscribe">
                    <h2 className="section-title">OUR NEWSLETTER</h2>
                    <p className="newsletter__description">Promotion new products and sales directly to your</p>

                    <form action="" className="newsletter__form">
                        <input type="text" className="newsletter__input" placeholder="Enter your email" />
                        <a href="#" className="button">SUBSCRIBE</a>
                    </form>
                </div>
            </div>
        </section>
    );
}