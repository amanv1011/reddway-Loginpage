import React, { useState } from 'react'
import './login.css'


export default function Login({login, error}) {
    const [details, setDetails] = useState({name : "", password : ""})

    function submitHandler(e){
        e.preventDefault()

        login(details)
    }
    return (
        <>
            <form onSubmit={submitHandler} className="box">
            <div className="profile__img">
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="" />
            </div>
                <h2>Login</h2>
                    <input type="text" placeholder ="Usrname" onChange= {e=> setDetails({...details,name:e.target.value})}  value={details.name}/>
                    <input type="password" placeholder ="Password" onChange= {e=> setDetails({...details,password :e.target.value})}  value={details.password} />
                    <input type="submit" value="Login" />
                    <h5 style={{fontStyle:"italic"}}>{(error != "")? ( <div className="error">{error}</div> ):""}</h5>
            </form>
        <p><span>HINT</span> username : test, password = test123</p>
        </>
    )
}
