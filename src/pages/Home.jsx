import { CardImgOverlay, Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel';

import { Query } from 'appwrite';
import { useState, useEffect } from "react";

export function Home(props) {
    const [data, setData] = useState([])
    const [loaded, setLoaded] = useState(false)

    document.title = "The best drinks in town"

    const database = props.db
    const storage = props.str

    //function to get data
    const getData = async () => {

        const result = await database.listDocuments(
            '6746c6fe002249f2cbb4', // database ID
            '6746c70900389c12fa8e', // collection ID
            []

        )

        setData(result.documents)
        setLoaded(true)
    }

    useEffect(() => { getData() }, [data])

    const ProductCollection = data.map((wine) => {
        // get preview of image
        const imgURL = storage.getFileView(
            '6746d6020019e2fe55d5',// bucket ID
            wine.image // file ID
        )
        // return each product as Col
        return (
            <Col className="mt-4 mb-4" md={4}>
                <Card border="info">
                    <Card.Img className="img-fluid" src={ imgURL } />
                    <Card.Header>
                        <Card.Title>{wine.name}</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <h5>{wine.price}</h5>
                        <Card.Text>{wine.description}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        )
    })

    return (
        <Container>
            <Carousel>
                <Carousel.Item>
                    <img className="d-block w-100" src="/images/bottles.jpg" alt="First slide" />
                    <Carousel.Caption className="bg-light text-danger rounded" >
                        <h3><img alt="logo" src="/public/images/wine-glass.png" width="30" height="30" className="d-inline-block align-top" />{' '}
                            The best drink in town !</h3>
                        <p>Wine is a timeless beverage, crafted from fermented grapes, that has been enjoyed by cultures around the world for centuries.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src="/images/winery.jpg" alt="Second slide" />
                    <Carousel.Caption className="bg-light text-danger rounded">
                        <h3><img alt="logo" src="/public/images/wine-glass.png" width="30" height="30" className="d-inline-block align-top" />{' '}
                            The best drink in town !</h3>
                        <p>With its rich history and complex character, wine is a testament to the art and science of winemaking.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src="/images/party.jpg" alt="Third slide" />
                    <Carousel.Caption className="bg-light text-danger rounded">
                        <h3><img alt="logo" src="/public/images/wine-glass.png" width="30" height="30" className="d-inline-block align-top" />{' '}
                            The best drink in town !</h3>
                        <p>Wine is not just a drink; it's an experience that brings people together, enhances meals, and celebrates life's special moments.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <Row>
                {ProductCollection}
            </Row>
            
            <Row className="mt-5 mb-5">
                <Col>
                    <Card border="info" >
                        <Card.Img variant="top" src="/images/red.jpg" />
                        <Card.Header><Card.Title>Red wine</Card.Title></Card.Header>
                        <Card.Body>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="outline-info" as={Link} to="/red-wine">Let's go find out more!</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card border="info" >
                        <Card.Img variant="top" src="/images/white.jpg" />
                        <Card.Header><Card.Title>White wine</Card.Title></Card.Header>
                        <Card.Body>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="outline-info" as={Link} to="/white-wine">Let's go find out more!</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )

}