import Loader from '../Loader/Loader'
import Spellcard from '../Spellcard/Spellcard'
import './Lista.css'
import { useState, useEffect } from 'react'

const Lista = () => {
    const [loading, setLoading] = useState("")
    const [hechizos, setHechizos] = useState([])
    const [clase, setClase] = useState("")
    const BASE_URL = "https://www.dnd5eapi.co"

    useEffect(() => {
        if (!clase) {
            fetch(`${BASE_URL}/api/spells`)
                .then(setLoading(true))
                .then(result => result.json())
                .then(data => setHechizos(data.results))
                .catch(error => console.log(error))
                .finally(() => setLoading(null))
        } else {
            fetch(`${BASE_URL}/api/classes/${clase}/spells`)
                .then(setLoading(true))
                .then(result => result.json())
                .then(data => setHechizos(data.results))
                .catch(error => console.log(error))
                .finally(() => setLoading(null))
        }
    },[clase])
    
    
    const handleLiClick = (clase) => {
        clase ? setClase(clase) : setClase("")
    }
    
    return (
        <section className='lista'>
            <div>
                <ul>
                    <li
                        className={clase === "" ? "active" : ""}
                        onClick={() => handleLiClick("")}>All</li>
                    <li
                        className={clase === "bard" ? "active" : ""}
                        onClick={() => handleLiClick("bard")}>Bard</li>
                    <li
                        className={clase === "cleric" ? "active" : ""}
                        onClick={() => handleLiClick("cleric")}>Cleric</li>
                    <li
                        className={clase === "druid" ? "active" : ""}
                        onClick={() => handleLiClick("druid")}>Druid</li>
                    <li
                        className={clase === "paladin" ? "active" : ""}
                        onClick={() => handleLiClick("paladin")}>Paladin</li>
                    <li
                        className={clase === "ranger" ? "active" : ""}
                        onClick={() => handleLiClick("ranger")}>Ranger</li>
                    <li
                        className={clase === "sorcerer" ? "active" : ""}
                        onClick={() => handleLiClick("sorcerer")}>Sorcerer</li>
                    <li
                        className={clase === "warlock" ? "active" : ""}
                        onClick={() => handleLiClick("warlock")}>Warlock</li>
                    <li
                        className={clase === "wizard" ? "active" : ""}
                        onClick={() => handleLiClick("wizard")}>Wizard</li>
                </ul>
            </div>
            <div>
                {loading && <Loader />}
                {!loading && hechizos.sort((a, b) => a.level - b.level).map((spell) => <Spellcard key={spell.index} hechizo={spell}/>)}
            </div>
        </section>
    )
}
export default Lista