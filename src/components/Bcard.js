import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'
import Contact from './Contact'




const Bcard = ({img,title,text,unique}) => {
    return (
        // <div>
        //     <div className="col-sm-6 mb-3">
        //         <div className="card">
        //             <img className="card-img-top" src={props.img} alt="Card image cap" height="280px" />
        //             <div className="card-body">
        //                 <h5 className="card-title">{props.title}</h5>
        //                 <p className="card-text">{props.text}</p>
        //                 <Link to="/scooters" className="btn btn-primary">Scooters</Link>
        //             </div>
        //         </div>
        //     </div>
        // </div>

        <Card style={{ width: '18rem' }} className="text-center m-1">
            <Card.Img variant="top" src={img} style={{width:"300px",position:'relative',left:"-18px",height:"310px"}}className="p-3"/>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {text}
                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
                <Button to="/contact" className="btn btn-primary" onClick={()=>console.log(unique)}>Enquiry</Button>
            </Card.Body>
        </Card>
    )
}




export default Bcard
