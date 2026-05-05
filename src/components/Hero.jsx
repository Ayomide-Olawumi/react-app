import React, {useState} from "react";

const Hero = () => {

    let name = "Ade"

    const students = [
        {name: "Rokibat", height: "3'6"},
        {name: "Darasimi", height: "3'6"},
        {name: "Anu", height: "3'6"},
        {name: "Deborah", height: "3'6"},
        {name: "Taiwo", height: "3'6"},
        {name: "Kehinde", height: "3'6"},
        {name: "Ayo", height: "3'6"}
      ];

       return(
        <>
        <div>Hero</div>
        {students.map((student, index) => (
            <div key={index}>
                <h1>{student.name}</h1>
                <h2>{student.height}</h2>
            </div>
        ))}
        </>
       );
    };

export default Hero