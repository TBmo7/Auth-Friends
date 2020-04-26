import React, {useState,useEffect} from "react"
import {axiosWithAuth} from '../utils/axiosWithAuth' 
import Friend from "./Friend"

function FriendPage(){
    
    // const idGen = () =>{
    //     let idNum = friends.length+1;
    //     console.log("IDNUM FROM GEN",idNum)
    //     return(
    //         idNum++
    //     )
    // }    

    
    const [friends,setFriends] = useState([])
    const [fields,setFields] = useState({
        name:"",
        age:"",
        email:"",
        id: Date.now()
    })

      
        const changeHandler = (e) =>{
            setFields({
                ...fields,
                [e.target.name]:e.target.value
            })
        }

        const handleSubmit = (e) =>{
            e.preventDefault()
            addData(fields)
            setFields({
                name:"",
                age:"",
                email:"",
                id:Date.now()
            })
        }
    
        const getData = () => {
            axiosWithAuth()
            .get("/friends")
            .then(res=>{
                console.log("FRIENDPAGE SUCCESS RES", res.data)
                setFriends(res.data)
                
            })
             .catch(err=>
                console.error("FRIENDS PAGE ERROR", err))    
                
        }

        const addData = (friendData) => {
            axiosWithAuth()
            .post("/friends",friendData)
            .then((res)=>{
                console.log("TROY POST SUCCESS", res)
                setFriends(res.data)
            })
            .catch(err=>
                console.log("FRIENDS PAGE POST ERROR",err))
        }


     useEffect(()=>{
        //  let isCancelled = false;
         getData()
        //  return () => {
        //      isCancelled = true;
        //  }
     },[])       
     console.log("Friends STATE", friends)


    return(
        <div>
            <form>
                <label>ADD FRIEND
                    <input
                    name = "name"
                    onChange = {changeHandler}
                    type = "text"
                    value = {fields.name}
                    placeholder = "Name"
                    />
                    <input
                    name = "age"
                    onChange = {changeHandler}
                    type = "text"
                    value = {fields.age}
                    placeholder = "Age"
                    />
                    <input
                    name = "email"
                    onChange = {changeHandler}
                    type = "text"
                    value = {fields.email}
                    placeholder = "Email"
                    />
                    <button type = "submit" onClick = {handleSubmit}>ADD FRIEND</button>
                </label>

            </form>

            {friends.map(info=>{
                return(
                    <Friend name ={info.name} age = {info.age} email = {info.email} />
                )
            })}
        </div>
    )
}

export default FriendPage