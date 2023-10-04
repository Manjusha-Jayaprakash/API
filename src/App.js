import axios from "axios"
import "./App.css"
import React, { useEffect, useState } from "react"


const UsingAxios = () => {
  const [users, setUsers] = useState([])
  const fetchData = () => {
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(response => {
      setUsers(response.data)
    })
  }
  useEffect(() => {
    fetchData()
  }, [])


  return (
    <div className="App">
          <h1>Users</h1>
          <table border={5} className="table">
            <tr>
              <th>SNo</th>
              <th>Name</th>
              <th>User Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>City</th>
              <th>Company Name</th>
            </tr>
            {users.map(user => (
            <tr key={user.id}>
  <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.address.city}</td>
                <td>{user.company.name}</td>
              </tr>
            ))}
          </table>
    </div>
  )
}


export default UsingAxios;