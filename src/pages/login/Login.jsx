import axios from 'axios';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import "./login.css"

function FormEvents() {
    const styleCss={color:"green"}
    const [user, setUser] = useState({})

    const inputData = (e) => {
        var { name, value } = e.target;
        const userData = {
            [name]: value
        }

        // spread operator ...
        const result = { ...user, ...userData }
        setUser(result)
        console.log(user)

        // var a = "hello"
        // const obj = {
        //     [a]: "world"
        // }
        // console.log(obj)

        const obj = {
            first: "hello"
        }
        // console.log({ obj, name: "Henil",age:20 })
        // console.log({ ...obj, ...userData })
    }

    const submitData = async (event) => {
        event.preventDefault();
        // toast.success('🦄 Data Has Been Inserted!', {
        //     position: "top-right",
        //     autoClose: 5000,
        //     hideProgressBar: false,
        //     closeOnClick: true,
        //     pauseOnHover: true,
        //     draggable: true,
        //     progress: undefined,
        //     theme: "light",
        //     });
         await axios.post('https://664315f43c01a059ea217049.mockapi.io/final',user)
         .then((res)=>{
              alert("data has been inserted")
              window.location.href = window.location.href;
         })
         .catch((err)=>console.log(err))
    }

    return (
        <>
        <ToastContainer/>
            <div className="col-12 mx-auto col-md-12 col-sm-6 login">
                <form className='loginForm' action="" method='post' onSubmit={(e) => submitData(e)}>
                    <h2 className='text-center loginTitle'>Login</h2>
                    <div className='mt-4'>
                        <input type="text" className='form-control loginInput' placeholder='Enter UserName' name='username' onChange={(e) => inputData(e)} />
                    </div>
                    <div className='mt-4'>
                        <input type="text" className='form-control loginInput' placeholder='Enter E-mail Id' onChange={(e) => inputData(e)} name='emailId'/>
                    </div>
                    <div className='mt-4'>
                        <input type="text" className='form-control loginInputx' placeholder='Enter Mobile No' onChange={(e) => inputData(e)} name='mobile' />
                    </div>
                    <div className='mt-4'>
                        <button className='btn btn-success loginButton'>submit</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default FormEvents;