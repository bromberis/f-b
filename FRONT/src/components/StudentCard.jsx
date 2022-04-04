import React from "react";

function StudentCard({ id, name, age }) {
  return (
    <div className="col-3">
      <div className="card my-3">
        <div className="card-body">
          <p className="card-text">{id}</p>
          <p className="card-text">{"Vardas: " + name}</p>
          <p className="card-text">{"Amžius: " + age}</p>
        </div>
      </div>
    </div>
  );
}

export default StudentCard;
