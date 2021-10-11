import { useState } from 'react';

export default function Header() {
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    const setHash = (hash) => {
        location.hash = hash;
        setIsMenuVisible(false);
      };
      
    return (
        <header className="l-header">
            <nav className="nav bd-grid">
                <div>
                    <a href="#" className="nav__logo" onClick={() => setHash('')}>SARA</a>
                </div>

                <div className="nav__menu" style={{ right: isMenuVisible ? '0px' : '-100%' }} id="nav-menu">
                    <ul className="nav__list">
                        <li className="nav__item"><a href="#home" className={`nav__link ${(location.hash === '' || location.hash === '#home') ? 'active' : ''}`} onClick={() => setHash('home')}>Home</a></li>
                        <li className="nav__item"><a href="#featured" className={`nav__link ${location.hash === '#featured' ? 'active' : ''}`} onClick={() => setHash('featured')}>Featured</a></li>
                        <li className="nav__item"><a href="#new" className={`nav__link ${location.hash === '#new' ? 'active' : ''}`} onClick={() => setHash('new')}>New</a></li>
                        <li className="nav__item"><a href="#subscribed" className={`nav__link ${location.hash === '#subscribed' ? 'active' : ''}`} onClick={() => setHash('subscribed')}>Subscribed</a></li>
                    </ul>
                </div>

                <div>
                    <i className="bx bx-cart nav__cart"></i>
                    <i className="bx bx-menu nav__toggle" onClick={() => setIsMenuVisible((state) => !state)}></i>
                </div>
            </nav>
        </header>
    );
}