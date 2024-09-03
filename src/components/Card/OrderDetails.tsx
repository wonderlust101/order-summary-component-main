import React from "react";
import Button from "../Button/Button.tsx";
import MusicLogo from "../../assets/images/icon-music.svg";

type OrderDetailsProps = {
    planType: string;
    costPerPeriod: number;
}

export default function OrderDetails({planType, costPerPeriod}:OrderDetailsProps): React.JSX.Element {
    let period;
    if (planType === 'Annual') {
        period = '/year';
    }
    else if (planType === 'Monthly'){
        period = '/month';
    }

    return (
        <section className="order-summary__type">
            <div className="order-summary__cost">
                <img className="order-summary__type-icon" src={MusicLogo} alt="Music Icon"
                     aria-hidden="true"/>
                <div>
                    <h3>
                        {planType} Plan
                        <span className="sr-only">of $59.99 a {period}</span>
                    </h3>
                    <p className="order-summary__term" aria-hidden="true">${costPerPeriod}{period}</p>
                </div>
            </div>

            <Button className={'button--no-bg-dark-blue button__underline'}>Change</Button>
        </section>)
}