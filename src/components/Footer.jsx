import styled from 'styled-components';

export default function Footer() {
    return (
        <Container data-component="footer">
            <ContainerOfBoxes>
                <div>
                    <Title>SHOPPING</Title>
                    <Deal>Products store</Deal>
                    <Store href="#"><i className='bx bxl-google'></i></Store>
                    <Store href="#"><i className='bx bxl-apple'></i></Store>
                </div>

                <div>
                    <Title>EXPLORE</Title>
                    <ul>
                        <li><Link href="#home">Home</Link></li>
                        <li><Link href="#featured">Featured</Link></li>
                        <li><Link href="#new">New Arrivals</Link></li>
                        <li><Link href="#subscribed">Subscribe</Link></li>
                    </ul>
                </div>

                <div>
                    <Title>OUR SERVICES</Title>
                    <ul>
                        <li><Link href="#">Pricing</Link></li>
                        <li><Link href="#">Free Shipping</Link></li>
                        <li><Link href="#">Gift Cards</Link></li>
                    </ul>
                </div>

                <div>
                    <Title>FOLLOW US</Title>
                    <Social href="#"><i className="bx bxl-facebook-square"></i></Social>
                    <Social href="#"><i className="bx bxl-instagram-alt"></i></Social>
                    <Social href="#"><i className="bx bxl-twitter"></i></Social>
                </div>
            </ContainerOfBoxes>

            <Copyright>&#169; 2021 all rights reserved</Copyright>
        </Container>
    );
}

const Container = styled.footer`
    background-color: var(--dark-color);
    color: var(--white-color);
    padding: 3rem 0;
`;

const ContainerOfBoxes = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 2rem;
    row-gap: 1rem;
    width: calc(100% - 3rem);
    max-width: 1024px;
    margin-left: var(--mb-3);
    margin-right: var(--mb-3);
    margin-bottom: var(--mb-4);

    @media screen and (min-width: 768px) {
        grid-template-columns: repeat(4, 1fr);
        padding: 2rem 0;
    }

    @media screen and (min-width: 1024px) {
        margin-left: auto;
        margin-right: auto;
    }
`;

const Title = styled.h3`
    margin-top: var(--mb-1);
    margin-bottom: var(--mb-1);
`;

const Deal = styled.p`
    margin-bottom: var(--mb-2);
`;

const Store = styled.a`
    font-size: 40px;
    color: var(--dark-color-light);
`;

const Link = styled.a`
    color: var(--dark-color-light);

    :hover {
        text-decoration: underline;
    }
`;

const Social = styled.a`
    color: var(--dark-color-light);
    font-size: 1.3rem;
    margin-right: var(--mb-1);
`;

const Copyright = styled.p`
    border-top: 1px solid var(--dark-color-light);
    padding-top: 3rem;
    text-align: center;
    color: var(--dark-color-light);
    font-size: var(--small-font-size);
`;