import React from 'react';
import Person from './person/Person';

const Persons = (props) => (
  props.persons.map((person, index) => {
    return <Person 
      name = { person.name } 
      age = { person.age } 
      click = { () => props.clicked(index) }
      key = { index }
      changed = {(event) => props.changed(event, person.id) }
    />
  })
);

export default Persons;