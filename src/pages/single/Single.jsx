import React from 'react'
import "../single/single.css"
import Sidebar from '../../component/sidebar/Sidebar'
import Singlepost from '../../component/singlePost/Singlepost';
export default function Single() {
  return (
    <div>
      <div className="single">
        <Singlepost/>
        <Sidebar/>
      </div>
    </div>
  )
}
