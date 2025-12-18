import React from 'react'
import Navbar from './Navbar'
import api from "../utils/axios"


const Postcart = () => {

  const getposts = async () => {
    try {
      const data = await api.get("/blogs")
      console.log(data);
    } catch (error) {
      
    }

  }
  getposts()
  return (



    <div>

    </div>
  )
}

export default Postcart