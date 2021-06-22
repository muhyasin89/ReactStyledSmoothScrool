import React from 'react'
import { Button } from '../ButtonElements'
import { 
    InfoContainer, 
    InfoWrapper, 
    InfoRow, 
    Column1, 
    Column2,
    TextWrapper, 
    TopLine, 
    Heading, 
    SubTitle,  
    BtnWrap,
    ImgWrap,
    Img
} 
from './InfoElements'

const InfoSection = ({ 
    id, 
    lightBg, 
    imgStart, 
    lightText, 
    darkText, 
    description, 
    headline, 
    buttonLabel, 
    img, 
    alt
}) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>Top Line</TopLine>
                                <Heading lightText={lightText}> {headline} </Heading>
                                <SubTitle darkText={darkText}>{description}</SubTitle>
                                <BtnWrap>
                                    <Button to="home">{ buttonLabel }</Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt} />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection
