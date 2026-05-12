import React from 'react'
import Form from "../components/Form.jsx"

const Signup = () => {
  const [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
    password: ""
  })

  const [users, setUSers] = useState([])

   const handleDetails = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setUserDetails({...userDetails, [name]: value })
        console.log(userDetails);
      }

      const handleSignup = () => {

          const {username, email, password} = userDetails;

          if (!username || !email || !password){
            return alert("Kindly fill all fields!")
          }
        const updatedUsers = [...users, userDetails]
        console.log(updatedUsers)

        localStorage.setItem("users", JSON.stringify(updatedUsers))
      }

  return (
    <div>
      Signup
      <Form placeholder ="Enter name" type="text" whenitype={handleDetails} name="username"/>
      <Form placeholder ="Enter email" type="email" whenitype={handleDetails} name="email" />
      <Form placeholder= "Enter password" type="password" whenitype={handleDetails} name="password"/>
    </div>
  )
}

export default Signup
