import React, { useState } from "react";

const Studentform = () => {
  const [page, setPage] = useState("students");
  const [collection, setCollection] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [cgpa, setCgpa] = useState("");
  const [studentId, setStudentId] = useState("");
  const [level, setLevel] = useState("");
  const [department, setDepartment] = useState("");

  const handleDetails = () => {
    if (
      !firstName || !lastName || !cgpa || !studentId || !level || !department
    ) {
      return alert("All fields are required");
    }
    const details = {
      firstName,
      lastName,
      cgpa,
      studentId,
      level,
      department,
      status: "Active",
    };

    setCollection([...collection, details]);
    setFirstName("");
    setLastName("");
    setCgpa("");
    setStudentId("");
    setLevel("");
    setDepartment("");
    setPage("students");
  };

  const deleteStudent = (index) => {
    setCollection(collection.filter((_, i) => i !== index));
  };

  let totalCgpa = 0;
  collection.forEach((student) => {
    totalCgpa += Number(student.cgpa);
  });

  let averageCgpa = 0;
  if (collection.length > 0) {
    averageCgpa = (totalCgpa / collection.length).toFixed(2);
  }

  return (
    <div>
      <h1>SchoolPortal</h1>
      <button onClick={() => setPage("students")}>Students</button>
      <button onClick={() => setPage("addStudent")}>Add Student</button>
      <br />
      <br />

      {page === "students" && (
        <div>
          <div>
            <h3>Total Students</h3>
            <p>{collection.length}</p>
          </div>
          <div>
            <h3>Active</h3>
            <p>{collection.length}</p>
          </div>
          <div>
            <h3>AVG CGPA</h3>
            <p>{averageCgpa}</p>
          </div>
          <div>
            <h3>Departments</h3>
            <p>
              {
                [...new Set(collection.map((student) => student.department))]
                  .length
              }
            </p>
          </div>
          <br />
          <input type="text" placeholder="Search by name, ID or CGPA..." />
          <br />
          <br />

      <table border="1" cellPadding="10">
            <thead>
              <tr>
                <th>Name</th>
                <th>CGPA</th>
                <th>Student ID</th>
                <th>Level</th>
                <th>Department</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

         <tbody>
            {collection.map((student, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  {student.firstName} {student.lastName}
                </td>
                  <td>{student.cgpa}</td>
                  <td>{student.studentId}</td>
                  <td>{student.level}</td>
                  <td>{student.department}</td>
                  <td>{student.status}</td>
                <td>
                  <button onClick={() => deleteStudent(index)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      )}

      {page === "addStudent" && (
        <div>
          <h2>Register New Student</h2>

          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />

          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />

          <br />
          <br />

          <input
            type="text"
            placeholder="CGPA"
            value={cgpa}
            onChange={(e) => setCgpa(e.target.value)}
          />

          <input
            type="text"
            placeholder="Student ID"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
          />

          <br />
          <br />

          <select value={level} onChange={(e) => setLevel(e.target.value)}>
            <option value="">Select Level</option>

            <option value="100">100 Level</option>

            <option value="200">200 Level</option>

            <option value="300">300 Level</option>

            <option value="400">400 Level</option>
          </select>

          <select
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          >
            <option value="">Select Department</option>

            <option value="Computer Science">Computer Science</option>

            <option value="Engineering">Engineering</option>

            <option value="Medicine">Medicine</option>

            <option value="Law">Law</option>

            <option value="Accounting">Accounting</option>
          </select>

          <br />
          <br />

          <button onClick={handleDetails}>Register Student</button>
        </div>
      )}
    </div>
  );
};

export default Studentform;
