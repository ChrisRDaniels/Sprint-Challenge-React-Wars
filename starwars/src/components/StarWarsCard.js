import React from 'react';
import {Card, CardImg, CardBody,CardTitle, CardSubtitle, Container, Row, Col} from 'reactstrap';

const StarWarsCard = (props) => {
    return (
      <>
         <Container>
                <Row style={{ justifyContent: "center" }} >
                    <Col xs="4" sm="6" lg="10" style={{height: "30vh", marginBottom: "10vh"}} >
                        <Card >
                        <CardImg style={{height: "40%", width: "40%", margin: "0 auto", border: "none"}}className="StarWarsLogo" alt="Logo" src={"https://i.redd.it/tuhtobyiqoc01.png"} />
                            <CardBody style={{backgroundColor: "#C4C6D2", textAlign: "center", boxShadow: "10px 10px 10px 0px black" }}>
                                <CardTitle>Name: {props.name}</CardTitle>
                                <CardSubtitle>Gender: {props.gender}</CardSubtitle>
                                <CardSubtitle>Hair Color: {props.hair_color}</CardSubtitle>
                                <CardSubtitle>Height: {props.height} cm</CardSubtitle>
                                <CardSubtitle>Mass: {props.mass}</CardSubtitle>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
        )
};

export default StarWarsCard;