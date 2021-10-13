export default function Footer() {
    return (
        <footer className="footer section">
            <div className="footer__container bd-grid">
                <div className="footer__box">
                    <h3 className="footer__title">SARA</h3>
                    <p className="footer__deal">Products store</p>
                    <a href="#" className="footer__store"><i className='bx bxl-google'></i></a>
                    <a href="#" className="footer__store"><i className='bx bxl-apple'></i></a>
                </div>

                <div className="footer__box">
                    <h3 className="footer__title">EXPLORE</h3>
                    <ul>
                        <li><a href="#home" className="footer__link">Home</a></li>
                        <li><a href="#featured" className="footer__link">Featured</a></li>
                        <li><a href="#new" className="footer__link">New Arrivals</a></li>
                        <li><a href="#subscribed" className="footer__link">Subscribe</a></li>
                    </ul>
                </div>

                <div className="footer__box">
                    <h3 className="footer__title">OUR SERVICES</h3>
                    <ul>
                        <li><a href="#" className="footer__link">Pricing</a></li>
                        <li><a href="#" className="footer__link">Free Shipping</a></li>
                        <li><a href="#" className="footer__link">Gift Cards</a></li>
                    </ul>
                </div>

                <div className="footer__box">
                    <h3 className="footer__title">FOLLOW US</h3>
                    <a href="#" className="footer__social"><i className="bx bxl-facebook-square"></i></a>
                    <a href="#" className="footer__social"><i className="bx bxl-instagram-alt"></i></a>
                    <a href="#" className="footer__social"><i className="bx bxl-twitter"></i></a>
                </div>
            </div>

            <p className="footer__copy">&#169; 2021 all rights reserved</p>
        </footer>
    );
}