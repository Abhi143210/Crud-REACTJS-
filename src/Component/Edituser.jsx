import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import style from "./home.module.css"


const Edituser = () => {
    

    let[name,setName]=useState("")
    let[salary,setSalary]=useState("")
    let[company,setCompany]=useState("")

    let nameData=(e)=>{
        e.preventDefault()
        setName(e.target.value)
      }
      let salaryData=(e)=>{
        e.preventDefault()
        setSalary(e.target.value)
      }
      let companyData=(e)=>{
        e.preventDefault()
        setCompany(e.target.value)
      }
      let nav=useNavigate()

      let {index}=useParams()
      console.log(index);

      useEffect(()=>{
        axios.get(`http://localhost:3000/content/{id}/${index}`)
        .then((resp)=>{
            console.log(resp.data);
            setName(resp.data.name)
            setSalary(resp.data.salary)
            setCompany(resp.data.company)
        })
        window.reload.location(`/edit`)

    },[index])
    
      let formh=()=>{
        let payload={name,salary,company}
        axios.put(`http://localhost:3001/content/${index}`,payload)
        .then(()=>{
          console.log("Data has been Started");
        })
        .catch(()=>{
          console.log("Something is wrong");
        })
        nav("/user")
      }

      // window.location.reload(`/edit`)
      
    return (
        <div id={style.myForm}>
          <table>
            <tr>
              <th colSpan="2"><h4>Update User Details</h4></th>
            </tr>
            <tr>
              <td><label >Name</label></td>
              <td>:<input type="text" value={name} onChange={nameData}/></td>
            </tr>
            <tr>
            <td><label >Salary</label></td>
              <td>:<input type="text" value={salary} onChange={salaryData}/></td>
            </tr>
            <tr>
            <td><label >Company</label></td>
              <td>:<input type="text" value={company} onChange={companyData}/></td>
            </tr>
            <tr >
              <th colSpan="2"><button onClick={formh}>Save</button></th>
            </tr>
          </table>
        </div>
      )
}

export default Edituser
