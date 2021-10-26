import React, {useState} from 'react'
import Navigation from './Navigation'
import { Form, Button } from 'react-bootstrap'
import Footer from './Footer'

function Contact({vval}) {

    const [enquiry , setEnquiry] = useState("")

    const handleEnquiry = (e) =>{
        setEnquiry(e.target.value)
    }

    return (
        <>
            <div>
                {/* Navbar */}
                <Navigation />
                <div className="container mt-3">
                    <h1>Contact Us</h1>
                    <hr />
                    <h4>Our Location</h4>
                    <br />
                    <p><h5>Fusion Power Systems</h5>
                        82 - B, Udyog Vihar, Phase - IV, Gurugram - 122015, Haryana, India</p>
                    <p><h5>Telephone</h5>
                    <a href="tel:+62896706255135"> +62-896-7062-55135</a></p>

                    {/* Form */}
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Your Name</Form.Label>
                            <Form.Control type="text" placeholder="eg.John" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Company's Name</Form.Label>
                            <Form.Control type="text" placeholder="eg.Soft Digitz" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>City</Form.Label>
                            <Form.Control type="text" placeholder="eg.Mumbai" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="eg.John@gmail.com" />

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Enquiry</Form.Label>
                            <Form.Control as="textarea" rows={3} value={vval} onChange={handleEnquiry}/>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                    {/* Map */}
                    <div className="text-center mt-3 mb-3  " >
                        
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.309808258852!2d72.83686834921785!3d18.961920387090412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce39e6397b05%3A0xe47db77b4708430b!2sSandhurst%20Road%20Railway%20Station%2C%20Noor%20Baug%2C%20Dongri%2C%20Umerkhadi%2C%20Mumbai%2C%20Maharashtra%20400009!5e0!3m2!1sen!2sin!4v1635140440394!5m2!1sen!2sin" style={{width:"90vw" , height:"200px", style:"border:0", allowfullscreen:"", loading:"lazy"}}></iframe>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </>
    )
}

export default Contact
