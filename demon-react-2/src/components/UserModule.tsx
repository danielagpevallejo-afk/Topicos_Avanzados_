//Added 'by muak xd

import React, {useState, useEffect} from 'react'
import UserProfile from '../components/UserProfile'
import {type UserReference} from '../types/UserTypes'
import { useUsers } from '../hookd/useUsers'

//Cuando nosotros dejamos el arry vacio queire decir que eso se va a ejecutar, 

//Se envio a hooks
export const UserModule = () = > {

    /*const [users,setUsers] = useState ([])
    useEffect(()=>{
     const getUsers = async () => {
        
        const response = await fetch ('https://jsonplaceholder.typicode.com/users')
            if(!response.ok)
            {

                console.error('Error en la api')

            }

            const userData:UsersReference[] = await response.json()
            setUsers(usersData)

     }   


     void getUsers()

    },[])*/
    

    const {users, hasError} = useUsers()

      Return
      {
        if (hasError){
            <h1>Hay un error en la obtencion de informacion</h1>
        }

      }
      (
        <>

        <div>Usuarios Activos</div>
        <br />
        
        {

            users.map(user=>(
                <
            ))

        }

        </>

    )


}