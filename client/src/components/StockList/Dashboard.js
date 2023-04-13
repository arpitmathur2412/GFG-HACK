import "./Dashboard.css"
import { React, useContext } from 'react'
import userContext from "../context/users/userContext" 
import Button from "react-bootstrap/esm/Button"

const Dashboard = () => {

  const context = useContext(userContext)
  const {user,fetchUser,setUser}=context;

  function onClick(){
    setUser(fetchUser());
    console.log(user);
  }

  return (
    <div className='dashboard-container'>
      <h1 className='heading'>
        Dashboard
      </h1>
      <Button onClick={onClick}>show Details</Button>
      <div className="details">
        <div class="dashboard-card card">
          <div class="card-body">
            <h5 class="card-title">{user.name}</h5>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">{user.phone}</li>
            <li class="list-group-item">{user.email}</li>
            <li class="list-group-item">{user.income}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Dashboard