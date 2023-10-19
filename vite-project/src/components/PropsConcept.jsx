import React from "react";

function PropsConcept({ persons }) {
  return (
    <div>
      {persons.map((person, i) => {
        const { name, age, sex } = person;
        return (
          <div key={i.toString()} className="person">
            <h2>{name}</h2>
            <h3>{age}</h3>
            <h4>{sex}</h4>
          </div>
        );
      })}
    </div>
  );
}

export default PropsConcept;
