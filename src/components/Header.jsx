import { useState } from 'react';
import styled from 'styled-components';

export default function Header() {
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const [hash, setHash] = useState(location.hash);

    const onMenuItemClick = (hash) => {
        setHash(() => {
            location.hash = hash;
            return hash;
        });
        setIsMenuVisible(false);
    };
    
    return (
        <Container data-component="header">
            <Nav>
                <div>
                    <Logo href="#" onClick={() => setHash('')}>SHOPPING</Logo>
                </div>
                
                <Menu isMenuVisible={isMenuVisible}>
                    <List>
                        <Item>
                            <Link isActive={hash === '' || hash=== '#' || hash === '#home'} onClick={() => onMenuItemClick('#home')}>Home</Link>
                        </Item>
                        <Item>
                            <Link isActive={hash === '#featured'} onClick={() => onMenuItemClick('#featured')}>Featured</Link>
                        </Item>
                        <Item>
                            <Link isActive={hash === '#new'} onClick={() => onMenuItemClick('#new')}>New</Link>
                        </Item>
                        <Item>
                            <Link isActive={hash === '#subscribed'} onClick={() => onMenuItemClick('#subscribed')}>Subscribed</Link>
                        </Item>
                    </List>
                </Menu>

                <div>
                    <Cart className="bx bx-cart"></Cart>
                    <Toggle className="bx bx-menu" onClick={() => setIsMenuVisible((isVisible) => !isVisible)}></Toggle>
                </div>
            </Nav>
        </Container>
    );
}

const Container = styled.header`
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: var(--z-fixed);
    background-color: var(--gray-color);
`;

const Nav = styled.nav`
    width: calc(100% - 3rem);
    max-width: 1024px;
    height: var(--header-height);
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: var(--mb-3);
    margin-right: var(--mb-3);

    @media screen and (min-width: 768px) {
        height: calc(var(--header-height) + 1rem);
        justify-content: initial;
    }

    @media screen and (min-width: 1024px) {
        margin-left: auto;
        margin-right: auto;
    }
`;

const Logo = styled.a`
    font-weight: var(--font-bold);
    letter-spacing: 0.1rem;
`;

const Menu = styled.div`
    @media screen and (max-width: 767px) {
        position: fixed;
        top: var(--header-height);
        right: ${({isMenuVisible}) => isMenuVisible ? '0px' : '-100%'};
        width: 80%;
        height: 100%;
        padding: 2rem;
        background-color: var(--white-color);
        transition: 0.3s;
    }
    margin-left: auto;
`;

const List = styled.ul`
    @media screen and (min-width: 768px) {
        display: flex;
    }
`;

const Item = styled.li`
    margin-bottom: var(--mb-4);

    @media screen and (min-width: 768px) {
        margin-left: var(--mb-4);
        margin-bottom: 0;
    }
`;

const Link = styled.a`
    color: ${({isActive}) => isActive ? 'var(--first-color)' : 'var(--dark-color)'};
    font-weight: var(--font-semi);
    cursor: pointer;

    :hover {
        color: var(--first-color);
    }
`;

const Cart = styled.i`
    font-size: 2rem;
    margin-left: var(--mb-2);
    margin-right: var(--mb-2);
`;

const Toggle = styled.i`
    font-size: 2rem;
    cursor: pointer;

    @media screen and (min-width: 768px) {
        display: none;
    }
`;