//Es para 

import { useState, useEffect } from "react"
import {type UserReference} from "types"
import { getUsersAsync } from "../services/UserService"


//los hooks son para 

export const useUsers = () => {


    const [users,setUsers] = useState<UserReference[]>([])

    const [hasError,setHasError] = useState(false)

    /*const mensaje = "hola"

    Return
        mensaje
    }*/

    useEffect(()=>{
     const getUsers = async () => {
        
        /*const response = await fetch ('https://jsonplaceholder.typicode.com/users')
            if(!response.ok)
            {

                console.error('Error en la api')

            }

            const userData:UserReference[] = await response.json()
            setUsers(usersData)*/


            setHasError (false)
             

        
        try 
        {

            const usersResponse = await getUsersAsync()
            setUsers(usersResponse)

        } catch (error) {
            
            console.error(error)
            setHasError(true)
        
        }

     }   


     void getUsers()

    },[])


    

    return{
        
        users
        hasError
        
    }

}


