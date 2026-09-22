
import {} from '../types/UserTypes'

export const getUsersAsync = ():Promise<UserReference[]> => {

    const response = await fetch ('https://jsonplaceholder.typicode.com/users')
                if(!response.ok)
                {
    
                    throw new Error('Error en la ejecucion de la api')
    
                }
    
    const usersData:UserReference[] = await response.json()
    
    return usersData


}