import React, { useState } from "react";

const Hello = () => {
  const [collection, setCollection] = useState([]);

  const [studentName, setStudentName] = useState("");
  const [course, setCourse] = useState("");
  const [level, setLevel] = useState("");

  const handleDetails = () => {
    if (!studentName || !course || !level) {
      return alert("all fields are to be filled");
    }

    const details = {
      studentName,
      course,
      level,
    };

    setCollection([...collection, details]);
  };

  return (
    <div>
      <input
        onChange={(e) => setStudentName(e.target.value)}
        placeholder="Enter name"
        type="text"
      />
      <br />
      <input
        onChange={(e) => setCourse(e.target.value)}
        placeholder="Enter Course"
        type="text"
      />
      <br />
      <input
        onChange={(e) => setLevel(e.target.value)}
        placeholder="Enter Level"
        type="text"
      />
      <br />
      <button onClick={handleDetails}>Submit</button>

      <div>
         <table border="1" style={{ marginTop: "20px", gridTemplateColumns: "1fr 1fr 1fr", width: "30%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>S/N</th>
            <th>Name</th>
            <th>Course</th>
            <th>Level</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {collection.map((student, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{student.studentName}</td>
              <td>{student.course}</td>
              <td>{student.level}</td>
              <td>
                 <button onClick={() => setCollection(collection.filter((_, i) => i !== index))}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default Hello;