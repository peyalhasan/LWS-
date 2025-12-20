import { ButtonsContainer, CardContainer, ContentContainer,  } from "./Styles/Container.styles";
import nerdImage from "../assets/illustration.png";
import { H1, H2, IMG, P, Tag } from "./Element.styles";
import { StyledTitle } from "./Custom.styles";
import Button from "./Button";

export default function Card() {
    return (
        <CardContainer>
            <ContentContainer>
                <Tag>EXCLUSIVE</Tag>
                <H1 color="#fff">
                    <StyledTitle text="React Styled Components" color="#fff" />
                </H1>
                <H2>
                    Description
                </H2>
                <P>
                    Exclusive React JS Tutorial on Styled Components where you
                    will learn why we need this & how to use it.
                </P>

                <ButtonsContainer>
                    <Button link="https://lwsbd.link/rsc" text="Watch now" />
                    <Button
                        link="https://lwsbd.link/react"
                        text="Github repo"
                    />
                </ButtonsContainer>
            </ContentContainer>
            <IMG src={nerdImage} alt="Nerd" width="300px" />
        </CardContainer>
    );
}