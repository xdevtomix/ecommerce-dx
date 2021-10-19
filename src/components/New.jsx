import styled from "styled-components";

export default function New() {
    return (
        <Container data-component="new" id="new">
            <Title>NEW ARRIVALS</Title>
            <SubTitle href="#">View All</SubTitle>

            <GridContainer>
                <Box>
                    <img src="https://images.pexels.com/photos/8091191/pexels-photo-8091191.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="laptop" />
                    <Link>
                        <Button href="#">VIEW PRODUCT</Button>
                    </Link>
                </Box>

                <Box>
                    <img src="https://images.pexels.com/photos/8473285/pexels-photo-8473285.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="phone" />
                    <Link>
                        <Button href="#">VIEW PRODUCT</Button>
                    </Link>
                </Box>

                <Box>
                    <img src="https://images.pexels.com/photos/5552789/pexels-photo-5552789.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="computer" />
                    <Link>
                        <Button href="#">VIEW PRODUCT</Button>
                    </Link>
                </Box>

                <Box>
                    <img src="https://images.pexels.com/photos/4678187/pexels-photo-4678187.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="camera" />
                    <Link>
                        <Button href="#">VIEW PRODUCT</Button>
                    </Link>
                </Box>

                <Box>
                    <img src="https://images.pexels.com/photos/9704415/pexels-photo-9704415.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="playstation" />
                    <Link>
                        <Button href="#">VIEW PRODUCT</Button>
                    </Link>
                </Box>

                <Box>
                    <img src="https://images.pexels.com/photos/9287210/pexels-photo-9287210.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="show and phone" />
                    <Link>
                        <Button href="#">VIEW PRODUCT</Button>
                    </Link>
                </Box>
            </GridContainer>
        </Container>
    );
}

const Container = styled.section`
    padding: 3rem 0;
`;

const Title = styled.h2`
    font-size: var(--h2-font-size);
    color: var(--dark-color);
    margin: var(--mb-4) 0 var(--mb-1);
    text-align: center;
`;

const SubTitle = styled.a`
    display: block;
    font-size: var(--small-font-size);
    font-weight: var(--font-semi);
    color: var(--dark-color-light);
    text-align: center;
    margin-bottom: var(--mb-2);

    @media screen and (min-width: 768px) {
        margin-bottom: var(--mb-4);
    }
`;

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 100%;
    column-gap: 2rem;
    row-gap: 2rem;
    width: calc(100% - 3rem);
    max-width: 1024px;
    margin-left: var(--mb-3);
    margin-right: var(--mb-3);

    @media screen and (min-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media screen and (min-width: 1024px) {
        margin-left: auto;
        margin-right: auto;
    }
`;

const Box = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    background-color: var(--gray-color);
    overflow: hidden;

    :hover {
        div {
            bottom: 0;
        }
    }
`;

const Link = styled.div`
    position: absolute;
    bottom: -100%;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(229, 89, 71, 0.2);
    transition: 0.3s;

    :hover {
        bottom: 0;
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