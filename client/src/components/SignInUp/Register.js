import React, { useState } from "react";
import './RegisterStyles.css'


const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [age, setAge] = useState('')
    const [income, setIncome] = useState('')
    const [date, setDate] = useState('')



    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        // take input
    }

    return (
        <div className="auth-form-container">
            <div className="new-constraints">

            <form className="register-form" onSubmit={handleSubmit}><h2>Register</h2>
                <label htmlFor="name">Full name</label>
                <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="full Name" />
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />

                <label htmlFor="phone">Phone No.</label>
                <input value={phone} onChange={(e) => setPhone(e.target.value)}type="text" placeholder="10-digit" id="phone" name="phone" />
                <label htmlFor="age">Age</label>
                <input value={age} onChange={(e) => setAge(e.target.value)}type="number" placeholder=">18" id="age" name="age" />
                <label htmlFor="income">Income</label>
                <input value={income} onChange={(e) => setIncome(e.target.value)}type="text" placeholder="" id="income" name="income" />
                <label htmlFor="date">Date</label>
                <input value={date} onChange={(e) => setDate(e.target.value)} type="Date" placeholder="DD/MM/YYYY" id="date" name="date" />


                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <br></br>
                <button type="submit">Log In</button>
            </form>
            <br></br>
            <button className="link-btn" onClick={() => props.onFormSwitch('signin')}><strong>Already have an account? Login here.</strong></button>
            </div>
        </div>
    )
}

export default Register