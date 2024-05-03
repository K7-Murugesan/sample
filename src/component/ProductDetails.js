import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const ProductDetails = () => {

    let[products, setProducts] = useState( [
        {id:1, pName: "Oppo123", price: 12000, manufacIn: "America"},
        {id:2, pName: "Vivo123", price: 22000, manufacIn: "China"},
        {id:3, pName: "OnePlus", price: 32000, manufacIn: "China"},
        {id:4, pName: "Apple", price: 42000, manufacIn: "Japan"},
        {id:5, pName: "Samsung", price: 25000, manufacIn: "India"},
        {id:6, pName: "Poco", price: 25000, manufacIn: "India"},
    ] )

  return (
    <div className='container text-center' >
        <h1> Total Products </h1>
        {/*  1 row = 12 column  */}
        <section className=' d-flex flex-wrap text-center'>  
            {
                products.map( (product)=>(
                    <Card style={{ width: '18rem' }} className='mx-3 my-3' k>
                        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlJ2u482NBtw501OOICaZxGrIcxNtG5SuqWQ&s" />
                        <Card.Body>
                            <Card.Title> {product.pName} </Card.Title>
                            <Card.Text> { product.manufacIn } </Card.Text>
                            <Card.Text> { product.price } </Card.Text>
                            <Button variant="primary">View Details</Button>
                        </Card.Body>
                    </Card>
                ) )
            }
        </section>
    </div>
  )
}
