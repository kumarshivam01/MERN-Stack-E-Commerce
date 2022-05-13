import React , {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Row, Col, ListGroup, Button, Image } from 'react-bootstrap'
import { ListGroupItem } from 'react-bootstrap'
import Rating from '../components/Rating'
export default function ProductDeails() {
    // const product = Products.find((p) => p._id === match.params.id)
    const { id } = useParams();
    const [product, setProducts] = useState([])
    useEffect(()=>{
        const fetchProducts = async ()=>{
          const {data} = await axios.get(`http://localhost:8080/products/${id}`)
          // const data = res.json()
          setProducts(data) 
        }
        fetchProducts()
      },[])
      console.log(product)
    return (
        <>
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
                        <ListGroupItem>
                            <Button className='btn-block' type="button">Add To Cart</Button>
                        </ListGroupItem>
                    </Col>
                    </Col>
                    
                </Row>
            </div>
        </>
    )
}
