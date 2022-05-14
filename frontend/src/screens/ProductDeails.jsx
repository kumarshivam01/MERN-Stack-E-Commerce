import React , {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Row, Col, ListGroup, Button, Image,Form} from 'react-bootstrap'
import { ListGroupItem, } from 'react-bootstrap'
import Rating from '../components/Rating'
import { useDispatch, useSelector } from 'react-redux'
import {listProductDetails} from '../actions/productionAction'
import Loader from '../components/shared/Loader'
import Message from '../components/shared/Message'
export default function ProductDeails() {
    const [qty, setQty] = useState(1)
    const { id } = useParams();
    const dispatch = useDispatch()
    const productDetails = useSelector(state=>state.productDetails)
    const {loading,error,product} = productDetails
    useEffect(()=>{
        dispatch(listProductDetails(id))
      },[dispatch])
    //   console.log(product)
      const addToCartHandler = ()=>{
        //   history.push(`/cart/${id} ? qty=${qty}`)
          console.log("clicked")
      }

    return (
        <>
        {loading ? <Loader/>:error?<Message variant='danger'>{error}</Message> : 
            <div> 
            <Link to='/' className='btn btn-light'> <i className='fas fa-arrow-left'></i> &nbsp; Go Back</Link>
                <Row>
                    <Col md={6}>
                        <Image src={product.image} alt={product.name} fluid />
                    </Col>
                    <Col md={6}>
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
                        <Col md={5} className='mt-4'>
                        <ListGroupItem>
                            <Row>
                                <Col>Status :</Col>
                                <Col>{product.countInStock>0 ?'In Stock': 'out of Stock'}</Col>
                            </Row>
                        </ListGroupItem>
                        {
                            product.countInStock > 0 &&(
                                <ListGroupItem>
                                    <Row>
                                        <Col>
                                            Qty
                                        </Col>
                                        <Form.Control as='Select' value={qty} onchange={(e)=>setQty(e.target.value)}>
                                        {
                                            [...Array(product.countInStock).keys()].map((x)=>(
                                                <option key={x+1} value={x+1}>{x+1}</option>
                                            ))
                                        }

                                        </Form.Control>
                                    </Row>
                                </ListGroupItem>
                            )
                        }
                        <ListGroupItem>
                            <Button className='btn-block' type="button" onclick={addToCartHandler}>Add To Cart</Button>
                        </ListGroupItem>
                    </Col>
                    </Col>
                    
                </Row>
            </div>
        }
        </>
    )
}
