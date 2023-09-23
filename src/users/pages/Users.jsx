//import React from 'react'
import UsersList from "../components/UsersList"

const Users = () => {

  const DUMMY_USERS = [
    {
    id:'u1',
    name:"Noor",
    image:'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJlZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    places:5

  },
  {
    id:'u2',
    name:"Tara",
    image:'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJlZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    places:10

  },
]
  return (
    <div>
        <UsersList items={DUMMY_USERS}/>
      
    </div>
  )
}

export default Users
