/* eslint-disable react/prop-types */
import './Spellcard.css'

const Spellcard = ({ hechizo }) => {
    const link = `/spells/${hechizo.index}`
    return (
        <div className="spellcard">
            <h2>{hechizo.name}</h2>
            <span className='level'>{hechizo.level < 1 ? "cantrip" : hechizo.level}</span>
            <a href={link} className='button'>See more</a>
        </div>
    )
}

export default Spellcard