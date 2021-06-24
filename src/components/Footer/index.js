import React from 'react'
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconsLink
} from './FooterElements'

import { 
    FaFacebook,
    FaInstagram,
    FaTwitter,
    FaYoutube,
    FaLinkedin
 } from 'react-icons/fa'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>
                                <FooterLink to="/">About Us</FooterLink>
                                <FooterLink to="/">How it works</FooterLink>
                                <FooterLink to="/">Testimonials</FooterLink>
                                <FooterLink to="/">Investors</FooterLink>
                                <FooterLink to="/">Terms Services</FooterLink>
                            </FooterLinkTitle>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>
                                <FooterLink to="/">Video</FooterLink>
                                <FooterLink to="/">Submit Video</FooterLink>
                                <FooterLink to="/">Ambasador</FooterLink>
                                <FooterLink to="/">Agency</FooterLink>
                                <FooterLink to="/">Influencer</FooterLink>
                            </FooterLinkTitle>
                        </FooterLinkItems>

                        <FooterLinkItems>
                            <FooterLinkTitle>
                                <FooterLink to="/">Contact Us</FooterLink>
                                <FooterLink to="/">Contact</FooterLink>
                                <FooterLink to="/">Support</FooterLink>
                                <FooterLink to="/">Destination</FooterLink>
                                <FooterLink to="/">Sponsorship</FooterLink>
                            </FooterLinkTitle>
                        </FooterLinkItems>

                        <FooterLinkItems>
                            <FooterLinkTitle>
                                <FooterLink to="/">Social Media</FooterLink>
                                <FooterLink to="/">Instagram</FooterLink>
                                <FooterLink to="/">Facebook</FooterLink>
                                <FooterLink to="/">Youtube</FooterLink>
                                <FooterLink to="/">Twitter</FooterLink>
                            </FooterLinkTitle>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/">
                            dolla
                        </SocialLogo>
                        <WebsiteRights>
                                dolla {new Date().getFullYear()} All Right Reserve
                        </WebsiteRights>
                        <SocialIcons>
                            <SocialIconsLink href='/' target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconsLink>
                            <SocialIconsLink href='/' target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconsLink>
                            <SocialIconsLink href='/' target="_blank" aria-label="Youtube">
                                <FaYoutube />
                            </SocialIconsLink>
                            <SocialIconsLink href='/' target="_blank" aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconsLink>
                            <SocialIconsLink href='/' target="_blank" aria-label="Linkedin">
                                <FaLinkedin />
                            </SocialIconsLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
