import React, { useEffect, useState } from 'react'
import axios from 'axios'
import style from "./home.module.css"
import { Link } from 'react-router-dom'

const Users = () => {
  let [data,setData]=useState([])

  useEffect(()=>{
           axios.get("http://localhost:3001/content")
           .then((responce)=>{
            setData(responce.data)
           })
           .catch(()=>{
            console.log("didnt get");
           })
  },[])

  let handleDelete=(id)=>{
    axios.delete(`http://localhost:3001/content/${id}`)
    .then(()=>{console.log("Deleted");})
    .catch(()=>{console.error("sorry");
  })
    window.location.reload(`/user`)
  }


  return (
    <div id={style.myUsers}>
      {/* npx json-server Backend/db.json --watch port 5000 */}
      {data.map((x)=>{
        // function handleData(id){
        //   const up=data.filter((d)=>id!==d.id)
        //   setData(up)
        // }
        return(
          <div id={style.cards}>
            <table >
              <tr>
                <th colSpan="2"><h4>Emp {x.id}</h4></th>
              </tr>
              <tr>
                <td>Name</td>
                <td>:{x.name}</td>
              </tr>
              <tr>
                <td>Salary</td>
                <td>:{x.salary}</td>
              </tr>
              <tr>
                <td>Company</td>
                <td>:{x.company}</td>
              </tr>
              <tr>
              <td><button><Link to={`/edit/${x.id}`}>Edit</Link></button></td>
              <td><button onClick={()=>handleDelete(x.id)}>Delete</button></td>
              </tr>
            </table>
          </div>
        )
      })}
    </div>
  )
}

export default Users


