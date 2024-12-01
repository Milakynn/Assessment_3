import { CardImgOverlay, Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'
// import { Query } from 'appwrite';
// import { useState, useEffect } from "react";
import Carousel from 'react-bootstrap/Carousel';

export function Home(props) {
    // const [data, setData] = useState([])
    // const [loaded, setLoaded] = useState(false)

    // document.title = "The best drinks in town"

    // const database = props.db
    // const storage = props.st

    // const getData = () => {

    //     let promise = database.listDocuments(
    //         "6746c6fe002249f2cbb4",
    //         "6746c70900389c12fa8e",
    //         [
    //             //Query.select(["name", "category"]),
    //             Query.equal("featured", true)
    //         ]
    //     );

    //     promise.then(function (response) {
    //         console.log(response);
    //         setData(response.documents)
    //     }, function (error) {
    //         console.log(error);
    //     });

    // }
    // useEffect( () => {
    //     if(!loaded ) {
    //         getData()
    //        setLoaded(true)
    //     }
    // }, [data])
    // console.log(loaded)

    // const Collection = data.map(
    //     (wine) => {
    //         const result = storage.getFileDownload('6746d6020019e2fe55d5', '6747f6980030cc9188fb', '6747f6a6003bb856337b');
    //         return (
    //             <Col>
    //                 <Card border="info" >
    //                     <Card.Header>
    //                         <Card.Title>
    //                             {wine.name}
    //                         </Card.Title>
    //                     </Card.Header>
    //                     <Card.Body>
    //                         <Card.Text>
    //                             {wine.description}
    //                         </Card.Text>
    //                         <Button variant="outline-info" as={Link} to="/white-wine">Let's go find out more!</Button>
    //                     </Card.Body>
    //                 </Card>
    //             </Col>
    //         )
    //     }
    // )

    //const Collection = data.map( wine => console.log( wine.name ) )

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
            {/* <Card className="bg-dark text-black">
                <Card.Img src="/images/bottles.jpg" alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title>
                        <img alt="logo" src="/public/images/wine-glass.png" width="30" height="30" className="d-inline-block align-top" />{' '}
                        The best drink in town !
                    </Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in
                        to additional content. This content is a little bit longer.
                    </Card.Text>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                </Card.ImgOverlay>
            </Card> */}
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
            {/* <Row>
                {Collection}
            </Row> */}
        </Container>
    )

}