import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {fetchUsers} from '../store/usersReducer'

const Users = () => {
    const users = useSelector(state => state.users.users)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUsers())
    },[dispatch])

  return (
    <div>
        <h1>Users List</h1>
        {users.map((user) =>(
            <p key={user.id}>Name: {user.name}</p>
        ))}
    </div>
  )
}

export default Users