import React from "react";

const people = [
  {
    name: "Matheus",
    age: 31,
  },
  {
    name: "João",
    age: 45,
  },
  {
    name: "Maria",
    age: 65,
  },
  {
    name: "Josiclaudo",
    age: 49,
  },
  {
    name: "Josivaldo",
    age: 34,
  },
];

function App() {
  return (
    <div>
      {people
        .filter((person) => person.age < 60)
        .map((filteredPerson) => (
          <li>{filteredPerson.name}</li>
        ))}
    </div>
  );
}

export default App;
