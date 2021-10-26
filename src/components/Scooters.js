import React from 'react'
import { Link } from 'react-router-dom'
import P4 from '../assets/p4.jpg'
import P5 from '../assets/p5.jpg'
import P6 from '../assets/p6.jpg'
import Bcard from './Bcard'
import Contact from './Contact'
import Footer from './Footer'
import Navigation from './Navigation'


const data = [
    {
        id: 1,
        img: P4,
        title: "This is first title",
        text: "This is first text"

    },
    {
        id: 2,
        img: P5,
        title: "This is second title",
        text: "This is second text"
    },
    {
        id: 3,
        img: P6,
        title: "This is third title",
        text: "This is third text"
    },
    {
        id: 4,
        img: P6,
        title: "This is third title",
        text: "This is third text"
    },
    {
        id: 5,
        img: P6,
        title: "This is third title",
        text: "This is third text"
    },
    {
        id: 6,
        img: P6,
        title: "This is third title",
        text: "This is third text"
    },
    {
        id: 7,
        img: P6,
        title: "This is third title",
        text: "This is third text"
    }
]

function Scooters() {
    return (
        <div>

            {/* Navbar */}
            <Navigation />
            <div className="container-fluid mt-3">
                <h1 className="text-center mb-3" style={{ fontFamily: "Monospace" }}>Scooters</h1>



                {/* <div className="row">
                {data.map((elem) => 
                {
                    return (
                        
                        <div className="">
                        <Bcard class img={elem.img} key={elem.img} title={elem.title} text={elem.text}/>
                        </div>
                    )
                }
                )}

                </div> */}

                <div className="row d-flex justify-content-center">
                {data.map((elem)=><> <Bcard img={elem.img} key={elem.id} unique={elem.id} title={elem.title} text={elem.text}/></>)}        
                </div>

                {/* {console.log(data[0].id)} */}


                {/* <Bcard img={P4}/>     
                    <Bcard img={P5}/>
                    <Bcard img={P6}/>
                    <Bcard img={P4}/>     
                    <Bcard img={P5}/>
                    <Bcard img={P6}/> */}

                {/* <div class="row">
                    <div class="col-sm-6 mb-3">
                        <div class="card">
                            <img class="card-img-top" src={P4} alt="Card image cap" height="280px" />
                            <div class="card-body">
                                <h5 class="card-title">Special title treatment</h5>
                                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <Link to="/contact" class="btn btn-primary">Enquiry</Link>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 mb-3">
                        <div class="card">
                            <img class="card-img-top" src={P5} alt="Card image cap" height="280px" />
                            <div class="card-body">
                                <h5 class="card-title">Special title treatment</h5>
                                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <Link to="/contact" class="btn btn-primary">Enquiry</Link>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="card">
                            <img class="card-img-top" src={P6} alt="Card image cap" height="280px" />
                            <div class="card-body">
                                <h5 class="card-title">Special title treatment</h5>
                                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <Link to="/contact" class="btn btn-primary">Enquiry</Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div> */}
                <Footer />
            </div>
        </div>
    )
}

export default Scooters
