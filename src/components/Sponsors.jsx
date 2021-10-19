import styled from "styled-components";

export default function Sponsors() {
    return (
        <Container data-component="sponsors">
            <GridContainer>
                <Logo>
                    <i className='bx bxl-google'></i>
                </Logo>
                <Logo>
                    <i className='bx bxl-twitter'></i>
                </Logo>
                <Logo>
                    <i className='bx bxl-windows'></i>
                </Logo>
                <Logo>
                    <i className='bx bxl-bing'></i>
                </Logo>
            </GridContainer>
        </Container>
    );
}

const Container = styled.section`
    padding: 3rem 0;
`;

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2,1fr);
    row-gap: 2rem;
    column-gap: 2rem;
    width: calc(100% - 3rem);
    max-width: 1024px;
    padding: 1.5rem 0;
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

const Logo = styled.div`
    display: flex;
    justify-content: center;

    i {
        font-size: 80px;
        filter: opacity(70%);

        :hover {
            filter: none;
        }
    }
`;