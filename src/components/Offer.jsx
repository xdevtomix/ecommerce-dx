import styled from "styled-components";

export default function Offer() {
    return (
        <Container data-component="offer">
            <Background>
                <Data>
                    <Title>Special Offer</Title>
                    <Description>Special offer discounts for women this week only</Description>

                    <Button href="#">SHOP NOW</Button>
                </Data>
            </Background>
        </Container>
    );
}

const Container = styled.section`
    padding: 3rem 0;
`;

const Background = styled.div`
    background: url('https://images.pexels.com/photos/935756/pexels-photo-935756.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940') no-repeat center/cover;
    text-align: center;
`;

const Data = styled.div`
    padding: 3.5rem 0.25rem;
    background: rgba(0, 0, 0, 0.5);
    color: var(--white-color);

    @media screen and (min-width: 768px) {
        padding: 5rem 0;
    }
`;

const Title = styled.h2`
    font-size: var(--h1-font-size);
    letter-spacing: 0.2rem;
    text-transform: uppercase;
    font-weight: var(--font-semi);
`;

const Description = styled.p`
    margin-bottom: var(--mb-2);
    letter-spacing: 0.2rem;
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