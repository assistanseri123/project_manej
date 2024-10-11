import React, { useEffect, useState } from 'react'
import "../home/home.css"
import Header from '../../component/header/Header'
import Posts from '../../component/posts/Posts'
import Sidebar from '../../component/sidebar/Sidebar'
// import Article from '../../article/Article'
import axios from 'axios'

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts")
      setPosts(res.data)
    }
    fetchPosts()
  }, [])
  return (
    <>
      <div className='col-md-12 col-sm-6'>
        <Header />
        <div className='home'>
          <Posts posts={posts} />
        </div>
        <Sidebar />
      </div>
    </>
  )
}
