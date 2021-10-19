import styled from "styled-components";

export default function Home() {
    return (
        <Container data-component="home" id="home">
            <GridContainer>
                <Data>
                    <Title> NEW <br /> <span>ARRIVALS</span></Title>
                    <Button href="#featured">GO SHOPPING</Button>
                </Data>

                <Image src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="woman" />
            </GridContainer>
        </Container>
    );
}

const Container = styled.section`
    background-color: var(--gray-color);
`;

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 100%;
    column-gap: 2rem;
    width: calc(100% - 3rem);
    max-width: 1024px;
    height: calc(100vh - var(--header-height));
    margin-left: var(--mb-3);
    margin-right: var(--mb-3);
    
    @media screen and (min-width: 768px) {
        height: 100vh;
    }

    @media screen and (min-width: 1024px) {
        margin-left: auto;
        margin-right: auto;
    }
`;

const Data = styled.div`
    padding-top: 6rem;

    @media screen and (min-width: 768px) {
        padding: 0;
        height: max-content;
        align-self: center;
    }

    @media screen and (min-width: 1024px) {
        padding-left: 7rem;
    }
`;

const Title = styled.h1`
    align-self: center;
    font-size: var(--big-font-size);
    line-height: 1;
    letter-spacing: 0.5rem;
    margin-bottom: 4rem;

    span {
        font-size: var(--h1-font-size);
    }

    @media screen and (min-width: 768px) {
        line-height: 0.8;
        letter-spacing: 1.5rem;
    }
`;

const Button = styled.a`
    display: inline-block;
    background-color: var(--first-color);
    color: var(--white-color);
    padding: 1rem;
    font-size: var(--small-font-size);
    font-weight: var(--font-semi);
    transition: 0.3s;

    :hover {
        background-color: var(--first-color-alt);
    }
`;

const Image = styled.img`
    position: absolute;
    right: 0;
    bottom: 0;
    width: 220px;
    border-radius: 4px;

    @media screen and (min-width: 768px) {
        width: 370px;
    }

    @media screen and (min-width: 1024px) {
        right: 15%
    }
`;