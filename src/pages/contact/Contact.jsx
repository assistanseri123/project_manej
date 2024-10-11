import axios from 'axios';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';


function FormEvents() {
    const styleCss={color:"green"}
    const [user, setUser] = useState({})
ToastContainer()

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
        toast.success('🦄 Data Has Been Inserted!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
         await axios.post('https://664315f43c01a059ea217049.mockapi.io/final',user)
         .then((res)=>{
              alert("data has been inserted")
              window.location.href = window.location.href;
         })
         .catch((err)=>console.log(err))
    }

    return (
        <>
        {/* <ToastContainer/> */}
            <div className="col-6 mx-auto shadow-lg my-5 p-5">
                <form action="" method='post' onSubmit={(e) => submitData(e)}>
                    <h2 className='text-center'>Contact Us</h2>
                    <div className='mt-4'>
                        <input type="text" className='form-control' placeholder='Enter Name' name='name' onChange={(e) => inputData(e)} style={{color:"red"}} />
                    </div>
                    <div className='mt-4'>
                        <input type="text" className='form-control' placeholder='Enter E-mail Id' onChange={(e) => inputData(e)} name='emailId' style={styleCss}/>
                    </div>
                    {/* <div className='mt-4'>
                        <input type="text" className='form-control' placeholder='Enter Mobile No' onChange={(e) => inputData(e)} name='mobile' />
                    </div> */}
                    <div className="mt-4">
                        <input type="textarea" className='form-control' placeholder="message" onChange={(e) => inputData(e)}/>
                    </div>
                    <div className='mt-4'>
                        <button className='btn btn-success'>submit</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default FormEvents;