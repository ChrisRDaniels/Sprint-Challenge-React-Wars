import React, {useState, useEffect}from 'react';
import './App.css';
import axios from 'axios';
import StarWarsCard from "./components/StarWarsCard";
import {Card, CardBody, CardTitle, Container } from "reactstrap";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [people, setPeople] = useState([]);

  useEffect(() => {
    axios
    .get(`https://swapi.co/api/people/?format=json`)
    .then(response => {
      const starWarsChar = response.data.results;
      setPeople(starWarsChar);
    })
    .catch(error => {
      console.log('unable to return data', error);
    });
  }, []);


  return (
    <Container>
    <CardTitle style={{ fontWeight: "bold", textAlign: "center", fontSize: "3rem", textShadow: "8px 5px 10px black", color: "white"}}>React Wars</CardTitle>
      <Card>
        <CardBody style={{ backgroundColor: "#000000", backgroundImage: url"/s" border: "5px solid darkred"}}>
        {people.map((person, index) => {
          return(
            <StarWarsCard key={index} name={person.name} gender={person.gender} height={person.height} hair_color={person.hair_color} mass={person.mass} url={person.url} />
          )
        })}
        </CardBody>
    </Card>
    </Container>
  );
}

export default App;
