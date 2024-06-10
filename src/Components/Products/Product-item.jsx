import React from "react";
import { Button, Card } from 'react-bootstrap'



export function MyproductItem(props){

    return (

        <div className="col-sm-4 col-md-3 mb-3">
           <Card>
            <Card.Img variant="top" src={props.item.img} />
            <Card.Body>
                <Card.Text>
                    {props.item.name}
                </Card.Text>
            </Card.Body>
      </Card>
        </div>

    )
}