import React from "react";
import OrderDetails from "./OrderDetails.tsx";
import Button from "../Button/Button.tsx";


export default function Card({}): React.JSX.Element {
    return (
        <section className="order-summary">
            <img src="src/assets/images/illustration-hero.svg" alt="" aria-hidden="true"/>

            <section className="order-summary__details">
                <header className="order-summary__section-grid">
                    <h2>
                        <span className="sr-only">Here is your</span>
                        Order Summary
                    </h2>
                    <p aria-hidden="true">You can now listen to millions of songs, audiobooks, and podcasts on any
                        device anywhere you like!</p>
                </header>
                <OrderDetails planType="Annual" costPerPeriod={59.99}/>
                <footer className="order-summary__section-grid">
                    <Button className={'button--blue'}>Proceed to Payment</Button>
                    <Button className={'button--no-bg-grey'}>Cancel Order</Button>
                </footer>
            </section>
        </section>)
}