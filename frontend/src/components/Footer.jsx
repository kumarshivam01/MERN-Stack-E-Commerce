import React from 'react'
import { Col } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Container } from 'react-bootstrap'

export default function Footer() {
  return (
    <>
        <footer>
            <Container>
                <Row>
                    <Col className='text-center mb-5 mt-5'  >
                        <span> Copyright &copy; Technifo YT</span>
                    </Col>
                </Row>
            </Container>
        </footer>
    </>
  )
}
