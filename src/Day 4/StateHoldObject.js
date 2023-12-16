import React, { useState } from 'react'

export default function StateHoldObject() {
const[college,setCollege]=useState({cid:1, cname:"SKCT", year:2023})
const changeDemo=()=>
{
    setCollege((prevState)=>{return{...prevState,year:2020}})
} 
const changeDemo1=()=>
{
    setCollege((prevState)=>{return{...prevState,cname:"ABC"}})
} 
return (
    <div>
      <h1>College ID is {college.cid} College name is {college.cname} year is {college.year}</h1>
      <button onClick={changeDemo}>change year</button>
      <button onClick={changeDemo1}>change college</button>

    </div>
  )
}
