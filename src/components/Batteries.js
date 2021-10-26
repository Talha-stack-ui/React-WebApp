import React from 'react'
import { Link } from 'react-router-dom'
import Navigation from './Navigation'
import P1 from '../assets/p1.jpg'
import P2 from '../assets/p2.jpg'
import P3 from '../assets/p3.jpg'
import Bcard from './Bcard'
import Footer from './Footer'


const data = [
    {
        img: P1,
        title: "This is first title",
        text: "This is first text"

    },
    {
        img: P2,
        title: "This is second title",
        text: "This is second text"
    },
    {
        img: P3,
        title: "This is third title",
        text: "This is third text"
    },
    {
        img: P1,
        title: "This is third title",
        text: "This is third text"
    }, {
        img: P1,
        title: "This is third title",
        text: "This is third text"
    },
    {
        img: P1,
        title: "This is third title",
        text: "This is third text"
    },
    {
        img: P1,
        title: "This is third title",
        text: "This is third text"
    }
]


function Batteries() {
    return (
        <div>

            {/* Navbar */}
            <Navigation />

            <div className="container-fluid mt-3">
                <h1 className="text-center mb-3" style={{ fontFamily: "Monospace" }}>Batteries</h1>

                {/* <Bcard img={P1}/>     
                    <Bcard img={P2}/>
                    <Bcard img={P3}/>
                    <Bcard img={P1}/>     
                    <Bcard img={P2}/>
                    <Bcard img={P3}/> */}

                {/* <div class="row">
                    <div class="col-sm-6 mb-3">
                        <div class="card">
                            <img class="card-img-top" src={P1} alt="Card image cap" height="280px" />
                            <div class="card-body">
                                <h5 class="card-title">Special title treatment</h5>
                                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <Link to="/contact" class="btn btn-primary">Enquiry</Link>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 mb-3">
                        <div class="card">
                            <img class="card-img-top" src={P2} alt="Card image cap" height="280px" />
                            <div class="card-body">
                                <h5 class="card-title">Special title treatment</h5>
                                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <Link to="/contact" class="btn btn-primary">Enquiry</Link>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="card">
                            <img class="card-img-top" src={P3} alt="Card image cap" height="280px" />
                            <div class="card-body">
                                <h5 class="card-title">Special title treatment</h5>
                                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <Link to="/contact" class="btn btn-primary">Enquiry</Link>
                            </div>
                        </div>
                    </div>
                </div> */}

                <div className="row d-flex justify-content-center">
                    {data.map((elem) => <Bcard img={elem.img} key={elem.img} title={elem.title} text={elem.text} />)}
                </div>

            </div>
            <Footer />
        </div>

    )
}

export default Batteries
