import React from "react"
import Homepage from "./Component/Homepage"
import Createuser from "./Component/Createuser" 
import Users from "./Component/Users"
import Edituser from "./Component/Edituser"
import { BrowserRouter,Routes,Route } from "react-router-dom"
const App=()=>{
    return(
            <div>
               
                <BrowserRouter>
                <Homepage/>
                <Routes>
                    <Route path='/' element={<Createuser/>}/>
                    <Route path='/user' element={<Users/>}/>
                    <Route path='/edit/:index' element={<Edituser/>}/>
                    
                </Routes>
                </BrowserRouter>
            </div>
    )
}
export default App