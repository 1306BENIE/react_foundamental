import { useEffect, useState } from "react"


const API_URL = "https://jsonplaceholder.typicode.com/albums";

const useJSONPLACEHOLDERGETWAY = () =>{
  const [Projet, setProjet] = useState([])

  const GetProjet = async() => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setProjet(data)
    } catch (error) {
      console.error('Lerreur est', error.message)
    }
    
  }
  useEffect(() => {
    GetProjet()
  }, [])
  return {
    Projet
  }
}


export default useJSONPLACEHOLDERGETWAY;