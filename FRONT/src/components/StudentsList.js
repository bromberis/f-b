import React, { useState, useEffect } from "react";
import StudentCard from "./StudentCard";
import axios from "axios";
import * as ReactBootstrap from "react-bootstrap";
import Spinner from "./Spinner";

const url = "http://localhost:3001/api/v1/students";

function StudentsList() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getUsers = async () => {
    try {
      const data = await axios.get(url).then((res) => {
        console.log(res);
        setUsers(res.data.data.students);
      });
      setIsLoading(true);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(users);

  useEffect(() => {
    getUsers();
  }, []);

  const studentsData = users.map((data) => {
    return (
      <StudentCard key={data.id} id={data.id} name={data.name} age={data.age} />
    );
  });

  return <>{isLoading ? studentsData : <Spinner />}</>;
}

export default StudentsList;
