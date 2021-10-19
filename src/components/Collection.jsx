import styled from "styled-components";

export default function Collection() {
    return (
        <Container data-component="collection">
            <GridContainer>
                <Box>
                    <Image src="https://images.pexels.com/photos/3217911/pexels-photo-3217911.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="backpack man" />

                    <div>
                        <Title>
                            <SubTitle>Men</SubTitle>
                            <br />
                            Backpack
                        </Title>

                        <View href="#">View collection</View>
                    </div>
                </Box>

                <Box>
                    <div>
                        <Title>
                            <SubTitle>Women</SubTitle>
                            <br />
                            Backpack
                        </Title>

                        <View href="#">View collection</View>
                    </div>

                    <Image src="https://images.pexels.com/photos/1070970/pexels-photo-1070970.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="backpack woman" />
                </Box>
            </GridContainer>
        </Container>
    );
}

const Container = styled.section`
    padding: 3rem 0;
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
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: 1fr;
    }

    @media screen and (min-width: 1024px) {
        margin-left: auto;
        margin-right: auto;
    }
`;

const Box = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 1.5rem;
    background-color: var(--gray-color);
    transition: 0.3s;

    :hover {
        transform: translate3d(0, -0.5rem, 0);
    }
`;

const Image = styled.img`
    width: 100px;
    height: 150px;
    object-fit: cover;
`;

const Title = styled.h2`
    font-size: var(--h1-font-size);
    line-height: 1.2;
    margin-bottom: var(--mb-2);
    text-transform: uppercase;
    font-weight: var(--font-semi);
`;

const SubTitle = styled.span`
    font-size: var(--h2-font-size);
    color: var(--dark-color-light);
`;

const View = styled.a`
    font-size: var(--small-font-size);
    color: var(--dark-color-light);

    :hover {
        text-decoration: underline;
    }
`;