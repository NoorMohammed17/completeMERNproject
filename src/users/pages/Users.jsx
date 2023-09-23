//import React from 'react'
import UsersList from "../components/UsersList"

const Users = () => {

  const DUMMY_USERS = [
    {
    id:'u1',
    name:"Noor",
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOuxrvcNMfGLh73uKP1QqYpKoCB0JLXiBMvA&usqp=CAU',
    places:5

  },
  {
    id:'u2',
    name:"Tara",
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOuxrvcNMfGLh73uKP1QqYpKoCB0JLXiBMvA&usqp=CAU',
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
