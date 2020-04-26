import React, {useState} from "react"
import {axiosWithAuth} from "../utils/axiosWithAuth"
// import axios from "axios"

function Login(props){

    const [credentials, setCredentials] = useState({});
    
    const login = e => {
        e.preventDefault();
        axiosWithAuth().post("/login", credentials) // sends the credentials to the API/Login in hopes of receiving a token
        .then(res =>{
            console.log("LOGIN PROMISE FROM LOGIN", res)
            localStorage.setItem('token', res.data.payload)
            props.history.push('/')
        })
    }

    const handleChange = e =>{
        setCredentials({
            ...credentials,
            [e.target.name]:e.target.value
        })
    }

    // axios.get("http://localhost:5000/api/")
    //     .then(res =>{
    //         console.log("LOGIN API PROMISE", res)
    //     })

    return(
        <div>
            <form onSubmit = {login}>
                <input
                type = "text"
                name = "username"
                value = {credentials.username}
                onChange = {handleChange}
                />
                <input
                type = "password"
                name = "password"
                value = {credentials.password}
                onChange = {handleChange}
                />
               <button>Log In</button>     
            </form>
            
        </div>
    )
}

export default Login