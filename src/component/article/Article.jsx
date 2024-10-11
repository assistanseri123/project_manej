import React from 'react'
import "../article/article.css"
// import article1 from "../assets/Img/article1.png"
// import article2 from "../assets/Img/article2.jpg"
import article3 from "../../assets/Img/aaa1.jpeg"
export default function Article() {
  return (
    <div>
      <div className="post col-12 col-md-9">
        <img className='postImg' src={article3} alt="" />
        <div className="postInfo">
            <div className="postCats">
                <span className='postCat'>Music</span>
                <span className='postCat'>Life</span>
            </div>
            <span className='postTitle'>Lorem ipsum dolor sit</span>
            <hr />
            <span className='postDate'>1 hour ago</span>
        </div>
        <p className="postDescription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum aliquid, quasi quis pariatur quibusdam natus, perferendis quos ea doloribus tempora dolores veritatis saepe, facere totam voluptas porro? Veniam, maiores in.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci expedita nesciunt autem dicta deleniti enim praesentium corporis maxime eligendi animi sequi, aliquid, molestias natus ea dolor nobis libero cum deserunt.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, laudantium maiores fugiat ullam enim facere quisquam, quidem expedita rerum vel adipisci ratione, unde obcaecati blanditiis illo cum. Quibusdam, laboriosam reiciendis.</p>
      </div>
    </div>
  )
}
