import React from 'react'
import "./write.css"
import writeimg from "../../assets/Img/post1.jpg"

export default function Write() {
    return (
        <div className='container'>
            <div className="write">
                <img className='writeImg' src={writeimg} alt="" />
                <form className='writeForm'>
                    <div className="writeFormGroup">
                        <label htmlFor="fileInput">
                        <i class="writeIcon fa-solid fa-plus"></i> 
                        </label>
                        <input type="file" id='fileInput' style={{ display: "none" }} />
                        <input type="text" placeholder='Title' className='writeInput' autoFocus={true} />
                    </div>
                    <div className="writeFormGroup">
                        <textarea placeholder='Tell Your Story.....' type="text" className='writeInput writeText'></textarea>
                    </div>
                    <button className='writeSubmit'>Publish</button>
                </form>
            </div>
        </div>
    )
}
