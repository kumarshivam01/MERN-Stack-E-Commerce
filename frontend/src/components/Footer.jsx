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
                    <Col className='text-center'>
                        <span> Copyright &copy; Technifo YT</span>
                    </Col>
                </Row>
            </Container>
        </footer>
    </>
  )
}
