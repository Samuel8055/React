import React from 'react';

const Person = (props) => {
  return (
    <div>
      <p onClick = { props.click }>My name is { props.name } and I'm { props.age } years old!</p>
      <input type = "text" onChange = { props.changed } value = { props.name }/>
    </div>
  )
}

export default Person;