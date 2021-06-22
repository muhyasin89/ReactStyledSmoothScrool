import React from 'react'
import { Button } from '../ButtonElements'
import { InfoContainer, InfoWrapper, InfoRow, Column1, TextWrapper, TopLine, Heading, SubTitle,  BtnWrap} from './InfoElements'

const InfoSection = () => {
    return (
        <>
            <InfoContainer id={id}>
                <InfoWrapper>
                    <InfoRow>
                        <Column1>
                            <TextWrapper>
                                <TopLine>Top Line</TopLine>
                                <Heading> Heading </Heading>
                                <SubTitle>SubTitle</SubTitle>
                                <BtnWrap>
                                    <Button to="home">Button</Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection
