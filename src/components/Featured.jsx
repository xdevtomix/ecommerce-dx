import styled from "styled-components";

export default function Featured() {
    return (
        <Container id="featured">
            <Title>FEATURED PRODUCTS</Title>
            <SubTitle href="#">View All</SubTitle>

            <GridContainer>
                <Product>
                    <Box>
                        <New>NEW</New>
                        <Image src="https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="headphone" />
                    </Box>

                    <Data>
                        <Name>Headphone One Black</Name>
                        <Price>$29</Price>
                    </Data>
                </Product>

                <Product>
                    <Box>
                        <New>NEW</New>
                        <Image src="https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="laptop" />
                    </Box>

                    <Data>
                        <Name>Laptop x1</Name>
                        <Price>$499</Price>
                    </Data>
                </Product>

                <Product>
                    <Box>
                        <New>NEW</New>
                        <Image src="https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="airpods" />
                    </Box>

                    <Data>
                        <Name>Airpods</Name>
                        <Price>$99</Price>
                    </Data>
                </Product>

                <Product>
                    <Box>
                        <New>NEW</New>
                        <Image src="https://images.pexels.com/photos/2861929/pexels-photo-2861929.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="smartwatch" />
                    </Box>

                    <Data>
                        <Name>Smartwatch</Name>
                        <Price>$190</Price>
                    </Data>
                </Product>
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
        grid-template-columns: repeat(4, 1fr);
    }

    @media screen and (min-width: 1024px) {
        margin-left: auto;
        margin-right: auto;
    }
`;

const Product = styled.div`
    transition: 0.3s;

    :hover {
        transform: translate3d(0, -0.5rem, 0);
    }
`;

const Box = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    background-color: var(--gray-color);
`;

const New = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    background-color: var(--first-color);
    color: var(--white-color);
    padding: 0.3rem 1.75rem;
    font-size: var(--small-font-size);
`;

const Image = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
`;

const Data = styled.div`
    text-align: center;
`;

const Name = styled.h3`
    margin-bottom: var(--mb-1);
    text-transform: uppercase;
    font-size: var(--normal-font-size);
`;

const Price = styled.span`
    color: var(--dark-color-light);
    font-weight: var(--font-semi);
`;