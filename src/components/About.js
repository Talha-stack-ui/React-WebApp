import React from 'react'
import Footer from './Footer'
import Navigation from './Navigation'


const About = () => {
    return (
        <>
            <div>
                {/* Navbar */}
                <Navigation />
                <div className="container mt-3">
                    <h1>About</h1>
                    <hr />
                    <p><h3><b>Company Profile</b></h3>
                        <br />



                        Fusion Power Systems is an ISO 9001:2000 certified enterprise engaged in the design, developmentand supply of rechargeable sealed lead acid (SLA) and Li-ion Batteries. The company markets its products under the ‘Amptek’ brand which figures among India’s top 5 SLA battery brands in India.

                        <br />
                        <br />
                        <h4>Amptek’s USP</h4>
                        <br />

                        <ul>
                            <li>A fully vertically integrated energy storage solution company equipped to provide specially designed small sized, high capacity stable batteries with a long productive life</li>
                            <li>A comprehensive product portfolio of over 60 models of various sized SLA batteries in the 4V, 6V and 12V range, with rated capacities of 0.5Ah to 200Ah</li>
                            <li>Strict Compliance of all products with JIS and IEC standards</li>
                            <li>Fully equipped Lithium Ion Battery pack production assembly line</li>
                            <li>State-of-the-Art design, development and quality testing infrastructure</li>
                            <li>A strong R&D focus and a culture of working in collaboration with customers to provide customized solutions that help them stay ahead of competition</li>
                            <li>More than a decade of experience in import and distribution combined with the expertise and collab-oration of our principals in China</li>
                            <li>Offices in Delhi, Ahmedabad, Chennai and Hyderabad</li>
                            <li>PAN India Presence through a robust channet network & OEM supply</li>
                            <li>Highly rated by our regular & loyal satisfied customer base</li>
                        </ul>

                        Our Customers



                        Our Amptek batteries are used across a wide spectrum of industries and products like:
                        Telecommunications,
                        Railways,
                        UPS Systems,
                        Electronic Weighing Scales,
                        LED Lighting
                        Solar Energy Applications,
                        Emergency Lighting Systems,
                        Electric Vehicles,
                        Specialty Battery Systems,
                        and numerous other portable electronic products.

                        AMPTEK also has an office in China for strict quality control related measures during importing and shipping of batteries, to guarantee full life of the products. Alongside customer focused approach, it continues to research and develop the next generation Lithium-ion batteries for new innovative products and solutions. Renewable energies play an increasingly important role in AMPTEK’s global energy supply as proven in their continuous investment in research, development and the latest production technologies of renewable energy storage solutions. The quantity of polluting metals, such as cadmium, lead, mercury, etc if at all present, in the Li-ion batteries is within the accepted international levels, and thus, unlike most other batteries, they cause little harm during disposal. Clearly, AMPTEK’s focus on green technology, promises to bring a healthy and greener life to our future generations.
                    </p>
                </div>
            </div>
            
            {/* Footer */}
            <Footer />
        </>
    )
}


export default About