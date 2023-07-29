import { React, createContext, useEffect, useState} from 'react'

export const UserContext = createContext()

const UserContextProvider = (props) => {
    const[users, setUser]= useState([])


    useEffect(()=> {
        fetch('/api/users')
        .then(res=> res.json())
        .then((user)=> {setUser(user);
            console.log(users)
            })
    }
    , [users])



    const updateUser = (id, updated) => {
        setUser(users.map(user => user.id===id? updated: user))
    }

    return (
        <UserContext.Provider value={ {users, updateUser} }>
            {props.children}
        </UserContext.Provider>

  )
}

export default UserContextProvider;
