import styled from "styled-components";

export default function Newsletter() {
    return (
        <Container data-component="newsletter" id="subscribed">
            <GridContainer>
                <div>
                    <Title>OUR NEWSLETTER</Title>
                    <Description>Promotion new products and sales directly to your</Description>

                    <Form action="">
                        <Input type="text" placeholder="Enter your email" />
                        <Button href="#">SUBSCRIBE</Button>
                    </Form>
                </div>
            </GridContainer>
        </Container>
    );
}

const Container = styled.section`
    text-align: center;
    padding: 3rem 0;
`;

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 100%;
    column-gap: 2rem;
    width: calc(100% - 3rem);
    max-width: 1024px;
    margin-left: var(--mb-3);
    margin-right: var(--mb-3);

    @media screen and (min-width: 1024px) {
        margin-left: auto;
        margin-right: auto;
    }
`;

const Title = styled.h2`
    font-size: var(--h2-font-size);
    color: var(--dark-color);
    margin: var(--mb-4) 0 var(--mb-1);
    text-align: center;
`;

const Description = styled.p`
    margin-bottom: var(--mb-2);
    font-size: var(--small-font-size);
    color: var(--dark-color-light);
`;

const Form = styled.form`
    display: grid;
    grid-template-columns: 1fr 0.5fr;

    @media screen and (min-width: 768px) {
        width: 400px;
        margin: 0 auto;
    }
`;

const Input = styled.input`
    outline: none;
    border: none;
    background-color: var(--gray-color);
    padding: 0 1rem;
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