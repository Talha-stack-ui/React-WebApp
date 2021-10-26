import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import PI1 from '../assets/Product_img1.PNG'
import PI2 from '../assets/Product_img2.PNG'

function Products() {
    return (
        <div className="container-fluid mt-3">
            <h1 className="text-center mb-3" style={{ fontFamily: "Monospace" }}>Our Products</h1>


            <div className="row">
                <div className="col-sm-6 mb-3">
                    <div className="card">
                        <img className="card-img-top" src={PI1} alt="Card image cap" height="280px" />
                        <div className="card-body">
                            <h5 className="card-title">Special title treatment</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <Link to="/scooters" className="btn btn-primary">Scooters</Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card">
                        <img className="card-img-top" src={PI2} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Special title treatment</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <Link to="/batteries" className="btn btn-primary">Batteries</Link>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Products
