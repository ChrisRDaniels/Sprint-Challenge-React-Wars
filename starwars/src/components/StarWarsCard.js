import React from 'react';
import {Card, CardImg, CardBody,CardTitle, CardSubtitle, Container, Row, Col} from 'reactstrap';

const StarWarsCard = (props) => {
    return (
      <>
         <Container>
                <Row style={{ justifyContent: "center" }} >
                    <Col xs="4" sm="6" lg="10" style={{height: "45vh", marginBottom: "10vh"}} >
                        <Card >
                            <CardBody style={{backgroundColor: "#C4C6D2", textAlign: "center", boxShadow: "10px 10px 10px 0px black" }}>
                                <CardImg style={{height: "50%", width: "50%", margin: "0 auto", border: "none"}}className="StarWarsLogo" alt="Star Wars Logo" src={"https://i.redd.it/tuhtobyiqoc01.png"} />
                                <CardTitle><h1>{props.name}</h1></CardTitle>
                                <CardSubtitle><p>Gender: {props.gender}</p></CardSubtitle>
                                <CardSubtitle><p>Hair Color: {props.hair_color}</p></CardSubtitle>
                                <CardSubtitle><p>Height: {props.height} cm</p></CardSubtitle>
                                <CardSubtitle><p>Mass: {props.mass}</p></CardSubtitle>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
        )
};

export default StarWarsCard;