import React from 'react'
import FB from '../assets/fb.png'
import Insta from '../assets/insta.png'
import Twitter from '../assets/twitter.png'

function Footer() {
    return (
        <>
            <div className="container-fluid mt-3 alert-dark">

                <div className="m-3">
                    <h5 className="text-center py-2" style={{textDecoration:"underline"}}>Contact Us</h5>
                    <p className="text-center">Fusion Power Systems<br/>
                        82 - B, Udyog Vihar, Phase - IV, Gurugram - 122015, Haryana, India<br/>
                        <a href="tel:+62896706255135"> +62-896-7062-55135</a>
                        </p>
                </div>

                <div className=" d-flex justify-content-center align-items-center mb-2">
                    <div className="mx-3"><a href="https://www.facebook.com/"><img src={FB} width="20px" /></a></div>
                    <div className="mx-3 mt-1"><a href="https://www.instagram.com/"><img src={Insta} width="25px" /></a></div>
                    <div className="mx-3 mt-2"><a href="https://twitter.com/?lang=en"><img src={Twitter} width="30px" /></a></div>
                    <div className="mx-3 mt-4"><p>&copy; <small>Taaba Engineering</small></p></div>
                </div>
            </div>

        </>
    )
}

export default Footer
