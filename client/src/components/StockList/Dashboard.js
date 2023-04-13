import React from 'react'
import "./Dashboard.css"

const Dashboard = () => {
  return (
    <div className='dashboard-container'>
      <h1 className='heading'>
        Dashboard
      </h1>
      <div className="details">
      <div class="dashboard-card card">
          <div class="card-body">
            <h5 class="card-title">UserName</h5>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Number</li>
            <li class="list-group-item">Email</li>
            <li class="list-group-item">Account Balance</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Dashboard