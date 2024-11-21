import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Header from "../Header/Header"

const SpellPage = () => {
    const [hechizo, setHechizo] = useState({})
    const params = useParams()
    
    useEffect(() => {
        const myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");


        const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
        };

        fetch(`https://www.dnd5eapi.co/api/spells/${params.index}`, requestOptions)
        .then((response) => response.json())
        .then((data) => setHechizo({...data}))
        .catch((error) => console.error(error))
    }, [])

  return (
    <>
        <Header/>
        <h2>{hechizo.name}</h2>
        <p>{hechizo.desc}</p>
    </>
  )
}
export default SpellPage