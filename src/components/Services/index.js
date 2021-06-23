import React from 'react';

import Icon1 from '../../images/svg-1.svg';
import Icon2 from '../../images/svg-2.svg';
import Icon3 from '../../images/svg-3.svg';

import {
    ServiceContainer, 
    ServiceWrapper,
    ServiceH1,
    ServiceCard,
    ServiceIcon,
    ServiceH2,
    ServiceP
} from './ServiceElements'

const Services = () => {
    return (
        <ServiceContainer id="services">
            <ServiceH1>Our Services</ServiceH1>
            <ServiceWrapper>
                <ServiceCard>
                    <ServiceIcon src="{Icon1}" />
                    <ServiceH2>Reduces Expenses</ServiceH2>
                    <ServiceP> We help reduces fee and increase your revenue</ServiceP>
                </ServiceCard>
                <ServiceCard>
                    <ServiceIcon src="{Icon2}" />
                    <ServiceH2>Virtual Offices</ServiceH2>
                    <ServiceP> We help reduces fee and increase your revenue</ServiceP>
                </ServiceCard>
                <ServiceCard>
                    <ServiceIcon src="{Icon3}" />
                    <ServiceH2>Premium benefit</ServiceH2>
                    <ServiceP> We help reduces fee and increase your revenue</ServiceP>
                </ServiceCard>
            </ServiceWrapper>
        </ServiceContainer>
    )
}

export default Services
