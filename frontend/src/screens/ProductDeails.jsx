import React from 'react'
import Products from '../products'
import { Link } from 'react-router-dom'
import { Row, Col, ListGroup, Button, Image } from 'react-bootstrap'
import { ListGroupItem } from 'react-bootstrap'
import Rating from '../components/Rating'
export default function ProductDeails({ match }) {
    const product = Products.find((p) => p._id === match.params.id)

    return (
        <>
            <div>
            <Link to='/' className='btn btn-light'>Go Back</Link>
                <Row>
                    <col md={6}>
                        <Image src={product.image} alt={product.name} fluid />
                    </col>
                    <col md={3}>
                        <ListGroup variant='flush'>
                            <ListGroupItem>
                                <h3>{product.name}</h3>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Rating value={product.rating} text={`${product.numReviews} Reviews`} />
                            </ListGroupItem>
                            <ListGroupItem>Price : ${product.price}</ListGroupItem>
                            <ListGroupItem>{product.description}</ListGroupItem>
                        </ListGroup>
                    </col>
                    <col md={3}>
                        <ListGroupItem>
                            <Row>
                                <Col>Status :</Col>
                                <Col>{product.countInStock>0 ?'In Stock': 'out of Stock'}</Col>
                            </Row>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Button className='btn-block' type="button">Add To Cart</Button>
                        </ListGroupItem>
                    </col>
                </Row>
            </div>
        </>
    )
}
